var c1=0;
var c2=0;
var a=0;
var d=0;
var num1="";
var num2="";
var sign="";
function key_detect(event){
  event.preventDefault();
  if(event.keyCode == 46){
    start();
  }
  else if((event.keyCode>95)&&(event.keyCode<106))
    add(event.keyCode-95);
  else if((event.keyCode>47)&&(event.keyCode<58))
    add(event.keyCode-48);
  else if(event.keyCode==110)
    add('.');
  else if(event.keyCode==190)
    add('.');
  else if(event.keyCode==107)
    f_calc('+');
  else if(event.keyCode==109)
    f_calc('-');
  else if(event.keyCode==106)
    f_calc('*');
  else if(event.keyCode==111)
    f_calc('/');
  else if(event.keyCode==191)
    f_calc('/');
  else if(event.keyCode==13)
    f_calc('=');
  else if(event.keyCode==8)
    f_calc('del');
}

function $id(id){
  return document.getElementById(id);
}

function f_calc(n){
  if(((n=='+')||(n=='/')||(n=='*')||(n=='-')||(n=='%'))&&(c1==1)){
    sign=n;
    a=1;
    if(c2==1){
      f_calc("=");
    }
    d=0;
  }
  else if(n=="del"){
    if((parseInt($id("display").value)<10)&&(parseInt($id("display").value)>-10)){
      if(a==0)
        start();
      else
        $id("display").value=0;
    }
    else{
      $id("display").value=$id("display").value.substring(0,$id("display").value.length-1);
      if(c2==0)
        num1=$id("display").value;
      else
        num2=$id("display").value;
    }    
  }
  else if(n=="+/-")
  {
    $id("display").value=$id("display").value*(-1);
    if(c2==0)
      num1=$id("display").value;
    else
      num2=$id("display").value;
  }
  else if(n=='='){
    $id("display").value=+eval(num1+" "+sign+" "+num2);
    num1=$id("display").value;
    num2="";
    a=0;
    c2=0;
    d=1;
    $id("history").value="";
  }
  return true;
}

function add(n){
  if((c1==0)||(d==1)){
    $id("display").value=n;
    num1=$id("display").value;
    d=0;
  }
  else if(a==0){
    if($id("display").value=='0')
      $id("display").value=n;
    else
      $id("display").value+=n;
    num1=$id("display").value;
  }
  else if(c2==0){
    $id("display").value=n;
    num2=$id("display").value;
    c2=1;
  }
  else{
    if($id("display").value=='0')
      $id("display").value=n;
    else
      $id("display").value+=n;
    num2=$id("display").value;
  }
  if(c2==1){
    $id("history").value=eval(num1+" "+sign+" "+num2);
  }
  c1=1;
}
function start(){
  c1=0;
  c2=0;
  a=0;
  document.getElementById("display").value=0;
  var num1="";
  var num2="";
  return true;
}
