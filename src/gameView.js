const Piece = require("./piece");
class GameView {
    constructor(ctx, game) {
        this.ctx = ctx;
        this.width = 600;
        this.height =  800;
        this.currentPiece = null;
        this.grid = Array(10).fill().map(() => Array(20).fill(0));
        this.game = game;

        this.fps = 5;
        this.now;
        this.then;
        this.interval = 1000/this.fps;
        this.delta; 
        // this.game = game; todo
        // this.ship = this.game.addShip();
    }

    bindKeyHandlers(){
        //todo, learn how to do this
        const ship = this.ship;
        addEventListener('keydown', (e) => {
            switch (event.keyCode) {
                case 37: // Left
                  this.game.board.dropPiece('left');
                break;
            
                case 38: // Up
                  this.game.board.dropPiece('up');
                break;
            
                case 39: // Right
                  this.game.board.dropPiece('right');
                break;
            
                case 40: // Down
                  this.game.board.dropPiece('down');
                break;
              }
                    })
        Object.keys(GameView.MOVES).forEach((k) => {
          const move = GameView.MOVES[k];
        //   key(k, () => { .power(move); });
        });
    
        // key("space", () => { ship.fireBullet(); });
    
    }

    start(){
        //start animating
        this.objectArray = []
        // this.objectArray.push(new Piece({x: 400, y:0, speed: 1, vh: this.height, vw:this.width, color:GameView.COLORS[Math.floor((Math.random() * 5))] }))
        console.log(this.grid);
        // this.game.render(this.ctx);
        // while(!this.game.gameOver()){
        this.ctx.strokeStyle = 'blue'
        this.bindKeyHandlers();
        this.game.renderBG();
        this.game.addPiece(6)
        this.then = Date.now();
        this.animate();
    }   


    

    animate(time){
        // console.log(this);
        // console.log(this)
        // this.game.step(timeDelta);
        // this.lastTime = time;
        // requestAnimationFrame(this.animate.bind(this));
        this.now = Date.now();
        this.delta = this.now - this.then;
        if (this.delta > this.interval){
            this.then = this.now - (this.delta % this.interval)
            this.game.render()

            console.log("working")
        }
        requestAnimationFrame(this.animate.bind(this));
    }
}

GameView.MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
  };
GameView.COLORS = 
    ['#FFF', '#FFCAD4', '#B0D0D3', '#C08497', '#F7AF9D'];

export default GameView;
class Circle {
    constructor(x, dx, y , dy, rad,  height, width){
        this.x = x
        this.dx = dx
        this.y =  y;
        this.dy = dy
        // this.ctx = ctx;
        this.radius = rad;
        this.height = height;
        this.width = width;
        this.color = GameView.COLORS[Math.floor((Math.random() * 5))];
    }

    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius ,0, Math.PI * 2, false);
        ctx.strokeStyle = 'blue';
        ctx.stroke()
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(ctx){
        this.draw(ctx);
        if (this.x + this.radius > this.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        } 
        if (this.y + this.radius >= this.height || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        // if ( mouse.x - this.x < 50 && mouse.x - this.x > -50 && 
        //      mouse.y - this.y < 50 && mouse.y - this.y > -50){
        //     this.radius += 3;
        // } else if(this.radius > 10) {
        //     this.radius -= 1; 
        // }
    
    }
}

        // for (let i = 0 ; i < 100 ; i++){
        //     let radius = 20 + (Math.random()*20);
        //     let x = Math.random() * (this.width - radius * 2) + radius;
        //     let dx = (Math.random() - 0.5) * 8;
        //     let y =  Math.random() * (this.height - radius * 2) + radius;
        //     let dy = (Math.random() - 0.5) * 8;    
        //     // console.log(this.ctx)
        //     let circle = new Circle(x,dx,y,dy, radius, this.height, this.width);
        //     circle.draw(this.ctx)
        //     this.objectArray.push(circle);
        //     this.ctx.beginPath()
        //     this.ctx.arc(x, y, radius ,0, Math.PI * 2, false);
        //     this.ctx.strokeStyle = 'blue';
        //     this.ctx.stroke()
        //     this.ctx.fillStyle = 'pink';
        //     this.ctx.fill();    
        // }
