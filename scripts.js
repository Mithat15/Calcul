const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
 
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});
const operators = ['*', '/','-','+','%','^']
function isOperator(ch) {
 return operators.find(it => it === ch)
}
let lastClickedBtn;
function calculate(event) {
  const clickedButtonValue = event.target.value;
  if(lastClickedBtn === '=') {
    display.value = ''
  }

  if (clickedButtonValue === '=') {  
    if (display.value !== '') {
      let str = display.value
        .replace(/\^/g, "**")
        .replace(/%(\d+(?:\.\d+)?)/g, "*($1/100)");        
        
      display.value = eval( str );
    }    
  } else if(clickedButtonValue === 'BS') {
    display.value = display.value.slice(0, -1);
  } else if (clickedButtonValue === 'C') {  
    display.value = '';
  } else {
    if(display.value.slice(-1) === '*' && clickedButtonValue === '*' && display.value.slice(-2, -1) !== '*') {
      display.value += clickedButtonValue;
    } else if(isOperator(display.value.slice(-1)) && isOperator(clickedButtonValue)) {
        // bad expression
    } else {
      display.value += clickedButtonValue;
    }
  }

  lastClickedBtn = clickedButtonValue;
}



function soundClick() {
  var audio = new Audio(); 
  audio.src = 'https://www.myinstants.com//media/sounds/10_p895CLI.mp3'; 
  audio.autoplay = true; 
}
function soundClick2() {
  var audio = new Audio(); 
  audio.src = 'https://www.myinstants.com//media/sounds/0447-mp3cut.mp3'; 
  audio.autoplay = true; }

const s = window.screen;
const w = (q.width = s.width);
const h = (q.height = s.height);
const ctx = q.getContext("2d");

const p = Array(Math.floor(w / 10) + 1).fill(0);

const random = (items) => items[Math.floor(Math.random() * items.length)];

const hex = "Vuqar Selim Rafayel".split("");

setInterval(() => {
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#0f0";
  p.map((v, i) => {
    ctx.fillText(random(hex), i * 10, v);
    p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
  });
}, 1000 / 30);

var byline = document.getElementById('byline');     // Find the H2
bylineText = byline.innerHTML;                                      // Get the content of the H2
bylineArr = bylineText.split('');                                   // Split content into array
byline.innerHTML = '';                                                      // Empty current content

var span;                   // Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){                                    // Loop for every letter
  span = document.createElement("span");                    // Create a <span> element
  letter = document.createTextNode(bylineArr[i]);   // Create the letter
  if(bylineArr[i] == ' ') {                                             // If the letter is a space...
    byline.appendChild(letter);                 // ...Add the space without a span
  } else {
        span.appendChild(letter);                       // Add the letter to the span
    byline.appendChild(span);                   // Add the span to the h2
  }
}