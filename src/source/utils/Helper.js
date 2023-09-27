import md5 from "md5";

export const generateApiSignature = (apiKey, authToken, apiSecret) => {
  let paramStrings = "";

  paramStrings += `api_key${apiKey}methodauth.getSessiontoken${authToken}${apiSecret}`;

  return md5(paramStrings);
};
