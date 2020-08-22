const TodoModel = require("./TodoModel.js")
const TodoController = require("./TodoController.js")
const TodoHtmlView = require('./TodoHtmlView.js') 
const request = require('request');
const targetUrl = 'http://127.0.0.1:8090/data'


request(targetUrl, function (error, response, body){
    if(error){
        throw error;
    }
    else {
        const todolist = JSON.parse(body);
        const todoModel = new TodoModel(todolist);
        const controller = new TodoController(todoModel);
        controller.runTodo();
        new TodoHtmlView(todoModel);
    }
});



