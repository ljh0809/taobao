var data = localStorage.getItem("data");
if (!data || data == "[]") {
    $(".tab").html("购物车还是空的哦，请去添加物品&nbsp;&nbsp;&nbsp;&nbsp;<a href='list.html'>去购物</a>")
}
//加载数据
else {
    data = JSON.parse(data);
    var arr = data.map(function(v) {
        return v.id;
    });
    var ids = arr.join(",");
    $.ajax({
        url: "../php/cart.php",
        data: {
            ids: ids
        },
        type: "post",
        dataType: "json",
        success: function(res) {
            if (res.status == 200) {
                res = res.data;
                var str = "";
                for (var i = 0; i < res.length; i++) {
                    var data1 = data.filter(function(v) {
                        return v.id == res[i].id
                    });
                    var number = data1[0].number;
                    str += `    
                    <tr data-id="${res[i].id}">
                    <td class="checkOne"><input type="checkbox" class="one"></td>
                    <td>${res[i].name}</td>
                    <td><img src="${res[i].imgpath}" width="50" height="50"></td>
                    <td class="price">${res[i].price}</td>
                    <td>
                        <button class="jian">-</button>
                        <input type="text" name="number" value="${number}" data-stock="${res[i].stock}">
                        <button class="add">+</button>
                    </td>
                    <td class="sub">${res[i].price * number}</td>
                    <td><button class="remove">删除购物车</button></td>
                </tr>
                `
                }
                $("tbody").html(str);

                //全选
                $(".all").click(function() {
                    if ($(this).prop("checked")) {
                        $(".one").prop("checked", true)
                        $(".all").prop("checked", true)
                    } else {
                        $(".one").prop("checked", false)
                        $(".all").prop("checked", false)
                    };
                    subtotal();
                });
                //单个选项框
                $(".one").click(function() {
                    var choose = Array.prototype.slice.call($(".one")).every(function(v) {
                        return $(v).prop("checked");
                    });
                    if (choose) {
                        $(".all").prop("checked", true)
                    } else {
                        $(".all").prop("checked", false)
                    }
                    subtotal();
                });
                //数量减
                $(".jian").click(function() {
                    $(this).next().val($(this).next().val() - 0 - 1);
                    if ($(this).next().val() - 0 <= 1) {
                        $(this).next().val(1)
                    }
                    //改变本地存储数量
                    var that = $(this);
                    var brr = data.find(function(v) {
                        return v.id == that.parent().parent().attr("data-id");
                    });
                    brr.number = $(this).next().val() - 0;
                    localStorage.setItem("data", JSON.stringify(data));
                    subtotal();
                });
                //数量加
                $(".add").click(function() {
                    $(this).prev().val($(this).prev().val() - 0 + 1);
                    var stock = $(this).prev().attr("data-stock")
                    if ($(this).prev().val() - 0 >= stock) {
                        $(this).prev().val(stock)
                    }
                    var that = $(this);
                    var brr = data.find(function(v) {
                        return v.id == that.parent().parent().attr("data-id");
                    });
                    brr.number = $(this).prev().val() - 0;
                    localStorage.setItem("data", JSON.stringify(data));
                    subtotal();
                });

                subtotal();

                //购物车删除按钮
                $(".remove").click(function() {
                    var that = $(this);
                    var index = data.findIndex(function(v) {
                        return v.id == that.parent().parent().attr("data-id");
                    });
                    data.splice(index, 1);
                    localStorage.setItem("data", JSON.stringify(data));
                    $(this).parent().parent().remove();
                    subtotal();
                    if (data.length == 0) {
                        $(".tab").html("购物车还是空的哦，请去添加物品&nbsp;&nbsp;&nbsp;&nbsp;<a href='./list.html'>去购物</a>")
                    }
                })

            }
        }
    })
}
//提交
$(".btn").click(function() {
    if ($(".totalNum").text() != 0) {
        alert("购买成功");
        location.href = "./index.html";
    } else {
        alert("请选择购买商品")
    }
})

//计算总价格，数量
function subtotal() {
    var totalNum = 0;
    var totalPrice = 0;
    var n = 1;
    $("[name='number']").each(function(i, v) {
        $(v).parent().next().text($(v).val() * $(v).parent().prev().text())

        if ($(v).parent().siblings(".checkOne").children(".one").prop("checked")) {
            // totalNum += $(v).val() - 0;
            totalNum = n++;
            totalPrice += $(v).parent().next().text() - 0;
        }
    });
    $(".totalNum").text(totalNum);
    $(".totalPrice").text(totalPrice);

}