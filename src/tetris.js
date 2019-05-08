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
    // this.playerMove = this.playerMove.bind(this);
  ;


  ;
    // window.player = this.player;
    context.scale(20,20);
  }
  bindKeyHandlers(){
    document.addEventListener('keydown', event => {
      if (event.keyCode === 37){ // arrow left - move left
        this.playerMove(-1);
      }
      else if (event.keyCode === 40){ // arrow down - move down
        this.playerDrop();
      }
      else if (event.keyCode === 39) {// arrow right - move right
        this.playerMove(1);
      } else if (event.keyCode === 90) { // z - rotate left
        this.playerRotate(-1)
      } else if (event.keyCode === 88) { // x - rotate right
        this.playerRotate(1)
      } else if (event.keyCode === 32) { // space - hardDrop
        this.playerHardDrop();
      }

    });
  }
  collide(board, player){
    const [mat, pos] = [player.matrix, player.pos];
    for (let y = 0; y < mat.length; ++y){
      for (let x = 0; x < mat[y].length; ++x){
        if (mat[y][x] !== 0 && 
           (board[y + pos.y] && 
            board[y + pos.y][x + pos.x]) !== 0) { 
          return true;
        } 
      }
    }
    
    return false;
  }
  createMatrix(w,h){
    const matrix = [];
    while (h > 0){
      matrix.push(new Array(w).fill(0));
      h--;
    }
    return matrix;
  }
  createPiece(type){
    switch(type){
      case 'O':
        return [
          [1,1],
          [1,1]
        ]
      case 'I':
        return [
          [0,1,0,0],
          [0,1,0,0],
          [0,1,0,0],
          [0,1,0,0],
        ]
      case 'S':
        return [
          [0,1,1],
          [1,1,0],
          [0,0,0]
        ]
      case 'Z':
        return [
          [1,1,0],
          [0,1,1],
          [0,0,0]
        ]
      case 'L':
        return [
          [0,1,0],
          [0,1,0],
          [0,1,1]
        ]
      case 'J':
        return [
          [0,1,0],
          [0,1,0],
          [1,1,0]
        ]
      case 'T':
        return [
          [0,0,0],
          [1,1,1],
          [0,1,0]
        ]
    }
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
    this.drawMatrix(this.board, {x: 0, y:0});
    this.drawMatrix(this.player.matrix, this.player.pos );
  }
  merge(board, player){
    this.player.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          board[y + player.pos.y][x + player.pos.x] = value;
        }
      })
    })
  }
  playerDrop(){
    let collided = false;
    this.player.pos.y++;
    if (this.collide(this.board, this.player)) {
      collided = true;
      this.player.pos.y--;
      this.merge(this.board, this.player);
      this.playerReset();
      this.player.pos.y = 0;
    }
    this.dropCounter = 0;
    return collided;
  }
  playerHardDrop(){
    let collided = this.playerDrop();
    while (!collided){
      collided = this.playerDrop()
    }
  }
  playerMove(dir){
    this.player.pos.x += dir;
    if (this.collide(this.board, this.player)){
      this.player.pos.x -= dir;
    }
  }
  playerRotate(dir){
    const pos = this.player.pos.x;
    let offset = 1;
    this.rotate(this.player.matrix, dir)
    while (this.collide(this.board, this.player)) {
      this.player.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1: - 1));
      if (offset > this.player.matrix[0].length){
        this.rotate(this.player.matrix, -dir);
        this.player.pos.x = pos ;
        return;
      }
    }
  }
  playerReset(){
    const pieces = 'OISZLJT';
    this.player.matrix = this.createPiece(pieces[pieces.length * Math.random() | 0]);
    this.player.pos.y = 0;
    this.player.pos.x = (this.board[0].length / 2 | 0) - (this.player.matrix[0].length / 2 | 0);

  }
  rotate(matrix, dir){
    for (let y = 0; y < matrix.length; ++y){
      for(let x = 0; x < y; ++x){
        [ matrix[x][y], 
          matrix[y][x]
        ] = 
        [ matrix[y][x],
          matrix[x][y]]
      }
    }
    if (dir > 0) { 
      matrix.forEach(row => row.reverse());
    } else {
      matrix.reverse();
    }
  }
  start(){
    this.bindKeyHandlers();
    console.table(1);
    this.board = this.createMatrix(12,20);
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
