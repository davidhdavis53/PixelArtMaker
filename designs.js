// Select color input
// The color input is a clickable control on the page.
// Access the id for the colorPicker element and save that value.

const getPickedColor = document.getElementById('colorPicker');

// Select size input
// Access the form data and store it in a constant.

const getPickedSize = document.getElementById('sizePicker');

// Initialize size and color fields. Limit width and height to 1-50.

getPickedSize.inputHeight.value = 1;
getPickedSize.inputHeight.max = 50;
getPickedSize.inputWidth.value = 1;
getPickedSize.inputWidth.max = 50;
getPickedColor.value = 'black';

// Set up the onclick listener for the form submit,
// store the height and weight values,
// and turn off the default form action.

getPickedSize.addEventListener('submit', event => {

    // Prevent default submit behavior

    event.preventDefault();

    // Now make the grid based on previous selections

    makeGrid();

});

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!
    // Access the table for the pixelCanvas element

    var getPixelCanvas = document.getElementById('pixelCanvas');
    
    // Remove all previous data from table.

    for (let i = getPixelCanvas.rows.length; i > 0; i--) {
        getPixelCanvas.deleteRow(i - 1);
    };
    
    // Build a table based on width and height and save picked color
    // to variable.

    var rowWidth = getPickedSize.inputWidth.value;
    var rowHeight = getPickedSize.inputHeight.value;
    // var boxColor = getPickedColor.value;

    for (let i = 0; i < rowHeight; i++) {
        var row = getPixelCanvas.insertRow(i);
        for (let j = 0; j < rowWidth; j++) {
            var cell = row.insertCell(j);
        }    
    };

    // Setup click to interrogate the table on mouse click and change cell color

    if (getPixelCanvas != null) {
        for (var i = 0; i < getPixelCanvas.rows.length; i++) {
            for (var j = 0; j < getPixelCanvas.rows[i].cells.length; j++)
                getPixelCanvas.rows[i].cells[j].onclick = function () { getval(this); };
        }
    }
    function getval(cell) {
        cell.style.backgroundColor = getPickedColor.value;
    }

};
