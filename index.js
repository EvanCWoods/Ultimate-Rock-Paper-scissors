// Global Variables
const rockStartingPosition = [30, 30];

// class for a player
class Player {
    constructor(team, startingPosition) {
        this.team = team,
        this.startingPosition = startingPosition,
        this.direction = this.generateDirection(),
        this.x = startingPosition[0],
        this.y = startingPosition[1]
    }

    generateDirection = () => {
        // Generate a random angle between 0 and 360
        const rad =  Math.floor(Math.random() * 360) * Math.PI / 180;
        console.log(rad);
        return rad;
    }

    movePlayer(rad) {
        this.x += (10 * Math.cos(rad));
        this.y += (10 * Math.sin(rad));
        console.log(this.x, this.y);
        updatePlayerLocation(this.x, this.y);
        return this.x, this.y;
    }
}


// Function to generate a starting direction for each item
// const generateDirection = () => {
//     // Generate a random angle between 0 and 360
//     const rad =  Math.floor(Math.random() * 360) * Math.PI / 180;
//     xx = x + (10 * cos(rad));
//     yy = y + (10 * sin(rad));
//     console.log(rad)
//     console.log(xx, yy)
// }

// Function to generate equal numbers of rock, paper and scissors
const generatePlayers = () => {
    const rock = new Player("Rock", rockStartingPosition);
    console.log(rock);
    return rock;
}


// Create a dummy player
const player = generatePlayers();





// Function to handle desplaying players on the canvas
const displayPlayers = () => {
    const canvas = document.getElementById("canvas");
    const rock = document.createElement("div");

    rock.setAttribute("id", player.team + "_1");
    rock.setAttribute("class", "player");

    rock.style.position = "absolute";
    rock.style.left = player.x+'px';
    rock.style.top = player.y+'px';   
    console.log(player.x, player.y);
    rock.textContent = player.team;
    canvas.appendChild(rock);
}

const updatePlayerLocation = (x, y) => {
    const player = document.getElementById("Rock_1");
    player.style.left = x+'px';
    player.style.top = y+'px';
}


// Function to handle bouncing off walls


// Function to handle logic of collisions

// Function to move players
setInterval(() => {
    player.movePlayer(player.direction);
}, 500);


// Main function to start the game
const Main = () => {
    displayPlayers();
}

Main();