import md5 from 'md5';

export const generateApiSignature=(apiKey, authToken, apiSecret)=>{
    // const sortedParameters = Object.keys({
    //     apiKey,
    //     token: authToken,
    //   })
    //   .sort()
    //   .reduce((acc, key) => {
    //     acc[key] = sortedParameters[key];
    //     return acc;
    //   }, {});
    // console.log("")
    // console.log("parameters", apiKey, apiSecret, authToken);
      const sortParam = {apiKey:apiKey, apiSecret:apiSecret, authToken:authToken};
      let paramStrings = "";
      // for (let itemKey in sortParam) {
      //   paramStrings += itemKey
      //   console.log("asdqwezxc", itemKey, sortParam[itemKey])
      //   paramStrings += sortParam[itemKey]
      // }
      paramStrings += `api_key${apiKey}methodauth.getSessiontoken${authToken}${apiSecret}`
      // console.log(sortParam["apiKey"], sortParam["authToken"], sortParam["apiSecret"])
    // Object.keys(sortParam).map((item)=>{
      // console.log("asdqwezxc", item, sortParam[item])
    // })
    //   const paramString = Object.entries(sortedParameters)
    // .map(([key, value]) => `${key}${value}`)
    // .join('');

    // const paramStringWithSecret = paramString + apiSecret;

   
    // return md5(paramStringWithSecret);
    // console.log(paramStrings, "param Strings");
    return md5(paramStrings);

}