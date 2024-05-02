
document.addEventListener('DOMContentLoaded', function () {
    // Get the canvas element
    var canvas = document.getElementById('spaceCanvas');
    var ctx = canvas.getContext('2d');

    // Set the canvas size to fill the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define the number of stars and their size
    var numStars = 100;
    var starSize = 2;

    // Function to draw stars on the canvas
    function drawStars() {
        // Set the fill color to white
        ctx.fillStyle = 'white';

        // Loop through the number of stars and draw them
        for (var i = 0; i < numStars; i++) {
            // Generate random positions for the stars
            var x = Math.random() * canvas.width;
            var y = Math.random() * canvas.height;

            // Draw the star as a filled rectangle
            ctx.fillRect(x, y, starSize, starSize);
        }
    }

    // Draw the stars initially
    drawStars();
});