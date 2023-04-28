const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');

const ground=new Image();
ground.src='site/snake700.png';

const foodImg=new Image();
foodImg.src='site/food.png';

let box=35;
let score=0;
let food ={
  x:Math.floor(Math.random()*17+1)*box,
  y:Math.floor(Math.random()*15+1)*box,
};

let snake=[];
snake[0]={
  x:9*box,
  y:10*box
};

function drawGame(){
  ctx.drawImage(ground,0,0);
  ctx.drawImage(foodImg, food.x,food.y);
  for(let i=0;i<snake.lenght;i++){

  }
}

let game=setInterval(drawGame, 100);
