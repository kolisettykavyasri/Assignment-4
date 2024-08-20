document.getElementById('generate-button').addEventListener('click', function() {
    // Get the input values
    const min = parseInt(document.getElementById('min').value, 10);
    const max = parseInt(document.getElementById('max').value, 10);
    
    // Validate inputs
    if (isNaN(min) || isNaN(max) || min >= max) {
        document.getElementById('output-text').textContent = 'Please enter valid min and max values.';
        return;
    }
    
    // Generate a random number between min and max
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Display the random number
    document.getElementById('output-text').textContent = `Random Number: ${randomNumber}`;
});
