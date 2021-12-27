# DinoBomber
## Background
DinoBomber is a 2D javascript game, it is designed based on the concept of the classic Bobmberman game. Game will be played on a grid based map with obstacles. There are four game charactors: 
- cute green dino (main charactor, controlled by the player)
- soldier #1 (walking randomly on the map)
- soldier #2 (chasing dino)
- soldier #3 (walking in his own zone, if dino is close by, walking away from the dino)

If all soldiers are killed, player win. If soldier catched dino, or if dino killed itself(standing in the explosion zone) by acident, player lose. 

## Functionality & MVPs
In DinoBomber, users will be able to:
- Start, pause, and reset the game board
- Control dino to move around using keyboard(up/down/left/right)
- Drop an egg using keyboard(space)
  - Egg will explode in 3s
  - Egg as center [0, 0], explosion zone: [[0, 1], [0, -1], [-1, 0], [1, 0]]
> attach an image here to show the explosion zone
- One power-up item (maybe an apple)
  - Rendered every 10 seconds at a radom position
  - Doubled the explosion area to [[0, 2], [0, -2], [-2, 0], [2, 0]]
  - if three items are collected and not used, explosion extend to the entire row and column
>attach an image here to show the explosion zone