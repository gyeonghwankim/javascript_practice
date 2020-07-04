/*
명령어를 입력한다
    1. show : 상태를 보여준다
        * current : 현재의 세 가지 상태(todo, doing, done)
        * todo : Todo list의 item
    
    2. add$$item$$["tag1", "tag2"] : tag1, tag2의 태그를 가진 item을 todo 상태를 추가한다

    3. update$$idNumber$$state : idNumber에 해당하는 id를 가진 Todo item을 state 상태로 변경한다

    4. delete$$idNumber : idNumber에 해당하는 id를 가진 Todo item을 목록에서 삭제한다.

    5. quit : 프로그램을 종료한다

show와 quit를 제외한 명령어를 처리한 이후에 알림 메세지와 show$$current를 실행한다
*/

function show(status){
    status가 current일 경우 todo, doing, done 세 가지 상태를 콘솔에 출력
    status가 todo일 경우 todo 상태에 있는 item의 총 갯수와 각각의 item contents, item id 콘솔에 출력
}

function add(contents, tags){
    Unique한 ID 값 생성
    생성한 ID 값과 contents, tags를 가지는 객체를 todo 상태에 추가
}

function update(id, status){
    id에 해당하는 item의 상태를 status로 변경
}

function delete(id){
    id에 해당하는 item을 제거
}

function quit(){
    프로그램 종료
}