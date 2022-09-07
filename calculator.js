let string = "";
let button = document.querySelectorAll(".btn");


Array.from(button).forEach((button) => {
    button.addEventListener('click',(e) => {
        if (e.target.innerHTML == ' =') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = " "
            document.getElementById('number').value = string;
        }      
        else if (e.target.innerHTML == "PI") {
            string = string + 3.14
            document.getElementById('number').value = string;
        }        
        else{
            string = string + e.target.innerHTML;
            document.getElementById('number').value = string;
        }
    })
})