import Piece from './piece';
import Board from './board';
class Game {
    constructor(ctx){
        this.ctx = ctx
        this.pieces = [];
        this.board = new Board({});
        this.xOffset = 150;
        this.yOffset = 100;
        this.gameOver = false;
    }

    addPiece(nextPiece){
        // let nextPiece = Math.floor(Math.random()*7);
        this.board.addPiece(nextPiece);

    }

    renderBG(){ 
        for(let x = 0; x < this.board.grid.length; x++){
            for(let y = 0; y < this.board.grid[0].length; y++){
                // console.log(this.board[x][y])
                    this.ctx.rect(y*Game.BOX_LENGTH+this.xOffset, x* Game.BOX_LENGTH+this.yOffset, Game.BOX_LENGTH,Game.BOX_LENGTH);
                    this.ctx.stroke();
            }
        }
        this.ctx.fillStyle = "#8CC13F"
        this.ctx.fillRect(0, 700, 600, 100);
    }

    fillSquare(y){

    }

    render(){
        // console.log(this.xOffset);
        // debugger;
        if (this.board.gameOver === false){
            this.ctx.clearRect(0,0, Game.WIDTH*Game.BOX_LENGTH+this.xOffset, Game.HEIGHT*Game.BOX_LENGTH+this.yOffset)
            this.board.dropPiece() //addPiece if cannot dropPiece()
            for(let x = 0; x < this.board.grid.length; x++){
                for(let y = 0; y < this.board.grid[0].length; y++){
                    let nextColor = this.board.grid[x][y]
                    if (nextColor != 0){
                        // ctx.fillStyle = '#000'
                        this.ctx.fillStyle = this.board.grid[x][y];
                        this.ctx.fillRect(y*Game.BOX_LENGTH+this.xOffset, x* Game.BOX_LENGTH+this.yOffset, Game.BOX_LENGTH,Game.BOX_LENGTH);
                        this.ctx.stroke();
                    }
                }
            }
        }
        // this.ctx.fillStyle = "#FFF";

        // this.board.grid.unshift(this.board.grid.pop())
    }

    collidesWith(){
        
    }




}
Game.BOX_LENGTH = 30;
Game.WIDTH = 10;
Game.HEIGHT = 20;
Game.C= ["#ED1651", "#702C8E", "#06C4F4", "#8CC13F", "#F0E705"]
export default Game;