import './styles/index.scss';
import Tetris from './tetris';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector("canvas");
  canvas.width = 600;
  canvas.height = 800;
  
  const ctx = canvas.getContext("2d");
  const tetris = new Tetris(canvas, ctx);
  tetris.start();
  
})