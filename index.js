let input=document.querySelector("input");
function numberClick(num){
          input.value+=num


}
function operatorClick(op){
          input.value+=op

}


function result(){
try{
          input.value=eval(input.value)
}catch(e){
          input.value="Error";
}
}

function clearval(){
          input.value='';
}
function backspace(){
          input.value=input.value.slice(0,-1)
}



// Color mode chnage 
let CalculatorBody=document.querySelector(".main");
let modebtn=document.querySelector(".mode");
let roundbtn=document.querySelector(" .round");
let button=document.querySelector("button");
let logo=document.querySelector(".logo");
let mode="light";

modebtn.addEventListener("click" ,()=>{
          if(mode=="light"){
                    setTimeout(()=>{
                              CalculatorBody.style.backgroundColor="black";
                              modebtn.style.background=" linear-gradient(to right, rgb(255, 88, 202), rgb(121, 0, 255))"
                              roundbtn.style.background="white"
                              logo.style.color="white"

                    } ,500)
                   
                    roundbtn.style.transform="translatex(35px)"
                    roundbtn.style.transition="transform 1s ease"
                     button.style.boxShadow="none"
                    
                    mode="dark"
          }
          else{

                    setTimeout(()=>{
                              CalculatorBody.style.backgroundColor="white";
                              modebtn.style.background=" white"
                               roundbtn.style.background="linear-gradient(to right, rgb(255, 88, 202), rgb(121, 0, 255))"
                                logo.style.color="black"
                              

                    } ,500)
                  
                    roundbtn.style.transform="translateZ(-30px)"
                    roundbtn.style.transition="transform 1s ease"
                    mode="light"
                    button.style.boxshadow="rgb(74, 101, 130) 0px 20px 30px -10px" ;
          }

})



