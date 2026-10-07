import React, { useState } from 'react'

function Mouse() {


const[state,setState]=useState({color:"blue",fontSize:"30px"});
const[image,setImage]=useState("/images/food10.jpg");



const[images,setImages]=useState(["/images/food1.jpg","/images/food2.jpg","/images/food3.jpg","/images/food5.jpg","/images/food6.jpg"])

const[path,setPath]=useState(images[0]);

function handleStop(e){
e.target.stop();
}

return (
<div>

<div className='row'>

    <div className='col-3'>
        <div>
            {
                images.map((path)=>
                    <div>
                        <img src={path} style={{margin:"5px",width:"100px",height:"100px"}} onMouseMove={(e)=>{setPath(e.target.src)}}/>
                    </div>
                )
            }
        </div>
    </div>

    <div className='col-9'>

        <img src={path} className='img-fluid'/>
    </div>

</div>


<marquee onMouseOver={handleStop} onMouseOut={(e)=>e.target.start()}>
I am scroll the text
</marquee>



<pre>
{
    JSON.stringify(state)
}
</pre>

<h1 style={state} onMouseOver={()=>setState({color:"red",fontSize:"50px",transition:"all 1s"})}  onMouseOut={()=>setState({color:"green",fontSize:"20px",transition:"all 1s"})}>Java Full Stack</h1>

<img src={image} style={{width:"200px",height:"200px"}} onMouseOver={()=>setImage("/images/food9.jpg")} onMouseOut={()=>setImage("/images/food7.jpg")}/>

</div>
)
}

export default Mouse