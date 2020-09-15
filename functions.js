const { default: Axios } = require('axios');

const functions = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: 'Mark' };
    user['lastName'] = 'Wetzel';
    return user;
  },
  fetchUser: () =>
    Axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.data)
      .catch((err) => 'error'),
  multiply: (a, b) => a * b
};


module.exports = functions;
