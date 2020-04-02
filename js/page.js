function Page(options = {}, fn) {
    this.options = options;
    this.default = {
        language: {
            first: "首页",
            previous: "上一页",
            list: null,
            next: "下一页",
            last: "末页",
        },
        pageData: {
            total: 22,
            pageSize: 8
        }

    }
    this.fn = fn || function() {};
    this.currentPage = 1;
    this.list = null;
    this.box = null;
    this.setDefault();
    this.totalPage = Math.ceil(this.default.pageData.total / this.default.pageData.pageSize);
    this.createTag();
    this.createPage();
    this.click();
    this.setDisabled();
    this.createGo();
    this.fn(this.currentPage);
}
// 创建文本框的方法
Page.prototype.createGo = function() {
        var input = document.createElement("input");
        input.setAttribute("type", "number");
        this.box.appendChild(input);
        this.setStyle(input, {
            width: "50px",
            height: "18px",
            margin: "0 5px"
        });
        var btn = document.createElement("button");
        btn.innerText = "GO"
        this.setStyle(btn, {
            height: "24px",
            margin: "0 5px"
        });
        this.box.appendChild(btn);
    }
    // 设置禁用项的方法
Page.prototype.setDisabled = function() {
        if (this.currentPage == 1) {
            this.box.children[0].style.background = "grey";
            this.box.children[1].style.background = "grey";
            this.box.children[0].setAttribute("disabled", "true");
            this.box.children[1].setAttribute("disabled", "true");
        } else {
            this.box.children[0].style.background = "white";
            this.box.children[1].style.background = "white";
            this.box.children[0].setAttribute("disabled", "false");
            this.box.children[1].setAttribute("disabled", "false");
        }
        if (this.currentPage == this.totalPage) {
            this.box.children[3].style.background = "grey";
            this.box.children[4].style.background = "grey";
            this.box.children[3].setAttribute("disabled", "true");
            this.box.children[4].setAttribute("disabled", "true");
        } else {
            this.box.children[3].style.background = "white";
            this.box.children[4].style.background = "white";
            this.box.children[3].setAttribute("disabled", "false");
            this.box.children[4].setAttribute("disabled", "false");
        }
    }
    // 所有元素的点击事件
Page.prototype.click = function() {
        this.box.onclick = e => {
            var e = e || window.event;
            if (e.target.className == "first" && e.target.getAttribute("disabled") != "true") {
                // 将当前页变成1
                this.currentPage = 1;
                this.list.innerHTML = '';
                this.createPage();
                this.setDisabled();
                this.fn(this.currentPage); // 实参
            } else if (e.target.className == "last" && e.target.getAttribute("disabled") != "true") {
                // 当前页变成最后一页 - 总页数
                this.currentPage = this.totalPage;
                this.list.innerHTML = '';
                this.createPage();
                this.setDisabled();
                this.fn(this.currentPage);
            } else if (e.target.className == "previous" && e.target.getAttribute("disabled") != "true") {
                this.currentPage = this.currentPage - 1;
                this.list.innerHTML = '';
                this.createPage();
                this.setDisabled();
                this.fn(this.currentPage);
            } else if (e.target.className == "next" && e.target.getAttribute("disabled") != "true") {
                this.currentPage = this.currentPage + 1;
                this.list.innerHTML = '';
                this.createPage();
                this.setDisabled();
                this.fn(this.currentPage);
            } else if (e.target.nodeName == "P" && this.currentPage != e.target.innerText - 0) {
                this.currentPage = e.target.innerText - 0;
                this.list.innerHTML = '';
                this.createPage();
                this.setDisabled();
                this.fn(this.currentPage);
            } else if (e.target.nodeName == "BUTTON" && e.target.previousElementSibling.value != '' && e.target.previousElementSibling.value >= 1 && e.target.previousElementSibling.value <= this.totalPage && e.target.previousElementSibling.value != this.currentPage) {
                // 获取文本框中的数字
                this.currentPage = e.target.previousElementSibling.value - 0;
                this.list.innerHTML = '';
                this.createPage();
                this.setDisabled();
                this.fn(this.currentPage);
            }
        }
    }
    // 创建页码
Page.prototype.createPage = function() {
        if (this.totalPage <= 5) {
            for (var i = 1; i <= this.totalPage; i++) {
                var p = document.createElement("p");
                p.innerText = i;
                this.setStyle(p, {
                    padding: "0 5px",
                    margin: "0 5px",
                    border: "1px solid #000"
                });
                if (this.currentPage == i) {
                    p.style.backgroundColor = "orange"
                }
                this.list.appendChild(p);
            }
        } else {
            if (this.currentPage <= 3) {
                for (var i = 1; i <= 5; i++) {
                    var p = document.createElement("p");
                    p.innerText = i;
                    this.setStyle(p, {
                        padding: "0 5px",
                        margin: "0 5px",
                        border: "1px solid #000"
                    });
                    if (this.currentPage == i) {
                        p.style.backgroundColor = "orange"
                    }
                    this.list.appendChild(p);
                }
            } else if (this.currentPage >= this.totalPage - 2) { // 还没有总页数
                for (var i = this.totalPage - 4; i <= this.totalPage; i++) {
                    var p = document.createElement("p");
                    p.innerText = i;
                    this.setStyle(p, {
                        padding: "0 5px",
                        margin: "0 5px",
                        border: "1px solid #000"
                    });
                    if (this.currentPage == i) {
                        p.style.backgroundColor = "orange"
                    }
                    this.list.appendChild(p);
                }
            } else {
                // n-2~n+2
                for (var i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
                    var p = document.createElement("p");
                    p.innerText = i;
                    this.setStyle(p, {
                        padding: "0 5px",
                        margin: "0 5px",
                        border: "1px solid #000"
                    });
                    if (this.currentPage == i) {
                        p.style.backgroundColor = "orange"
                    }
                    this.list.appendChild(p);
                }
            }
        }

    }
    // 创建标签的方法
Page.prototype.createTag = function() {
        this.box = document.createElement("div");
        this.box.className = "box";
        this.setStyle(this.box, {
            width: "800px",
            height: "50px",
            border: "1px solid #000",
            display: "flex",
            "justify-content": "center",
            alignItems: "center",
            "margin": "auto"
        });
        document.body.appendChild(this.box);
        for (var attr in this.default.language) {
            var div = document.createElement("div");
            div.innerText = this.default.language[attr];
            div.className = attr;
            if (attr != "list") {
                this.setStyle(div, {
                    padding: "0 5px",
                    margin: "0 5px",
                    border: "1px solid #000"
                });
            } else {
                this.list = div; // 将div赋值给list
                this.setStyle(div, {
                    display: "flex",
                    "justify-content": "center",
                    alignItems: "center"
                });
            }
            this.box.appendChild(div);
        }
    }
    // 设置样式的方法
Page.prototype.setStyle = function(ele, styleObj) {
        for (var attr in styleObj) {
            ele.style[attr] = styleObj[attr];
        }
    }
    // 设置默认值的方法
Page.prototype.setDefault = function() {
    for (var attr in this.options.language) {
        this.default.language[attr] = this.options.language[attr];
    }
    for (var attr in this.options.pageData) {
        this.default.pageData[attr] = this.options.pageData[attr];
    }
}