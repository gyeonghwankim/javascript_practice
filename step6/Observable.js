/*
Observer 패턴을 공부하고, 이를 Observable.js 파일로 생성한다. ES Classes문법으로 구현한다.
TodoModel은 Observable.js를 상속받는다. (prototype 체인을 연결하는 방식을 적용, extends 키워드를 쓸 수 없음)
TodoHtmlView.js 는 객체 생성단계에서 주입받은 TodoModel객체를 ‘구독’ 한다. 
model의 변경이 view로 전달되는 과정은 Observer패턴을 따른다.
TodoModel에서 현재상태를 출력할때마다, TodoModel의 ‘알림’ 기능을 통해서, /html/log.html 내용도 자동으로 업데이트 된다.
즉, TodoModel에서 TodoHtmlView객체를 직접 호출하지 않고, TodoHtmlView가 TodoModel을 구독해서 실행되어야 한다.
*/

module.exports = class Observable {
    constructor(){
        this._observers = new Set();
    }
    subscribe(observer) {
        this._observers.add(observer);
    }
    unsubscribe(observer){
        this._observers = [...this._observers].filter(subscriber => subscriber !== observer);
    }
    notify() {
        this._observers.forEach(subscriber => subscriber.update());
    }
}