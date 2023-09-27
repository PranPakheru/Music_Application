import React, { useContext, useEffect, useState } from "react";
import "./CombinedPageStyle.css";
import HeaderPart from "./HeaderPart";
import DrawerPart from "./DrawerPart";
import DisplayPart from "./DisplayPart";
import { AxiosService } from "../../source/service/AxiosService";
import { useLocation } from "react-router-dom";
import MyContext from "../../source/context/MyContext";

const CombinedPage = () => {
  const axiosService = new AxiosService();
  const { authToken, setAuthToken } = useContext(MyContext);

  const location = useLocation();
  useEffect(() => {
    const param = new URLSearchParams(location.search);
    const token = param.get("token");
    setAuthToken(token);
  }, []);

  useEffect(() => {
    if (authToken && authToken.length > 0) {
      axiosService
        .fetchServiceSession(authToken)
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    }
  }, [authToken]);

  return (
    <div className="CPBackground">
      <div>
        <HeaderPart />
      </div>

      <div className="sideBySide">
        <div className="CPDrawer">
          <DrawerPart />
        </div>

        <div className="cards">
          <DisplayPart />
        </div>
      </div>
    </div>
  );
};

export default CombinedPage;
