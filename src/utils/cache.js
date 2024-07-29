
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // Cache por 10 minutos

const get = (key) => {
  return cache.get(key);
};

const set = (key, value) => {
  cache.set(key, value);
};

module.exports = { get, set };
            