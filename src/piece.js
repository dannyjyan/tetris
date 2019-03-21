
class Piece {
    constructor(options){
        // this.nullPiece = false;
        this.color = options['color'] || '#6effff';
        this.pos = options['pos'] || [[0,4],[0,5],[1,4],[1,5]] // arr of arrs, set to empty
        this.nextRot = -1;
    }
    // static nullPiece(){
    // }
    nextPos(dir){
        // dir = 'down';
        switch (dir) { 
            case 'down':
                return [[this.pos[0][0] + 1, this.pos[0][1]], 
                        [this.pos[1][0] + 1, this.pos[1][1]], 
                        [this.pos[2][0] + 1, this.pos[2][1]], 
                        [this.pos[3][0] + 1, this.pos[3][1]]]

            case 'up': //delete this late but sure lol
                return rotate()
                // return [[this.pos[0][0] - 1, this.pos[0][1]], 
                //         [this.pos[1][0] - 1, this.pos[1][1]], 
                //         [this.pos[2][0] - 1, this.pos[2][1]], 
                //         [this.pos[3][0] - 1, this.pos[3][1]]]
    
            case 'left':
                return [[this.pos[0][0], this.pos[0][1] - 1], 
                        [this.pos[1][0], this.pos[1][1] - 1], 
                        [this.pos[2][0], this.pos[2][1] - 1], 
                        [this.pos[3][0], this.pos[3][1] - 1]]

            case 'right':
                return [[this.pos[0][0], this.pos[0][1] + 1], 
                        [this.pos[1][0], this.pos[1][1] + 1], 
                        [this.pos[2][0], this.pos[2][1] + 1], 
                        [this.pos[3][0], this.pos[3][1] + 1]]
        }
    }
    rotate(){
        this.nextRot ++ 
        nextChange = Piece.rotArr[this.nextRot % Piece.rotArr.length];
        return [[this.pos[0][0], this.pos[0][1] - 1], 
                [this.pos[1][0], this.pos[1][1] - 1], 
                [this.pos[2][0], this.pos[2][1] - 1], 
                [this.pos[3][0], this.pos[3][1] - 1]]

    }
    collideWith(){

    }
}
Piece.rotArr = [
    [[-1, 1], [0,0], [1, -1], [2, -2]], 
    [[1, -1], [0,0], [-1, 1], [-2, 2]] 
]

module.exports = Piece;

// constructor(options){
//     this.x = options['x'];
//     this.y = options['y'];
//     this.speed = options['speed'];
//     this.vh = options['vh'];
//     this.vw = options['vw'];
//     this.height = 100;
//     this.width = 100;
//     this.color = options['color'];
//     this.isPlaced = false;
// }
// draw(ctx){
//     ctx.fillRect(this.x ,this.y, this.width,this.height);
//     ctx.fillStyle = this.color;
// }
// update(ctx){ // or move
//     this.draw(ctx)
//     if(this.y === this.vh - this.height){
//         this.isPlaced = true;
//         return;
//     }
//     // if (this.y < this.vh - this.height){
//     this.y += this.speed*10;
//     // }

// }





