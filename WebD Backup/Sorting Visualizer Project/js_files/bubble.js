
async function bubble(){           //sort the adj elements
  
    console.log("In Bubblefn");

    const ele = document.querySelectorAll('.bar');
    for(let i=0;i<ele.length-1;i++){
        console.log("In ith Loop");
        for(let j=0;j<ele.length-i-1;j++){
            console.log("In jth Loop");
            ele[j].style.background = "red";
            ele[j+1].style.background = "red";
            if(parseInt(ele[j].style.height)>parseInt(ele[j+1].style.height)){
                console.log("in if cond");
                await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
                swap(ele[j],ele[j+1]);
            }

            ele[j].style.background = "cyan";
            ele[j+1].style.background = "cyan";
        
        }
        ele[ele.length-1-i].style.background = "green";
    }
    ele[0].style.background = "green";
}

const bubSortBtn = document.querySelector('.bubble');
bubSortBtn.addEventListener('click',async function(){
    await bubble();
})
