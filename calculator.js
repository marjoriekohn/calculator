$(document).ready(function() {
    let display = $('#display');
    let currentInput = '';

    $('#buttons button').on('click', function() { //event listener for button click
        let buttonValue = $(this).text(); //button pushed is saved

        if (buttonValue === 'C') { // checks if user pushed clear
            currentInput = ''; // resets user input
        } else {
            currentInput += buttonValue; // adds values
        }

        display.val(currentInput); // displays value of new current input
    });

    $('#equals').on('click', function() { // event listener for equal button
        try {
            let result = eval(currentInput);
            display.val(result);
            currentInput = '';
        } catch (e) {
            display.val('Error'); // displays error if NaN
            currentInput = '';
        }
    });
});