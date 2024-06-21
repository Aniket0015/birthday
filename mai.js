const endDate= "27 June 2024 0:0 am";

const input = document.querySelectorAll("input");

document.getElementById("enddate").innerHTML=endDate;
function clock(){
    const end =new Date(endDate);
    const now= new Date();
    const diff= (end-now)/1000;
    if(diff<0){
        window.location.href="wish.html";
        return;
    }
    input[0].value= Math.floor( diff/3600/24);
    input[1].value= Math.floor( (diff/3600)%24);
    input[2].value= Math.floor( (diff/1440)%24);
    input[3].value= Math.floor( (diff)%60);

     
    
   
    
}

setInterval(
    ()=>{
        clock()
    },
    1000
)