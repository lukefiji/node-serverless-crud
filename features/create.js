const db = require('../db.js');

module.exports.createTodo = (event, context, callback) => {
  const body = JSON.parse(event.body);
  console.log(event.body);

  db.Todo.create({
    task: body.task
  }).then(todo => {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        todo
      })
    });
  });
};
