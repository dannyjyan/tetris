
import Piece from './piece';
class Board {
    constructor(options){
        this.width = options['width'] || 600;
        this.height = options['height'] || 800;
        this.grid = [
            [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
            ['#6effff',0,0,0,0,0,0,0,0,0],['#6effff',0,'#f2a404','#f2a404',0,0,0,0,0,0],
            ['#6effff','#faff02','#faff02','#f2a404',0,0,0,0,'#aa00ff',0],['#6effff','#faff02','#faff02','#f2a404',0,0,0,'#aa00ff','#aa00ff','#aa00ff']
        ];;
        this.currentPiece = null;
        this.gameOver = false;
    }
    setCurrentPiece(piece){
        this.currentPiece = piece;
    }
    dropPiece(){
        // let prev = this.currentPiece.pos;
        // console.log(next[0][1])
        let prev = this.currentPiece.pos
        let next = this.currentPiece.nextPos();

        if (this.currentPiece && this.isValidMove(next)){
            for(let i = 0; i < 4; i++){ // set prev positions to 0
                this.grid[prev[i][0]][prev[i][1]] = 0;
            }
            for(let j = 0; j < 4; j++){ //set next positions to color
                this.grid[next[j][0]][next[j][1]] = this.currentPiece.color;
            }
            this.currentPiece.pos = next;
        } else {
            this.addPiece(Math.floor(Math.random()*7));
        }
    }
    isValidMove(nextPos){
        for(let j = 0; j < 4; j++){ // nextPosition
            let nxt = nextPos[j]
            if (this.grid[nxt[0]][nxt[1]] !== 0){ // check if next spot is equal to 0
                let currPiecePos = false;
                this.currentPiece.pos.forEach((pos) => {
                    if (pos[0] == nextPos[j][0] && pos[1] == nextPos[j][1]){
                        currPiecePos = true;
                    }
                })
                if (currPiecePos === false){
                    return false;
                }
            }
        }
        return true;
    }
    addPiece(nextPiece){
        let arr = []
        let color = ""
        switch (nextPiece){
            case 0: // I 
                arr = [[0,3],[0,4],[0,5],[0,6]]
                color = '#6effff'
                break;
            case 1: // O
                arr = [[0,4],[0,5],[1,4],[1,5]]
                color = '#faff02';
                break;
            case 2: // T
                arr = [[0,4],[1,3],[1,4],[1,5]]
                color = '#aa00ff';
                break;
            case 3: // L
                arr = [[0,5],[1,3],[1,4],[1,5]]
                color = '#f2a404';
                break;
            case 4: // J 
                arr = [[0,3],[1,3],[1,4],[1,5]]
                color = '#3b00ff';
                break;
            case 5: // Z
                arr = [[0,3],[0,4],[1,4],[1,5]]
                color = '#ed0105';
                break;
            case 6: // S
                arr = [[0,4],[0,5],[1,3],[1,4]]
                color = '#2b8001';
                break;
        }
        arr.forEach((idx)=> {
            if (this.grid[idx[0]][idx[1]] !== 0) {this.gameOver = true}
            this.grid[idx[0]][idx[1]] = color;
        })
        this.currentPiece = new Piece({pos: arr, color: color})


    }
}

export default Board;