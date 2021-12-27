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

## Wireframes
![wireframe](wireframe.png)
## Technologies
- Javascript
- HTML/CSS
- Canvas
- Sprite
- might need an map editor(three.js?)
- Webpack

## Implementation Timeline:
- 12/31 Thursday: 
  1. Set-up the project blueprint 
  2. Create the js files for game, grid, characters, etc 
  3. Add all other necessary files, css, html, images, sprites
  4. Using webpack to organize the files
- 1/3 Monday:
  1. Using canvas to create the game board
  2. Create and add the instruction page
  3. Create and add the initial game state (with map and all characters)
  4. Set-up the baisc animation loop
- 1/4 Tuesday:
  1. Create the move function
  2. Setup the collision detection!
  3. Setup the explosion zone and safe zone
- 1/5 Wednesday:
  1. Add and render the game over page
  2. Add the power-up function
  3. Render the count of power-up on top
- 1/6 Thursday: 
- 1/7 Friday: Presentaion Date!

## Bonus Features:
Potential add-on features:
- Adding more maps and game characters to choose from
- Adding battle version (player1 vs player2 or player vs AI)
- Adding differnet levels
