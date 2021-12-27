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
- Use power-up item (maybe an apple)
  - Rendered every 10 seconds at a radom position
- Trap soldiers in your explosion zone to kill them  
- Hide behind obstacles to protect dino from exposion

**Explosion Zone explaination:**
In general, eggs will explode in 3 seconds, and obstacle can block the explosion. Egg as center [0, 0],
- without power-up
  -explosion zone: [[0, 1], [0, -1], [-1, 0], [1, 0]]
> attach an image here to show the explosion zone
- with power-up
  - Extend the area to [[0, 2], [0, -2], [-2, 0], [2, 0]]
>attach two images here to show the explosion zone
- with three power-ups
  - explosion extend to the entire row and column
>attach two images here to show the explosion zone
