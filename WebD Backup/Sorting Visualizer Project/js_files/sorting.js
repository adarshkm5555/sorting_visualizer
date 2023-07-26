function swap(el1,el2){
    console.log("in swap");

    let tmp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = tmp;

}


let arraySize = document.querySelector('#arr_sz');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});


//creating a new array for storing random number.
let array = [];

createNewArray();

function createNewArray(noOfBars = 60){
deleteChild();

array = [];

for(let i=0;i<noOfBars;i++){
    let rndmNmbr = Math.floor(Math.random()*250 + 1);
    array.push(rndmNmbr);
}

console.log(array);

const bars = document.querySelector("#bars");


for(let i=0;i<noOfBars;i++){
    const bar = document.createElement("div");
    bar.style.height = `${array[i]*2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
}

}


function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}



const newArray = document.querySelector(".newArray");
newArray.addEventListener("click",function(){
    console.log("From newArray");
    createNewArray(arraySize.value);
});





