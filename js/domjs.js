var a = 0;

function getelement1() {
    var x = document.getElementById("main");
    var y = x.getElementsByTagName("p");
    document.write('id 为 "main" 的 div 中的第一段文本是：' + y[0].innerHTML);
}

function changeimage() {
    var b = "";
    switch (a) {
        case 0:
            b = "src/timg.png"
            a = 1;
            break;
        case 1:
            b = "src/dance.gif"
            a = 2;
            break;
        case 2:
            b = "src/beauty.png"
            a = 0;
            break;
    }
    document.getElementById("beau").src = b;
    document.getElementById("btn1").style.color="blue";
}

function changetext(id) {
    id.innerHTML="h3改变";
}

function displayDate() {
    document.getElementById("p1").innerText=Date();
}

function checkCookie() {
    if (navigator.cookieEnabled=true){
        alert("cookie is val")
    }else {
        alert("cookie is unval")
    }
}

function upPercase() {
   var x=document.getElementById("input1");
   x.value=x.value.toUpperCase();
}

function mOver(obj) {
    obj.innerHTML="谢谢！"
}
function mOut(obj) {
   obj.innerHTML="把鼠标放到上边！"
}
function createNp() {
    var p3text=document.createTextNode("这是段落3");
    var p3=document.createElement("p");
    document.getElementById("div2").appendChild(p3.appendChild(p3text));
}
function removeP() {
    document.getElementById("div2").removeChild(document.getElementById("p4"))
}
function getAperson() {
    person =new Object();
    person.lastname="Gates";
    person.firstname="Bill";
    person.age=56;
    alert(person.firstname+"."+person.lastname+"的年龄是"+person.age);

}

function getweekend() {
    var d=new Date()
    var weekday=new Array(7)
    weekday[0]="星期日"
    weekday[1]="星期一"
    weekday[2]="星期二"
    weekday[3]="星期三"
    weekday[4]="星期四"
    weekday[5]="星期五"
    weekday[6]="星期六"

    document.write("今天是" + weekday[d.getDay()])

}


function startTime()
{
    var today=new Date()
    var h=today.getHours()
    var m=today.getMinutes()
    var s=today.getSeconds()
// add a zero in front of numbers<10
    m=checkTime(m)
    s=checkTime(s)
    document.getElementById('txt').innerHTML=h+":"+m+":"+s
    setTimeout('startTime()',500)
}

function checkTime(i)
{
    if (i<10)
    {
        i="0" + i
    }
    return i
}

function show_confirm() {
   var c=confirm("press any button");
   if (c==true){
       alert("您点击了"+"\n"+"确认按钮")
   }else {
       alert("您点击了"+ "\n"+"取消按钮")
   }
}

function prompt_dialog(){
   var p=prompt("请输入您的电话号码","默认值");
   alert(p)
}
function show_five_s_dialog(){
   setTimeout('alert("5s后显示")',5000)
}

function show_two_s_dialog() {
   setTimeout('document.getElementById("txt1").value="2s"',2000);
   setTimeout('document.getElementById("txt1").value="4s"',4000);
   setTimeout('document.getElementById("txt1").value="6s"',6000);
   setTimeout("show_two_s_dialog()",6000);
}
var text=0;
var  t;
function start_text_dialog() {
    document.getElementById("txt2").value=text+"s"
    text+=1
    t=setTimeout("start_text_dialog()",1000);
}
function stop_text_dialog() {
    clearTimeout(t)
}

function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    /**设置为365后的日期*/
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function checkCookie1()
{
    username=getCookie('username')
    if (username!=null && username!="")
    {alert('Welcome again '+username+'!')}
    else
    {
        username=prompt('Please enter your name:',"")
        if (username!=null && username!="")
        {
            setCookie('username',username,365)
        }
    }
}
