 function display (value) {
    document.querySelectorAll('#textbox')[0].value+=value;
} 

function calculate () {
   var select = document.querySelectorAll('#textbox')[0].value;
   var answer = eval(select);
   document.querySelectorAll('#textbox')[0].value = answer;
}

function clr() {
document.querySelectorAll("#textbox")[0].value = '';
}