// Import required modules
const { JSDOM } = require('jsdom'); // allows us to simulate a browser environment in Node.js
const assert = require('assert');
const fs = require('fs');
const jquery = require('jquery');

describe('Calculator Test', () => {
    let dom;
    let $;
    let display;
    let buttons;
    let equals;

    // Setting up the testing environment
    before(() => {
        const html = fs.readFileSync('./index.html', 'utf-8'); // read the contents of the index.html file

        // these can be initialized AFTER the index.html file has been read ^
        dom = new JSDOM(html); // create a JSDOM instance using the HTML content
        $ = jquery(dom.window); // create a jQuery instance using the DOM window
        display = $('#display', dom.window.document); // reference the display
        buttons = $('#buttons button', dom.window.document); // reference the buttons
        equals = $('#equals', dom.window.document); // reference the equals button
    });


});
