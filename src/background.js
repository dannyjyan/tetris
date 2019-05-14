


const renderBG = () => { 
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
