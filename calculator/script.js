const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

keys.forEach(key =>{
    key.addEventListener('click', calculate)
});

function calculate(){
    let buttonText = this.innerText;
    /*output.innerHTML = output.innerHTML + buttonText;*/

    if(buttonText == "AC"){
        output.innerHTML = "";
        result.innerHTML = "0";
    }

    else if(buttonText == "DEL"){
        output.innerText = output.innerText.substr(0, output.textContent.length-1);
    }

    else if(buttonText == "="){
    
            result.innerText = eval(output.innerText);
    }
    else{
        output.innerText += buttonText;
    }

}