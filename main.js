const btnChangeColor = document.querySelector('button');
const colorArr = ['red', 'blue', 'gray', 'purple', 'yellow', 'black', 'white', 'brown'];
const background = document.querySelector('div');

let currentColorIndex = 0;

function backgroundChanger(btn, background, arr) {
    btn.addEventListener('click', () => {
        background.style.backgroundColor = arr[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % arr.length;
    });
}

backgroundChanger(btnChangeColor, background, colorArr)