# jQulator

A simple calculator web application built using jQuery for performing basic arithmetic operations.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Clear input

## Live Demo

[jQulator Website](https://marymkohn.github.io/jQuery-calculator/)

## Usage

Simply click or tap the buttons on the calculator interface to perform arithmetic operations. The result will be displayed on the screen.

## Functionality
This code provides the following functionality:

1. Waits for the DOM to be fully loaded before executing the JavaScript code.
2. Sets up event listeners for button clicks.
3. Updates the calculator display based on user input.
4. Evaluates the mathematical expression when the 'equals' button is clicked.
5. Displays the result or an error message.


## Code Explanation
```javascript
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
```

## Contributing

I welcome contributions to improve the jQulator. Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.

