
class Piece {
    constructor(options){
        // this.nullPiece = false;
        this.color = options['color'] || '#6effff';
        this.pos = options['pos'] || [[0,4],[0,5],[1,4],[1,5]] // arr of arrs, set to empty
    }
    // static nullPiece(){
    // }
    nextPos(){
        return [[this.pos[0][0] + 1, this.pos[0][1]], 
                [this.pos[1][0] + 1, this.pos[1][1]], 
                [this.pos[2][0] + 1, this.pos[2][1]], 
                [this.pos[3][0] + 1, this.pos[3][1]]]
    }
    collideWith(){

    }
}

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





