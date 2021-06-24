const getUrlParams = ({ search }) => {
  const urlParams = new URLSearchParams(search.splice(1));
  const entries = urlParams.entries();
  return paramsToObject(entries);
};

export default Utils = {
  getUrlParams,
};
