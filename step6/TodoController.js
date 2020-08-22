/*
사용자 입력내용(add/update/delete)을 분석해서 분기하는 역할
ES Classes 형태로 구현해야 한다.
TodoModel객체만 주입받는다.
 */

const readline = require('readline');
const util = require('./util');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 class TodoController{
     constructor(_todoModel){
         this.todoModel = _todoModel;
     }

     runTodo() {
        const instruction = ['show', 'add', 'update', 'delete', 'quit'];
        const self = this;
        rl.setPrompt('명령어를 입력하세요 : ');
        rl.prompt();
        
        rl.on('line', async function(command) {
            const params = command.split('$$');
            const action = params[0];
            try{
                if(instruction.includes(action)){
                    if(action === 'update'){
                        await util.delay(2000);
                    }
                    console.log(self.todoModel);
                    self.todoModel[action](...params.slice(1));
                }
            }catch(e){
                console.log(e);
            }
            rl.prompt();
        });
    }
 }



 module.exports = TodoController;