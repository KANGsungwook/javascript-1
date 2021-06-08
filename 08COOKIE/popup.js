/* 쿠키생성, 쿠키확인 함수를 선언 */

function make() {
    var cookieMake = document.querySelector("input");
    
    cookieMake.onchange = function () {
    
        if (cookieMake.checked == true) {
    
    
            var date = new Date();
            date.setDate(date.getDate() + 1);
    
            var name = date.getDate(); //키
            console.log(name);
    
            var value = date.getHours(); //값
            console.log(value);
    
            var cookie = "";
            cookie += name + "=" + value + ";";
            cookie += "expires=" + date;
    
            document.cookie = cookie;

            window.close();
    
        }
    }

}

function check() {
    var date = new Date();
    var find = date.getDate() + 1;
    var cookies = document.cookie.split(";");

    for (var i in cookies) {

        if (cookies[i].indexOf(find) != -1) { //키값이 존재한다면 팝업 안띄움

            return;

        }
    }
    window.open("popup.html", "팝업창", "width=500, height=500, top=100, left=1000");

}