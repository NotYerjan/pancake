const INIT_MODEL = {
  isDarkMode: false,
  isHealthIndicator: false,
  isSettingsOpen: false,
  ads: {
    number: 1,
    amount: 3,
  },
  topStakes: ["pools", "farms"],
};

const set = async (key, item) => {
  try {
    const jsonItem = JSON.stringify(item);
    localStorage.setItem(key, jsonItem);
    return await get("model");
  } catch (e) {
    console.log(e.message);
  }
};

const get = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log(e.message);
  }
};

const init = () => {
  const model = get("model") ? get("model") : set("model", INIT_MODEL);
  return model;
};

export default { set, get, init };
