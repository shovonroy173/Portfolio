/*const texts = ['Developer', 'Engineer', 'Creator', 'Designer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type(){

  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('#typing').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
    
  }
  setTimeout(type, 200);
  
}
type();
*/


const texts = ['Designer', 'Programmer', 'Debugger'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type(){

  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('#typingtwo').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
    
  }
  setTimeout(type, 200);
  
}
type();



const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');
const navBar = document.querySelector('.nav');


const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener('click', ()=>{
  if(navLeft<0){
    menu.classList.add('show');
    document.body.classList.add('show');
    navBar.classList.add('show')
  }
  
})

navClose.addEventListener('click', ()=>{
  if(navLeft<0){
    menu.classList.remove('show');
    document.body.classList.remove('show');
    navBar.classList.remove('show')
  }
})

//g
gsap.from(".logo", {opacity:0, duration:1, delay:.5, y:-10});
gsap.from(".hamburger", {opacity:0, duration:1, delay:1, x:20});
gsap.from(".banner", {opacity:0, duration:1, delay:1.5, x:-200});
gsap.from(".hero h3", {opacity:0, duration:1, delay:2, y:-50});
gsap.from(".hero h1", {opacity:0, duration:1, delay:2.5, y:-45});
gsap.from("hero h4", {opacity:0, duration:1, delay:3, y:-30});
gsap.from("hero a", {opacity:0, duration:1, delay:3.5, y:50});
gsap.from("nav-item", {opacity:0, duration:1, delay:1.2, y:30, stagger: .2});




const word =['Developer', 'Engineer', 'Analyst'];
let counttwo = 0;
let indextwo = 0;
let currentTexttwo = '';
let lettertwo = '';

function typwtwo(){
  if(counttwo === word.length){
    counttwo = 0;
  }
  currentTexttwo = word[counttwo]
  lettertwo = currentTexttwo.slice(0, ++indextwo);
  document.querySelector('#typing').textContent = lettertwo;
  if(lettertwo.length === currentTexttwo.length){
    counttwo++;
    indextwo = 0;
  }
  setTimeout(typwtwo, 200);
}

typwtwo();




const teamslide = document.querySelectorAll('.team');
const slideleft = document.querySelector('.slide-left');
const slideright  = document.querySelector('.slide-right');


var current = 0;

function reset(){
  for(var i = 0; i<teamslide.length; ++i){
    teamslide[i].style.display = 'none';
  }
}


function startslide(){
  reset()
  teamslide[0].style.display = 'block'
}

startslide();

function leftslide(){
  reset();
  teamslide[current -1].style.display = 'block';
  current--;
}

function rightslide(){
  reset();
  teamslide[current +1].style.display = 'block';
  current++;
}

slideleft.addEventListener('click', function(){
  if(current === 0){
    current = teamslide.length
  }
  leftslide();
})

slideright.addEventListener('click', function(){
  if(current === teamslide.length -1){
    current = -1
  }
  rightslide();
})


const hover = document.querySelectorAll('.position');
hover.addEventListener('mouseover', function(){
  hover.textContent = 'Devel0per';
 
})

hover.addEventListener('mouseover', function(){
  hover.textContent = 'Devel0per';
 
})

/***alternative js */
/*var arrow = document.querySelector('.slide-left');
var arrow = document.querySelector('.slide-left');
var team = document.querySelectorAll('.team');

var l = 0;
arrow.addEventListener('click', function() {
  l++;
  for(var i of team){
    if(l==0) {i.style.left = '0px';}
    if(l==1) {i.style.left = '-740px';}
    if(l==2) {i.style.left = '-1480px';}
    if(l==3) {i.style.left = '-2220px';}
    if(l==4) {i.style.left = '-2960px';}
    if(l>4)  {l=4;}
    
  }
})
arrow();
*/





































































