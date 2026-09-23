import React from 'react'


function Primitive() {


// number

let a=100;
let b=200.1234;

let price=10999;

let views=8500000;


let age=40;

if(isNaN(age))
{
console.log("Age should be number");
}
else{
console.log("Valid");
}


let x="100.74";
let y="200.23";


//string

let s1="java full stack"; // string literals
let s2='java full stack';// string literals

let s3=`java full stack`; //template literals


let msg1=`

hello
students
pls 
do 
practice

`



let name="raju";
let balance=5000;

let msg2="hello" + " " + name + " " + "your account balance" + " " + "=" + balance;

let msg3=`Hello ${name} your account balance=${balance}  `;

let p1=400;
let p2=800;
let p3=`sum=${p1+p2}`



let message="Good Morning";

let email="abcd123@gmail.com";


if(email.indexOf("@")==-1)
{
console.log("Invalid email")
}
else{
console.log("Valid email")
}


let searchProduct="mobiles";
console.log(searchProduct.includes("books"));


// boolean

let stock=true;
console.log(stock);

// undefined

let salary;
console.log(salary);

// null

let mysalary=null;``



return (
<div className='container mt-5'>

  <p>

    {
      (mysalary==null)?"No salary":mysalary   }
  </p>



  <p>

    {
      (salary==undefined)?"Pls enter salary":salary
    }
  </p>

  <p>{stock}</p>

  <p>
    {
      (stock==true)?"Stock is available":"No Stock"
    }
  </p>

 <p>
    {
      (stock==true)?"true":"false"
    }
  </p>


<p>{msg2}</p>
<p>{msg3}</p>
<p>{p3}</p>
<p>{parseInt(x)+parseInt(y)}</p>

<p>{(Number(x)+Number(y)).toFixed(2)}</p>

<p>{a}</p>
<p>{b}</p>
<p>{b.toFixed(2)}</p>

<p className="fw-bold">{price.toLocaleString('en-in',{style:"currency",currency:"INR",minimumFractionDigits:0})}</p>

<p>Views:<span>{views.toLocaleString('en-in',{"notation":"compact"})}</span></p>
<p>Views:<span>{views.toLocaleString('en-us',{"notation":"compact"})}</span></p>


<p>
  {
    (isNaN(age))?"Age must be number":age
  }
</p>


<p>{message.length}</p>
<p>{message.toUpperCase()}</p>
  <p>{message.toLowerCase()}</p>

  <p>{message.slice(0,5)}</p>

  <p>
  {
    (email.indexOf("@")==-1)?"Invalid email":"Valid Email"
  }
  </p>






</div>
)
}

export default Primitive