
//startGame();


//function startGame() {
  class RaceCar {
    constructor(x, y) { this.x = x; this.y = y; }
    moveRaceCar = () => {
      this.x+=50;
      this.y-=50;
    }
  }
  
  
  car = new RaceCar(250, 475);
  const ctx = document.getElementById('example').getContext('2d');
  let image = new Image()
  image.src = './images/car.png'
  image.onload = () =>{ 
    ctx.drawImage(image, car.x, car.y);
  }
  
  function movingObstacle(){
    let rX = Math.floor(Math.random() * 500);
    let rY = Math.floor(Math.random() * 500);
    let rWidth = Math.floor(Math.random() * 30) + 10;
    let rHeight = Math.floor(Math.random() * 30) + 10;
    ctx.fillRect(rX, rY, rWidth, rHeight)
  }

  function drawCar(){
    ctx.drawImage(image, car.x, car.y);
  }
  

  function animate(){
    ctx.clearRect(0,0, window.innerWidth, window.innerHeight)
    movingObstacle()
    drawCar()
  }


  setInterval(animate, 1000);
//}


















