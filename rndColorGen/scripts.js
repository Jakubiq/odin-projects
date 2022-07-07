function Generate(){
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('first').style.backgroundColor = "#" + randomColor1;
    document.getElementById('second').style.backgroundColor = "#" + randomColor2;
    document.getElementById('third').style.backgroundColor = "#" + randomColor3;

    
    document.getElementById('hex1').textContent = "#" + randomColor1;
    document.getElementById('hex2').textContent = "#" + randomColor2;
    document.getElementById('hex3').textContent = "#" + randomColor3;
}