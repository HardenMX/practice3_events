const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const testConsole = () => {
    console.log('hello world');
    return 0;
}
const onPageLoad = () => {
    console.log('Page has fully loaded');
}

convertButton.addEventListener('dblclick', testConsole);
numberInput.addEventListener('click', testConsole);

window.addEventListener('load', onPageLoad);

window.addEventListener('keyup');