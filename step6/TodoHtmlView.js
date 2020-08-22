/*
todoModel에서 현재상태를 출력 할 때마다, log.html파일을 새롭게 생성하는 파일이다.

TodoHtmlView.js는 html/log.html 파일과 내용을 생성하는 view생성 클래스이다.

/html/log.html 파일내용은 아래와 같으며, 현재todlist 상태값이 출력될때마다 업데이트 된다.

TodoHtmlView.js는 template literal을 활용해서 HTML문자열을 생성할 수 있고, ‘fs’ 와 같은 모듈을 사용할 수 있다.
TodoHtmlView.js 는 ES Classes로 구현한다.
*/

const fs = require('fs');

class TodoHtmlView {
    constructor(todoModel){
        this.todoModel = todoModel;
        this.todoModel.subscribe(this);
        this.update();
    }

    update() {
        this.data = this.todoModel.state;
        const contents = `<!DOCTYPE html>
        <html lang="en"><head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>To do List</title>
                    </head>
                    <body>
                        <h1>todolist</h1>
                        <div class="log">
                            ${this.data}
                        </div>
                    </body>
        </html>
        `;

        fs.writeFile('./html/log.html', contents, function(err){
            if(err){
                throw err;
            }
        });   
    }
}

module.exports = TodoHtmlView;