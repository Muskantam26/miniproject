
let store=""

let cal=(value)=>{
    store=store+value
    let show=document.querySelector("#display")
    show.innerHTML=store
    
}

let res=()=>{

    let show=document.querySelector("#display")
    show .innerHTML=eval(store)  //12+5=17 using eval method 
    store=eval(store)  // 17 number
    store.toString()  //17 string
    
}

let b=()=>{
    store=""
    let show=document.querySelector("#display")
     show.innerHTML=store

}
let d=()=>{
    
    let show=document.querySelector("#display")
    store=store.slice(0,-1)
    show.innerHTML=store
}