document.write("<h1>这是一个段落</h1>");
document.write("<p>这是一个段落</p>");
var name="zhiwei",age=27,gender="男";
var jo="he is called 'zhangfei'";
var array=new Array();
array[0]="a";
array[1]="b";
array[2]="c";
var array1=new Array("a","b","c");
var array2=["d","e","f"];

var person={
    name:"zitan",
    age:20,
    gender:"男"
};


function change() {
    x = document.getElementById("change");
    x.innerHTML = "我变了";
}

function changecolor() {
    c = document.getElementById("change")
    c.style.color = "#f00";
}

function input() {
    var y = document.getElementById("number").value
    if (y == "" || isNaN(y)) {
        alert("请输入数字");
    }
}

function writeAll() {
    document.write("全部 \
        覆盖");
}

function fuzhi() {
    var a="zitanhua";
    document.getElementById("fuzhi").innerHTML=a;
}
function obj() {
    var person=new Object();
    person.name="张萌";
    person.age=20;
    document.write(person.name+"年龄是"+person.age);
}

function toUppercase() {
    var message="hello world";
    document.write("hello world 变成大写"+message.toUpperCase());
}

function alertDialog(name,age,job) {
    alert(name+"is"+age+"years old,"+"the"+job);
}

