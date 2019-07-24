const axios = require('axios');

const endpoint = 'http://localhost:4000/hubs';

const method = process.argv[2].toUpperCase();
const id = process.argv[3];

const input = { name: `api-${Date.now()}` };

const response = data => {
  console.log('RESPONSE:');
  console.log(data);
};

console.log('METHOD: ', method);

if (id) {
  switch (method) {
    case 'DELETE':
      return axios
                  .delete(endpoint + `/${id}`)
                  .then(res => response(res.data))
                  .catch(err => console.error(err.response.data));
    case 'GET':
      return axios
                  .get(endpoint + `/${id}`)
                  .then(res => response(res.data))
                  .catch(err => console.error(err.response.data));
    case 'PUT':
      return axios
                  .put(endpoint + `/${id}`, input)
                  .then(res => response(res.data))
                  .catch(err => console.error(err.response.data));
    default:
      return console.error('undefined method');
  }
} else {
  switch (method) {
    case 'GET':
      return axios
                  .get(endpoint)
                  .then(res => response(res.data))
                  .catch(err => console.error(err.response.data));
    case 'POST':
      return axios
                  .post(endpoint, input)
                  .then(res => response(res.data))
                  .catch(err => console.error(err.response.data));
    default:
      return console.error('undefined method');
  }
}