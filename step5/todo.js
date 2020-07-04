/*
Step5 대화형 할일관리 프로그램


** Guideline **

1. 초기 데이터를 JSON형태로 작성한다.
2. 클래스나 객체를 사용할수 없음.(todo데이터를 보관하기 위한 배열/객체 생성은 가능)
3. todos.js 파일 하나에 모든 코드를 구현한다.
4. Array의 reduce메서드를 1회 이상 적극 사용한다.
5. 가급적 모든 코드가 함수안에 존재해야 한다.
6. 3줄 이상의 중복코드는 함수를 사용해서 없앤다.
7. id는 unique하게 생성돼야 한다.
8. add 명령에서는 tag를 n개로 받을 수 있다.
9. update 시에는 2초 delay후에 화면에 결과가 출력된다.
*/

const readline = require('readline');
const data = require('./data.json');


function show(type){
    if(type === 'current'){
        const ret = data.reduce((acc, cur) => {
            acc[cur.status].push(cur.id);
            return acc;
        }, {"todo": [], "doing": [], "done": []});
        console.log(`현재 상태는 todo:[${ret.todo.join(', ')}], doing:[${ret.doing.join(', ')}], done:[${ret.done.join(', ')}]`);
    }
    else{
        const ret = data.reduce((acc, cur)=>{
            if(cur.status === type) acc.push(cur.action);
            return acc;
        }, [])
        console.log(`총 ${ret.length}개 : ${ret.join(', ')}`);
    }
}

function add(contents, tags){
    console.log(`add 함수가 실행되었습니다. ${tags} 태그를 가진 todo 상태를 가지는 ${contents} 항목을 data에 추가합니다.`)
}

function update(id, status){
    console.log(`update 함수가 실행되었습니다. id값이 ${id}에 해당하는 항목의 status를 ${status}로 변경합니다.`)
}

function del(id){
    console.log(`del 함수가 실행되었습니다. ${id}값을 가진 항목을 삭제합니다.`)
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('명령어를 입력하세요 : ');
rl.prompt();
  
rl.on('line', (command) => {
    const params = command.split('$$');
    
    switch(params[0]){
        case 'show':
            show(params[1]);
            break;
        case 'add':
            add(...params.slice(1));
            break;
        case 'update':
            update();
            break;
        case 'delete':
            del();
            break;
        case 'quit':
            process.exit();
    }

    rl.prompt();
});