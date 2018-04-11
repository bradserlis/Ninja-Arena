# Ninja Arena

# Controls

A - ATTACK
Directional Arrows:
'up'
'down'
'left'  - MOVE
'right' 

"ENTER" to confirm in MENU

# Credits:
DezrasDragons@ OpengameArt.org - https://opengameart.org/users/dezrasdragons
Calciumtrice @ OpenGameArt.org - https://opengameart.org/users/calciumtrice
Buch @ OpengameArt.org - https://opengameart.org/users/buch
Fred1712 @ freesound.org - https://freesound.org/people/Fred1712/

Morten Barfod Søegaard @ www.littlerobotsoundfactory.com 

LittleRobotSoundFactory @ freesound.org - https://freesound.org/people/LittleRobotSoundFactory/

erkanozan @ freesound.org - https://freesound.org/people/erkanozan/

Vhiiula - Backtrackin' from IHyper by BackTrack @ http://freemusicarchive.org/music/Backtrack/iHyper/

LittleRobotSoundFactory @ freesound.org - https://freesound.org/people/LittleRobotSoundFactory/
# Screenshots

![screen shot 2018-04-11 at 8 05 57 am](https://user-images.githubusercontent.com/36775791/38625455-5ce785e6-3d5f-11e8-897d-99672047af8c.png)
![screen shot 2018-04-11 at 8 06 07 am](https://user-images.githubusercontent.com/36775791/38625459-5d27066c-3d5f-11e8-8041-fbfd5d280ffc.png)

# What is it?

Ninja Arena is a fast-paced top-down game based on retro arcade games. You are playing as a ninja set to do battle with waves of enemies, with each victory bringing you closer to the boss of the coliseum. After defeating the boss, you are victorious, have proven ninjas are pretty much the best at doing combat anywhere, and you may go back to doing...ninja things? 

# Proposal

The goal was to create the top-down action with a well-animated retro sprite, assign the sprite several moves, and do battle with several different enemy types which brought different attack patterns and speeds with them. 
The stretch goal was to include a boss fight, a second player, power-ups after a set amount of victories, and additional weapons.

# Technology

The main technology for this project is Phaser 2.x. Ultimately, Phaser 2.2 was used after realizing that Phaser 3 had limited tutorials and resources available. Phaser runs on a canvas element and WebGL. JavaScript, minor CSS, and HTML was also used, as well as Tiled for the background sprite. 

# Approach Taken

Enemy Logic: Create enemy logic which tracked a player's position, and continually chase the player. If 2 players are present, use logic to continually determine which player's location was closer to the enemy's and choose a new target accordingly.
  Check proximity to player with if statement, and then attack if close enough.
 Player Attacks: Using an invisible "hitbox" sprite, damage enemies outside the area of the player's pixel when attacking (colliding) with the hitbox.
 
 In order to make the game more challenging, added cooldowns/reload time on attack, and made more difficult enemies faster to collide with player.
 
# Unsolved

Did not implement Player2, powerups, or enemy projectiles due to the time it took to learn Phaser and implement the core game mechanics. Enemy Hit Boxes for Boss do not enable/disable properly as of current state.


