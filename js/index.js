//轮播
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var lis = document.querySelectorAll(".nav-pic ul li");
var ols = document.querySelectorAll(".nav-pic ol li");
var ul = document.querySelector(".nav-pic ul");
var n = 0;
var timer = null;

function lunbo() {
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        ols[i].index = i;
        lis[i].className = "";
        ols[i].className = "";
    }
    lis[n].className = "active";
    ols[n].className = "bg";
}
btn1.onclick = function() {
    n--;
    if (n < 0) {
        n = lis.length - 1;
    }
    lunbo();
}
btn2.onclick = function() {
    n++;
    if (n > lis.length - 1) {
        n = 0;
    }
    lunbo();
}
for (var i = 0; i < ols.length; i++) {
    ols[i].index = i;
    ols[i].onclick = function() {
        n = this.index;
        lunbo();
    }
}
timer = setInterval(function() {
    n++;
    if (n > lis.length - 1) {
        n = 0;
    }
    lunbo();
}, 2000)
ul.onmouseover = function() {
    clearInterval(timer);
}
ul.onmouseout = function() {
    timer = setInterval(function() {
        n++;
        if (n > lis.length - 1) {
            n = 0;
        }
        lunbo();
    }, 2000)
}

//cookie
var username = getCookie("username");
if (username) {
    document.querySelector(".name").innerHTML = username;
    document.querySelector(".span1").innerHTML = "欢迎您";
    document.querySelector(".span2").innerHTML = username;
    document.querySelector(".out").onclick = function() {
        removeCookie("username");
        document.querySelector(".name").innerHTML = "Hi,请登录";
        document.querySelector(".span1").innerHTML = "亲，请登录";
        document.querySelector(".span2").innerHTML = "免费注册";
        document.querySelector(".logoin-cen").innerHTML = `
        <a href="./logoin.html">登陆</a>
        <a href="./register.html">注册</a>
        `
    }
} else {
    document.querySelector(".logoin-cen").innerHTML = `
    <a href="./logoin.html">登陆</a>
    <a href="./register.html">注册</a>
        `
}