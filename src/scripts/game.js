import Map from './map';
import Dino from './dino';
import KeyHandler from './keyHandler';
import Enemy from './enemy';
import Bomb from './bomb';
import * as lib from "./lib.js";

let secondsPassed, oldTimestamp, fps;
export default class Game {
    constructor(ctx, gameMode) {
        this.ctx = ctx;
        this.end = false;
        this.paused = false;
        this.map = new Map();
        this.key = new KeyHandler().keys;
        this.explosion = [];

        switch (gameMode) {
        case "classic":
            Game.classicGame(this);
            break;
        case "demo":
            Game.demoGame(this);
            break;
        }

        this.dinos ||= [new Dino()];
        this.enemies ||= [];
    }

    static classicGame(game) {
        game.dinos = [new Dino({x: 832, y: 576, game: game})];
        game.enemies = [new Enemy({x: 64, y: 64, game: game})];
    }

    static demoGame(game) {
        game.dinos = [
            new Dino({x: 448, y: 320, game: game}),
            new Dino({
                x: 500, y: 320, keyMap: lib.ALT_KEYMAP,
                playerName: "Player 2", game: game
            })
        ];
        game.enemies = [
            new Enemy({x: 320, y: 320, game: game, skin: "grey"}),
            new Enemy({x: 64, y: 64, game: game, skin: "red"})
        ];
    }

    start() {
       const sideBar = document.getElementById('side-bar')
       sideBar.classList.remove("hidden");
       oldTimestamp = document.timeline.currentTime;
       requestAnimationFrame(this.animate.bind(this));
    }

    gameOver() {
       //use a modal or run cancelanimationrequest
        if(this.end) {
            const winModal = document.getElementById('winModal')
            const gameMessage = document.getElementsByClassName('game-message')[0]
            winModal.classList.remove("hidden");

            let message
            if(this.dinos.every(dino => dino.status === 'burned')) {
                message = 'Game Over! You are burned!'
            } else if (this.allEnemiesDefeated()) {
                message = 'You Win! You are unbeatable!'

            } else {
                message = 'Game Over! Soldier stabbed you, play again?'
            }
            gameMessage.innerHTML = message
        }
    }

    allEnemiesDefeated() {
        this.enemies.every(enemy => enemy.isDead());
    }

    animate(timestamp) {
        if (this.end) this.gameOver();

        secondsPassed = (timestamp - oldTimestamp) / 1000;
        oldTimestamp = timestamp;

        fps = Math.round(1 / secondsPassed);

        this.map.draw(this.ctx);
        this.dinos.forEach(dino => dino.draw(this.ctx))
        this.enemies.forEach(enemy => {
            enemy.draw(this.ctx);
            enemy.move(secondsPassed);
        })
        this.dinos.forEach(dino => dino.move(this.key, secondsPassed))
        this.enemies.forEach(enemy => {
            this.dinos.forEach(dino => this.enemyHitCheck(enemy, dino))
        })

        if (this.dinos.every(dino => dino.isDead())) {
            this.end = true;
        }

        this.dinos.forEach(dino => {
            if (dino.bomb) {
                dino.newBomb.forEach(egg => {
                    let idx = this.map.getIndex(egg.bombX, egg.bombY)
                    this.map.tiles[idx] = 1
                    Bomb.dropBomb(egg);

                    if (egg.sourceX < egg.width) {
                        egg.sourceX += egg.width;
                    } else {
                        egg.sourceX = 0;
                    }

                    dino.clearBomb(egg, secondsPassed);
                })
            }
        })

        if (this.explosion.length) {
            this.explosion[0].process(secondsPassed);
        }

        requestAnimationFrame(this.animate.bind(this));
    }

    enemyHitCheck(enemy, dino) {
        if(enemy.x === dino.x){
            if(Math.abs(enemy.y - dino.y) <= 64){
                dino.status = false;
            }
        } else if(enemy.y === dino.y) {
            if(Math.abs(enemy.x - dino.x) <= 60){
                dino.status = false;
            }
        }
    }
}
