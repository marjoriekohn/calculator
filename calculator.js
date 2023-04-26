$(document).ready(function() { // event listener, waiting for DOM to load
    let display = $('#display'); // <input> has id="display", note: display is READ ONLY
    let currentInput = ''; // will be used to store user input

    $('#buttons button').on('click', function() { //event listener to buttons, listens for a click
        let buttonValue = $(this).text(); // retrieves the value of the button clicked

        if (buttonValue === 'C') { // if user pushed clear
            currentInput = ''; // resets currentInput
        } else {
            currentInput += buttonValue; // if not, the value to the currentInput
        }

        display.val(currentInput); // sets the display to the new current input
    });

    $('#equals').on('click', function() { // event listener for equal button
        try {
            let result = eval(currentInput); // evaluates the currentInput and stores it in 'result'
            display.val(result); // sets the display to the result
            currentInput = ''; // resets currentInput
        } catch (e) { // if an exception is caught
            display.val('Error'); // show 'Error' on the display
            currentInput = ''; // reset currentInput
        }
    });
});