// textChange
function textChange(){
    document.getElementById('text_change').innerHTML=" 1.Life is beautiful";
}
// date and time 
function showDate(){
    document.getElementById('s_date').innerHTML=Date();
}
// bulb on/ off 
function bulbOn(){
    document.getElementById('b_img').src="images/pic_bulbon.gif on.gif";
}
function bulbOff(){
    document.getElementById('b_img').src="images/pic_bulboff (1).gif";
}

// smile/engry 
function smile(){
    document.getElementById('emoji').src="images/pngwing.com (1).png";
}
function engry(){
    document.getElementById('emoji').src="images/pngwing.com.png";
}
// document.write 
function d_write(){
    document.write( 'hello world');
}
function d_writeTwo(){
    document.write( 'This site can not be reach');
}
// window.alert 
function showAlart(){
    window.alert(" login first");
}

// console log 

function showLog(){
   console.log(" hello world");
}

// window.print 
function windowprint(){
   window.print('print');
}
// variable 
var number1=10;
var  number2=50;
var result=number1+number2;
function rAddition(){
    document.getElementById('a_result').innerHTML=result;
}
// variable 
var number3=20;
var number4=20;
var result1=number3-number4;
function division(){
    document.getElementById('d_result').innerHTML=result1;
}
 // variable 
let number5,number6,number7,number8,result2;
number5=10;
number6=10;
number7=10;
number8=10;
result2=number5+number6+number7+number8;
function divisionTwo(){
    document.getElementById('dtwo_result').innerHTML=result2;
}
 // variable 
 let number9,number10 ,result3;
 number9=5;
 number10=9;
 result3=number9*number10;

 function Multiply(){
     document.getElementById('P_result').innerHTML=result3;
 }
 // variable 
 let number11,number12 ,result4;
 number12=5;
 number11=9;
 result4=number11%number12;

 function modulus(){
     document.getElementById('M_result').innerHTML=result4;
 }
let x,y,z;
x=3;
y=(10+20);
z=x+y;
function multi(){
    document.getElementById('Multi_result').innerHTML=z;
}

let number1x,number2x;
 number1x=100;
 number2x=300;
 number2x+=number1x;
 function assignAddi(){
    document.getElementById('asAdi_result').innerHTML=number2x;
 }
 let number1y,number2y;
 number1y=100;
 number2y=300;
 number2y-=number1y;
 function assignsub(){
    document.getElementById('assub_result').innerHTML=number2y;
 }
 let number3y,number4y;
 number3y=100;
 number4y=300;
 number4y*=number3y;
 function assignmul(){
    document.getElementById('asmul_result').innerHTML=number4y;
 }
 let number3x,number4x;
 number3x=800;
 number4x=200;
 number3x/=number4x;
 function assigndivi(){
    document.getElementById('asdivi_result').innerHTML=number3x;
 }
//  Comparison
let text1,text2,t_result;
text1=5;
text2=9;
t_result=text1>text2;
function Comparison(){
    document.getElementById('com_result').innerHTML="The result is"+t_result;
}
// Operators
let A,B,ti_result;
A=50;
B=9;
ti_result=A>B;
function Comparison2(){
    document.getElementById('com2_result').innerHTML="The result is"+ti_result;
}
let c,d,cd_result;
c="tariqul";
d="islam";
cd_result=c + " " +d;
function Stringj(){
    document.getElementById('stri_result').innerHTML= cd_result;
}

let cd;
cd="your done ";
cd+= "great work!";
function Stringjii(){
    document.getElementById('string_result').innerHTML= cd;
}
let xy,yz,zx;
xy="hungry";
yz="great";
zx="owww";
function Stringjii3(){
    document.getElementById('string3_result').innerHTML=xy+"<br>"+yz+"<br>"+zx ;
}
let text=" Loremipsumdolorsitametveritatisvoluptatesndeofficia"
function length(){
    document.getElementById("length_res").innerHTML=text.length;
}
let text8="I'm not a \"regular\"flower, I'm a cool flower." ;
function double(){
    document.getElementById("double_res").innerHTML=text8;
}

let text9='Let your dream\'s blossom.' ;
function single(){
    document.getElementById("Double6_res").innerHTML=text9;
}

function event1(){
    document.getElementById('event1_res').innerHTML += "Hello World ";
}

function event2(){
    document.getElementById('event2_res').style.color="red";
}
function event2(){
    document.getElementById('event2_res').style.color="red";
}
function event3(){
    document.getElementById('event3_res').style.color="green";
}
function event6(){
    document.getElementById('event6_res').style.color="blue";
}
// The onmouseenter Event 

function event4(){
    document.getElementById('smile_ev').src="images/emoji2.png";
}
function event5(){
    document.getElementById('smile_ev').src="images/emoji.png";
}

// get Month

function Month(){
    const d = new Date();
    document.getElementById('Month_res').innerHTML=d.getMonth()+1;
}
// get day

function day(){
    const d = new Date();
    document.getElementById('day_res').innerHTML=d.getMonth();
}
// get hour

function Minutes(){
    const d = new Date();
    document.getElementById('Minutes_res').innerHTML=d.getMinutes();
}
// get Seconds

function Seconds(){
    const d = new Date();
    document.getElementById('Seconds_res').innerHTML=d.getSeconds();
}
// get future

function future(){
    const d = new Date("2080-08-10");
    document.getElementById('future_res').innerHTML=d;
}
// get submit

function submit(){
    document.getElementById('submit_res').innerHTML="submitted";
}
// onselect

function selecti(){
   alert("you selected email !");
}

















// style change 
// one 
function color(){
    document.getElementById('colorCchange').style.color='red';
}
// two 
function fontSize(){
    document.getElementById('fontSizCchange').style.fontSize='40px';
}
// three 
function hide(){
    document.getElementById('fontChange').style.display="none";
}
// four 
function show(){
    document.getElementById('show_item').style.display="block";
}
// five 
function background(){
    document.getElementById('bkChange').style.background='red';
}
// six 
 function fontStyle(){
    document.getElementById('fontStyle_change').style.fontStyle='italic';
 }
//  seven 
 function fontWeight(){
    document.getElementById('fontWeight_change').style.fontWeight='700';
 }
//  eight 
function textTransform(){
    document.getElementById('transForm').style.textTransform="uppercase";
}
// nine 
function textShadow(){
    document.getElementById('shadow').style.textShadow="0px -4px 5px";
}
// style change 



// function turnOn() {
//     document.getElementById('myImage').src='pic_bulboff.gif';
// }