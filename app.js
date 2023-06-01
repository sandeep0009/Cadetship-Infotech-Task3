const endDate="15 June 2023 12:00 PM"
const inputs=document.querySelectorAll("input");

let countDown=()=>{
    const end=new Date(endDate);
    const now= new Date();
    const diff=(end-now)/1000;
    console.log(diff);

    if(diff<0)return;

    const days=Math.floor((diff/3600/24));
    const hours=Math.floor((diff/3600)%24);
    const minutes=Math.floor((diff/60)%60);
    const seconds=Math.floor((diff)%60);
    inputs[0].value=days;
    inputs[1].value=hours;
    inputs[2].value=minutes;
    inputs[3].value=seconds;
 

}

setInterval(() => {
    countDown()
    
}, 1000);
