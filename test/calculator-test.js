// Import required modules
const { JSDOM } = require('jsdom'); // allows us to simulate a browser environment in Node.js
const assert = require('assert');
const fs = require('fs');
const jquery = require('jquery');

describe('Calculator Test', () => {
    // declare global testing variables
    let dom;
    let $;
    let display;
    let buttons;
    let equals;

    // Setting up the testing environment
    before(() => {
        const html = fs.readFileSync('./index.html', 'utf-8'); // read the contents of the index.html file

        // variables are initialized AFTER the index.html file has been read ^
        dom = new JSDOM(html); // create a JSDOM instance using the HTML content
        $ = jquery(dom.window); // create a jQuery instance using the DOM window
        display = $('#display', dom.window.document); // reference the display
        buttons = $('#buttons button', dom.window.document); // reference the buttons
        equals = $('#equals', dom.window.document); // reference the equals button
    });

    describe(' display.val(currentInput)', () => {
        // Test #1
        it('should display clicked button values', () => {
            // 1.1 set-up - define the expected result
            const expected = '123';
            // 1.2 exercise - call the function being tested

            // 1.3 verify the actual result with the expected result

            // 1.4 teardown - if needed
        });
    })
});
