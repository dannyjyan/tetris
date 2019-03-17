import './styles/index.scss'
import GameView from "./gameView";
import Game from './game';
import { createContext } from 'vm';

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.querySelector("canvas");
    canvasEl.width = 600;
    canvasEl.height = 800;
    const ctx = canvasEl.getContext("2d");
    const game = new Game(ctx);

    new GameView(ctx, game).start();
})