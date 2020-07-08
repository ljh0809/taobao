function getCookie(key) {
    var cookies = document.cookie;
    var arr = cookies.split("; ");
    for (var i = 0; i < arr.length; i++) {
        var n = arr[i].split("=");
        if (n[0] == key) {
            return n[1];
        }
    }
}

function setCookie(key, value, sec = 0, path = "/") {
    if (sec === 0) {
        document.cookie = key + "=" + value + ";path=" + path;
    } else {
        var date = new Date(+new Date() - 8 * 3600 * 1000 + sec * 1000);
        document.cookie = key + "=" + value + ";expries=" + date + ";path=" + path;
    }
}

function removeCookie(key, path = "/") {
    setCookie(key, "", -1, path);
}