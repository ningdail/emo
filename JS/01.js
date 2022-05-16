//单个数字的偏移量
var size = 86;
var columns = document.querySelectorAll('.column');
var class_list = ['visible', 'near', 'far', 'far', 'distant', 'distant'];

//获取时分秒
function getClock() {
    var d = new Date();
    var h = d.getHours();
    h = h > 9 ? h : '0' + h;
    var m = d.getMinutes();
    m = m > 9 ? m : '0' + m;
    var s = d.getSeconds();
    s = s > 9 ? s : '0' + s;
    return `${h}${m}${s}`;
}

// console.log(getClock())

function getClass(n, i) {
    return class_list.find(function (value, index) {
        return i - index === n || i + index === n;
    }) || ''
}

// console.log(getClass(6,4))

setInterval(function () {
    let c = getClock();
    columns.forEach(function (ele, index) {
        let n = parseFloat(c[index]);
        let offset = -n * size;
        ele.style.transform = 'translateY(calc(50vh + (' + offset + 'px - ' + (size/2) +'px)))';
        Array.from(ele.children).forEach(function (ele2, index2) {
            ele2.className = 'num ' + getClass(n, index2);
        })
    })
},1000)