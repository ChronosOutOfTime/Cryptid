# Cryptid Challenge

This challenge is based over a table game i've played some time ago.
Here the details of the game with the requirements to meet the challenge

## Game rules

In this game you need to find the tile where the beast Cryptid lives (hence the name of the challenge)

There is a map composed by different hexagonal tiles

Each tile can be:
- a desert
- a forest
- a mountain
- a lake
- a marsh

some of the tile can also have

- a bear
- a puma

Each player are given a clue that gives you some information where cryptid could be, but these information are not enough, you need to fetch information from other players

## start of the game

For the first 2 rounds each player needs to place a colored cube in a tile that does not match with his clue


## turn phase - a player can choose to

- ask the “could the cryptid live here?”) question + pointing a tile → to only one other player, and based on his clue he will 

    - place a disc made by his color if the answer is “yes”
    - place a cube where it is not possible to find the beast  AND in this case also the player that asked the question needs to put down a cube

- or can ask to every player the same question, by placing his disc (meaning how many other can confirm my supposition)

  - now in turn, each player place a disc or a cube and when a cube is placed this process ends otherwise the player that asked the question WINS if a tile will contain all the discs

## Possible clues that each player can receive

- In 2 type of terrain
  - In desert or lake
  - In desert or forest
  - In desert or marsh
  - In desert or mountain
  - In lake or mountain
  - In lake or forest
  - In lake or marsh
  - In mountain or forest
  - In mountain or marsh
  - In marsh or forest
- On or 1 tile near a terrain or an animal
  - On or near 1 tile of a desert
  - On or near 1 tile of a lake
  - On or near 1 tile of a mountain
  - On or near 1 tile of a marsh
  - On or near 1 tile of a forest
  - On or near 1 tile of a an animal (puma or bear)
- On or 2 tiles near a tower, or cabin abandoned
  - on or near 2 tiles of a cabin abandoned
  - on or near 2 tiles of a rock (hexagon)
  - on or near 2 tiles of a puma
  - on or near 2 tiles of a bear
- On or 3 tiles near a structure
  - On or 3 tiles near a white structure
  - On or 3 tiles near a black structure
  - On or 3 tiles near a blue structure
  - On or 3 tiles near a green structure

## Terrains

|terrain|picture|terrain|picture|
|-------|-------|-------|-------|
|forest| <img src="./images/tiles/forest.png" width=100> |cabin| <img src="./images/tiles/cabin.png" width=100> |
|desert| <img src="./images/tiles/desert.png" width=100> |rock| <img src="./images/tiles/rock.png" width=100> |
|marsh| <img src="./images/tiles/marsh.png" width=100> |puma (red border)| <img src="./images/tiles/puma.png" width=100> |
|lake| <img src="./images/tiles/lake.png" width=100> |bear (black border)| <img src="./images/tiles/bear.png" width=100> |
|mountain| <img src="./images/tiles/mountain.png" width=100> |

## Map

<img src="./images/map.png" width=600>

## Initial Clues for 4 players

|player|clue|color of pieces|
|------|----|-----|
|A (alfa)|In a Lake or Mountain|red|
|B (beta)|Inside or near 2 tiles from a bear territory|green|
|E (eta)|Inside or near 1 tile from a forest|blue|
|G (gamma)|Inside or near 2 tiles from an abandoned cabin|orange|
|Y (epsilon)| not playing|purple|

12 or more cubes for each player

10 or more discs for each player

The composition of all the clues will give you the exact location of cryptid, but the challenge is to simulate a real game and get to the solution as soon as possible

You can choose whatever player you will be. 
(in a real game you will not have access to the whole clues, of course my dear)


# Challenge

Write an algorithm, a small demo, a prototype, whatever in your favorite programming language that will find find where the creature lives ( one exact tile) in the earliest turn possible.

Note that in each game the order of clues that other players 
give you by placing a disc or a cube in the map could be different

## Simulation

setup phase, where each player have to put down two cubes

|description|image|
|------|----|
|Initial map with cabin and rock placed|<img src="./images/simulation/simulation - 0.jpg" width=300> |
|player A put a red cube|<img src="./images/simulation/simulation - 1.jpg" width=300> |
|player B put a green cube|<img src="./images/simulation/simulation - 2.jpg" width=300> |
|player E put a blue cube|<img src="./images/simulation/simulation - 3.jpg" width=300> |
|player G put a orange cube|<img src="./images/simulation/simulation - 4.jpg" width=300> |
|player A put a red cube|<img src="./images/simulation/simulation - 5.jpg" width=300> |
|player B put a green cube|<img src="./images/simulation/simulation - 6.jpg" width=300> |
|player E put a blue cube|<img src="./images/simulation/simulation - 7.jpg" width=300> |
|player G put a orange cube|<img src="./images/simulation/simulation - 8.jpg" width=300> |

Mid phase, where player ask questions each other

|question|answer|in case answer is negative |
|------|----|----|
|Player A asks player B: Could it be here (where the star is)? <img src="./images/simulation/simulation - 9a.jpg" width=300> | since the Beast can be inside 2 tiles near it’s inside, player B put a disc <img src="./images/simulation/simulation - 9b.jpg" width=300>|
|Player B asks player C: Could it be here (where the star is)? <img src="./images/simulation/simulation - 10a.jpg" width=300> | the answer is negative so player C put a cube <img src="./images/simulation/simulation - 10b.jpg" width=300>| also player B needs to put a cube <img src="./images/simulation/simulation - 10c.jpg" width=300> |

The beast is HERE

<img src="./images/simulation/cryptid position.png" width=300> 