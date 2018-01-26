const db = require('../db.js');

module.exports.getTodo = (event, context, callback) => {
  const todo = 'Make dinner';
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      todo
    })
  };

  callback(null, response);
};
