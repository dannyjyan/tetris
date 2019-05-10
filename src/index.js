import './styles/index.scss';
import Tetris from './tetris';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game");
  let bg = document.getElementById("background");
  canvas.width = 360;
  canvas.height = 600;
  bg.width = 360;
  bg.height = 600;
  


  const ctx = canvas.getContext("2d");
  const tetris = new Tetris(canvas, ctx);
  tetris.start();
  
})