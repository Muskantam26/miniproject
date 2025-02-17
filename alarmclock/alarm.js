

let clock=()=>{
  let c=document.querySelector("#alarmtime").value
   let a=document.querySelector("#status")

   let m=document.querySelector("#music")
 
let stopp=setInterval(()=>{
  let time=new Date;
  

  let cu=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`
  console.log(cu)

  if(c==cu){
    a.innerText="time to wake up"
    m.play()
  }
  else{
    a.innerText="alarm is set"
  }
  
  setTimeout(()=>{
    clearInterval(m.pause())
    a.innerHtml="set alarm again"
  },8000)
 
},2000);


}

