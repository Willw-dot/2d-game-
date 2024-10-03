const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Player properties
let player = {
    x: canvas.width / 2 - 25,
    y: canvas.height / 2 - 25,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0,
    dy: 0
};

// Draw the player on the canvas
function drawPlayer() {
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Clear the canvas
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Update player position
function update() {
    clear();

    // Move the player
    player.x += player.dx;
    player.y += player.dy;

    // Draw the player
    drawPlayer();

    requestAnimationFrame(update);
}

// Move the player with the arrow keys
function movePlayer(e) {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        player.dx = player.speed;
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        player.dx = -player.speed;
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        player.dy = -player.speed;
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        player.dy = player.speed;
    }
}

// Stop the player when keys are released
function stopPlayer(e) {
    if (e.key === 'ArrowRight' || e.key === 'Right' || 
        e.key === 'ArrowLeft' || e.key === 'Left') {
        player.dx = 0;
    } else if (e.key === 'ArrowUp' || e.key === 'Up' || 
               e.key === 'ArrowDown' || e.key === 'Down') {
        player.dy = 0;
    }
}

// Event listeners for keyboard input
document.addEventListener('keydown', movePlayer);
document.addEventListener('keyup', stopPlayer);

// Start the game loop
update();
