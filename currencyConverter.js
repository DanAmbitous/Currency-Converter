function dollarToDollar() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 1).toFixed(2)}`);
}

function dollarToPound() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * .74).toFixed(2)}`);
}

function dollarToEuro() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * .84).toFixed(2)}`);
}

function dollarToRial() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 42105).toFixed(2)}`);
}

function poundToDollar() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 1.34).toFixed(2)}`);
}

function euroToPound() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 0.90).toFixed(2)}`);
}

$(document).ready(function() {
    $("#input").keyup(function() {
        dollarToPound()
    })

    let currencyFunctions = "currencyOne"; //This is for keeping track of what the function should do the following

    $("#switch").click(function() {
        if (currencyFunctions == "currencyOne") {
            poundToDollar()
            $("#sign-input").html("£");
            $("#sign-output").html("$");
            $("#input").attr('placeholder', 'Pounds');
            currencyFunctions = "currencyTwo";
            return;
        }
        
        if (currencyFunctions == "currencyTwo") {
            dollarToPound()
            $("#sign-input").html("$");
            $("#sign-output").html("£");
            $("#input").attr('placeholder', 'Dollars');
            currencyFunctions = "currencyOne";
            return;
        }
    });

    $("#currency-input").click(function() {
        let currency = $(this).val();
        let currencyOut = $("#currency-output").val();

        $("#sign-input").html(currency);

        if (currency == "$" && currencyOut == "$") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToDollar();
            })
        } else if (currency == "$" && currencyOut == "£") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToPound();
            })
        } else if (currency == "€") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToEuro();
            })
        } else {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToRial();
            }) 
        }
    });

    $("#currency-output").click(function() {
        let currency = $(this).val();

        $("#sign-output").html(currency);

        if (currency == "$") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToDollar();
            })
        } else if (currency == "£") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToPound();
            })
        } else if (currency == "€") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToEuro();
            })
        } else {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToRial();
            }) 
        }
    });

    $("#currency-input").click(function() {
        let currency = $(this).val();
        $("#sign-input").html(currency);

        if (currency == "$") {
            $("#input").attr('placeholder', 'Dollars')
        } else if (currency == "£") {
            $("#input").attr('placeholder', 'Pounds')
        } else if (currency == "€") {
            $("#input").attr('placeholder', 'Euros')
        } else {
            $("#input").attr('placeholder', 'Rials')
        }
    });

    $("#currency-output").click(function() {
        let currency = $(this).val();
        $("#sign-output").html(currency);

        if (currency == "$") {
            $("#output").attr('placeholder', 'Dollars')
        } else if (currency == "£") {
            $("#output").attr('placeholder', 'Pounds')
        } else if (currency == "€") {
            $("#output").attr('placeholder', 'Euros')
        } else {
            $("#output").attr('placeholder', 'Rials')
        }
    });
});