/*
todolist 상태값을 add/update/delete등을 통해서 실제 변경하는 역할
ES6 Classes 패턴을 사용할 수 없으며, ES6이전의 prototype패턴을 활용해서 만들어야 한다.
todolist 데이터만 주입받아서 동작된다.
뒤에 나오는 Observer 기능을 하는 객체는 require로 가져와서 사용한다.
console.log로 출력하는 역할을 할 수 있으며, console.log부분을 별도의 클래스로 분리할 수도 있다(선택사항)
*/

const Observable = require('./Observable');

const TodoModel = function(todolist) {
    this.todolist = todolist;
}

TodoModel.prototype = new Observable();

TodoModel.prototype.show = function(type){
    
    if(type === 'current'){
        const ret = this.todolist.reduce((acc, cur) => {
            acc[cur.status].push(cur.id);
            return acc;
        }, {"todo": [], "doing": [], "done": []});

        const result = `현재 상태는 todo:[${ret.todo.join(', ')}], doing:[${ret.doing.join(', ')}], done:[${ret.done.join(', ')}]`; 
        this.state = result;
        console.log(result);
    }
    else{
        const ret = this.todolist.reduce((acc, cur)=>{
            if(cur.status === type) acc.push(cur.action);
            return acc;
        }, []);
        console.log(`총 ${ret.length}개 : ${ret.join(', ')}`);
    }
    this.notify();
}

TodoModel.prototype.add = function(contents, tags){
    const newID = util.generateID();
    this.todolist.push({"id": newID, "status": "todo", "tags": tags, "action": contents});
    console.log(`${contents}가 추가되었습니다. (ID : ${newID})`);
}

TodoModel.prototype.update = function(id, status){
    this.todolist.forEach(element => {
        if(element.id === Number(id)){
            element.status = status;        
            console.log(`ID ${id}번 ${element.action} 항목의 상태를 ${status}로 변경합니다.`);
        }
    });
}

TodoModel.prototype.del = function(id){
    this.todolist = this.todolist.filter(e => e.id != id );
    console.log(`ID ${id}번 항목을 제거합니다.`);
}

module.exports = TodoModel;