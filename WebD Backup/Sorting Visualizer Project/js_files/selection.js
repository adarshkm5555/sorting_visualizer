async function selectionSort(){

    console.log("in selection sort");  

    const ele = document.querySelectorAll('.bar');     //selecting the bar element from DOM
    
    for(let i=0;i<ele.length-1;i++){

        console.log("in ith loop");
        let min_idx = i;
        ele[i].style.background = "blue";           //changing the color of the bar
        for(let j=i+1;j<ele.length;j++){

            console.log("in jth loop");
            ele[j].style.background = "red";
            await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));           //delay added for visualizing the effect of sorting
            if(parseInt(ele[j].style.height)<parseInt(ele[min_idx].style.height)){    //comparison 
                console.log("in if cond height comparison");
                if(min_idx!==i){
                    ele[min_idx].style.background = "cyan";
                }
                min_idx = j;
            }else{
                ele[j].style.background = "cyan";
            }
        }
        await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
        swap(ele[min_idx],ele[i]);                        //swapping the elements
        ele[min_idx].style.background = "cyan";
        ele[i].style.background = "green";
    }

}

const selectionSortBtn = document.querySelector('.selection');
selectionSortBtn.addEventListener('click', async function(){                     //event handling
    await selectionSort();
})


