function amplificators() {
  get = function () {
    return axios.get('http://localhost:3000/amps');
  };

  remove = function (index) {
    return axios.delete('http://localhost:3000/amps/'+index);
  };

  return {
    get: get,
    remove: remove
  };
}
