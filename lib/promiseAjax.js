function promiseAjax(obj) {
    return new Promise(function(resolve, reject) {
        if (!obj.dataType) {
            obj.dataType = "json"
        }
        if (obj.dataType != "json" && obj.dataType != "string") {
            throw new Error("数据类型参数不正确")
        }
        if (!obj.url) {
            throw new Error("请求的url不能为空")
        }
        if (Object.prototype.toString.call(obj.url) != '[object String]') {
            throw new Error("请求的url地址不正确")
        }
        if (!obj.type) {
            obj.type = "get";
        }
        if (obj.type != "get" && obj.type != "post") {
            throw new Error("请求方式不正确")
        }
        if (obj.data) {
            if (Object.prototype.toString.call(obj.data) == '[object String]' && obj.data.indexOf("=") != -1) {
                obj.data = obj.data;
            } else if (Object.prototype.toString.call(obj.data) == '[object Object]') {
                var data = "";
                var f = "";
                for (var i in obj.data) {
                    data += f + i + "=" + obj.data[i];
                    f = "&";
                }
                obj.data = data;
            } else {
                throw new Error("传入的数据类型不正确");
            }
        }
        if (obj.type == "get") {
            obj.url += "?" + obj.data;
        }
        if (obj.async == undefined) {
            obj.async = true;
        }
        if (Object.prototype.toString.call(obj.async) != '[object Boolean]') {
            throw new Error("异步参数必须为布尔值");
        }

        var xhr;
        try {
            xhr = new XMLHttpRequest();
        } catch (e) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.open(obj.type, obj.url, obj.async);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    res = xhr.responseText;

                    if (obj.dataType === "json") {
                        res = JSON.parse(res);
                    }
                    resolve(res);
                } else {
                    reject();
                }
            }
        }
        if (obj.type === "post") {
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            if (obj.data) {
                xhr.send(obj.data);
                return;
            }
        }
        xhr.send();
    })
}