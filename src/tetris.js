class Tetris{
  constructor(canvas, context){
    this.canvas = canvas;
    this.context = context;
    this.prevTime = 0;
    this.dropCounter = 0; // current time
    this.dropInterval = 1000; // 1 tick every 1 second
    this.player =   
    {
      pos: {x: 5, y: 5},
      matrix: 
        [[0,0,0],
        [1,1,1],
        [0,1,0]]
    }
    this.update = this.update.bind(this);
    this.start = this.start.bind(this);
  ;


  ;
    window.player = this.player;
    context.scale(20,20);
  }
  bindKeyHandlers(){
    document.addEventListener('keydown', event => {
      if (event.keyCode === 37){ // left
        this.player.pos.x--;
      }
      else if (event.keyCode === 40){ // down
        this.playerDrop();
      }
      else if (event.keyCode === 39) {// right
        this.player.pos.x++;
      }
    });
  }
  createMatrix(w,h){
    const matrix = [];
    while (h > 0){
      matrix.push(new Array(w).fill(0));
      h--;
    }
    return matrix;
  }
  drawMatrix(matrix, offset){
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.context.fillStyle = 'red';
          this.context.fillRect(x + offset.x, 
                                y + offset.y
                                ,1,1);
        }
      })  
    })
  }
  draw(){
    this.context.fillStyle = "#8282e1";
    this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
    this.drawMatrix(this.player.matrix, this.player.pos );
  }
  merge(){
    this.player.matrix.forEach((row, y) => {
      row.forEach((value, x))
    })
  }
  playerDrop(){
    this.player.pos.y++;
    this.dropCounter = 0;
  }
  start(){
    this.bindKeyHandlers();
    const board = this.createMatrix(12,20);
    console.table(1);

    this.update();
  }
  update(time = 0){
    let deltaTime = time - this.prevTime;
    this.prevTime = time;

    this.dropCounter += deltaTime;
    if (this.dropCounter > this.dropInterval){
      this.playerDrop();
    }

    
    this.draw();
    requestAnimationFrame(this.update);
  }
}


export default Tetris;
