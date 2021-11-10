alert ("Selamat Datang Di Official Website Bisnisku")

const txtElement = ['Take The Risk Or Lose The Chance'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function write(){
    
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.writing').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0
    }
    setTimeout(write, 200);
    
})();