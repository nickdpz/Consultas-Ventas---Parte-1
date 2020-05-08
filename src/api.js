const BASE_URL = ' https://apirecruit-gjvkhl2c6a-uc.a.run.app';

async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  data: {
    getDate(date) {
      return callApi(`/compras/${date}`);
    },
    getCustomer(userId) {
      return callApi(`/clientes/${userId}`);
    }
  },
};

export default api;