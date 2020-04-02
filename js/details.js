//放大镜
function Enlarge(className) {
    this.box = document.querySelector("." + className);
    this.imgbox = this.box.querySelector(".pic-t");
    this.middleImg = this.box.querySelector(".pic-t img");
    this.shade = this.box.querySelector(".shade");
    this.big = this.box.querySelector(".big");
    this.lis = this.box.querySelectorAll(".small li");
    var that = this;
    //移入
    this.imgbox.onmouseover = function() {
            that.over();
        }
        //移出
    this.imgbox.onmouseout = function() {
            that.out();
        }
        //小图点击
    for (var i = 0; i < this.lis.length; i++) {
        this.lis[i].onclick = function() {
            that.click(this);
        }
    }
}
//移入
Enlarge.prototype.over = function() {
        this.shade.style.display = "block";
        this.big.style.display = "block";
        var that = this;
        this.imgbox.onmousemove = function(e) {
            var e = e || window.event;
            var x = e.pageX;
            var y = e.pageY;
            var l = x - that.box.offsetLeft - that.shade.offsetWidth / 2;
            var t = y - that.box.offsetTop - that.shade.offsetHeight / 2;
            if (l <= 0) {
                l = 0;
            }
            if (l >= that.box.clientWidth - that.shade.offsetWidth) {
                l = that.box.clientWidth - that.shade.offsetWidth;
            }
            if (t <= 0) {
                t = 0;
            }
            if (t >= that.imgbox.clientHeight - that.shade.offsetHeight) {
                t = that.imgbox.clientHeight - that.shade.offsetHeight;
            }
            that.shade.style.left = l + "px";
            that.shade.style.top = t + "px";


            that.fangda(l, t);
        }

    }
    //移出
Enlarge.prototype.out = function() {
        this.shade.style.display = "none";
        this.big.style.display = "none";
    }
    //小图点击
Enlarge.prototype.click = function(ele) {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].style.borderColor = "#000";
        }
        ele.style.borderColor = "red";
        var smallImg = ele.firstElementChild.firstElementChild;
        var smallPath = smallImg.getAttribute("src");
        this.middleImg.setAttribute("src", smallPath);
        this.big.style.backgroundImage = "url(" + smallPath + ")"
    }
    //放大
Enlarge.prototype.fangda = function(l, t) {
    var imgboxWidth = this.imgbox.offsetWidth;
    var fangdaWidth = l / imgboxWidth;
    var bigStyle = window.getComputedStyle(this.big).backgroundSize;
    var bigW = parseInt(bigStyle.split(" ")[0]);
    var bigL = fangdaWidth * bigW;
    var imgboxHeight = this.imgbox.offsetHeight;
    var fangdaHeight = t / imgboxHeight;
    var bigH = parseInt(bigStyle.split(" ")[1]);
    var bigT = fangdaHeight * bigH;
    this.big.style.backgroundPosition = `-${bigL}px  -${bigT}px`;
}
var enlarge = new Enlarge("pic")



//加载数据
var params = window.location.search;
var reg = /id=(\d+)/;
var id = params.match(reg)[1];
promiseAjax({
    type: "post",
    url: "./php/details.php",
    data: {
        id: id
    }
}).then(function(res) {
    if (res.status == 200) {
        var data = res.data;
        document.querySelector(".middimg").setAttribute("src", data.imgpath);
        document.querySelector(".smimg1").setAttribute("src", data.imgpath);
        document.querySelector(".smimg2").setAttribute("src", data.smallpath);
        document.querySelector(".tit").innerHTML = data.name;
        document.querySelector(".price1").innerText = data.price;
        document.querySelector(".big").style.backgroundImage = "url(" + data.imgpath + ")";

    }
})