const btn = document.querySelector('button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
let r = 0;
let g = 0;
let b = 0;

function generateColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function changeColor() {
    this.style.backgroundColor = generateColor();
    this.style.color = generateColor();
}

btn.addEventListener('click', changeColor)


// part 2

const buttons = document.querySelectorAll('.btn');

for (let button of buttons) {
    button.addEventListener('click', changeColor);
}

// events object

const input = document.querySelector('input');

input.addEventListener('keydown', (evt) => {
    console.log(evt);
    console.log(evt.code);
    console.log(evt.key);
});


// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'blue';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'orange';
//         }, 1000);
//     }, 1000);
// },1000)


const delayedColor = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext && doNext();
    }, delay);
}

delayedColor('blue', 1000, () => {
    delayedColor('green', 1000 ,() => {
        delayedColor('yellow', 1000);
    });
});
