async function InsertionSort(){

    console.log("in insertion sort");

    const ele = document.querySelectorAll('.bar');
    ele[0].style.background = 'green';
    for(let i=1;i<ele.length;i++){

        let key = ele[i].style.height;
        let j;
        j = i-1;

        //delay
        await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));

        while(j>=0 && (parseInt(ele[j].style.height)>parseInt(key))){

            ele[j].style.background = 'blue';
            ele[j+1].style.height = ele[j].style.height;
            j=j-1;

            //delay
            await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j+1].style.height = key;
        ele[i].style.background = 'green';

    }

}

const inSortBtn = document.querySelector('.insertion');
inSortBtn.addEventListener('click',async function(){
    await InsertionSort();
})
