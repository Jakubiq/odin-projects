function Generate(){
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('first').style.backgroundColor = "#" + randomColor1;
    document.getElementById('second').style.backgroundColor = "#" + randomColor2;
    document.getElementById('third').style.backgroundColor = "#" + randomColor3;
}