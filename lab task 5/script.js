
function appendValue(value) {

    let display = document.getElementById("display");

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;

}


function clearDisplay() {

    document.getElementById("display").value = "";

}


function deleteLast() {

    let display = document.getElementById("display");

    display.value = display.value.slice(0, -1);

}


function calculateResult() {

    let display = document.getElementById("display");

    let expression = display.value;

    if (expression.trim() === "") {
        return;
    }

    // Check that only basic mathematical characters are entered.
    if (!/^[0-9+*/.()\-\s]+$/.test(expression)) {
        display.value = "Error";
        return;
    }

    try {

        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {

            display.value = "Error";

        } else {

            display.value = result;

        }

    } catch (error) {

        display.value = "Error";

    }

}
