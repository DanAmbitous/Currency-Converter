function dollarToPound() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * .74).toFixed(2)}`);
}

function poundToDollar() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 1.34).toFixed(2)}`);
}

$(document).ready(function() {
    $("input").keyup(function() {
        dollarToPound()
    })

    let currencyFunctions = "pound"; //This is for keeping track of what the function should do the following

    $("#switch").click(function() {
        if (currencyFunctions == "pound") {
            poundToDollar()
            $("#sign-input").html("£");
            $("#sign-output").html("$");
            $("#currency-one").html("Pounds");
            $("#currency-two").html("Dollars");
            currencyFunctions = "dollar";
            return;
        }
        
        if (currencyFunctions == "dollar") {
            dollarToPound()
            $("#sign-input").html("$");
            $("#sign-output").html("£");
            $("#currency-one").html("Dollars");
            $("#currency-two").html("Pounds");
            currencyFunctions = "pound";
            return;
        }
    });
});