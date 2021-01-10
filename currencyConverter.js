function dollarToDollar() {
    return 1;
}

function dollarToPound() {
    return 0.74;
}

function dollarToEuro() {
    return 0.84;
}

function dollarToRial() {
    return 42105;
}

function dollarToRuble() {
    return 74.08;  
}

function poundToDollar() {
    return 1.36;
}

function poundToPound() {
    return 1;
}

function poundToEuro() {
    return 1.11;
}

function poundToRial() {
    return 57128.06;

    
}

function poundToRuble() {
    return 100.50;

   
}

function euroToPound() {
    return 0.90;
}

function euroToDollar() {
    return 0.82;
}

function euroToEuro() {
    return 1;

}

function euroToRial() {
    return 51473.32;
}

function euroToRuble() {
    return 90.57;
}

function rialToPound() {
    return 0.000018;
}

function rialToDollar() {
    return 0.000024;
}

function rialToEuro() {
    return 0.000019;
}

function rialToRial() {
    return 1;
}

function rialToRuble() {
    return 0.0018;
}

function rubleToPound() {
    return 0.0100;
}

function rubleToDollar() {
    return 0.014;
}

function rubleToRuble() {
    return 1;
}

function rubleToEuro() {
    return 0.011;
}

function rubleToRial() {
    return 568.42;
}
   
function converterFunction() {
    let currencyInput = $("#currency-input").val();
    let currencyOutput = $("#currency-output").val();
    let input = $("#input").val();
    let rate = 0;

    if (currencyInput == "$" && currencyOutput == "£") {
        rate = dollarToPound();
    } else if (currencyInput == "$" && currencyOutput == "$") {
        rate = dollarToDollar();
    } else if (currencyInput == "$" && currencyOutput == "€") { 
        rate = dollarToEuro();
    } else if (currencyInput == "$" && currencyOutput == "﷼") {
        rate = dollarToRial();
    } else if (currencyInput == "$" && currencyOutput == "₽") {
        rate = dollarToRuble();
    } else if (currencyInput == "£" && currencyOutput == "£") {
        rate =  poundToPound();
    } else if (currencyInput == "£" && currencyOutput == "$") {
        rate = poundToDollar();
    } else if (currencyInput == "£" && currencyOutput == "€") {
        rate = poundToEuro();
    } else if (currencyInput == "£" && currencyOutput == "﷼") {
        rate = poundToRial();
    } else if (currencyInput == "£" && currencyOutput == "₽") {
        rate = poundToRuble();
    } else if (currencyInput == "€" && currencyOutput == "£") {
        rate = euroToPound();
    } else if (currencyInput == "€" && currencyOutput == "$") {
        rate = euroToDollar();
    } else if (currencyInput == "€" && currencyOutput == "€") {
        rate = euroToEuro();
    } else if (currencyInput == "€" && currencyOutput == "﷼") {
        rate = euroToRial();
    } else if (currencyInput == "€" && currencyOutput == "₽") {
        rate = euroToRuble();
    } else if (currencyInput == "﷼" && currencyOutput == "£") {
        rate = rialToPound();     
    } else if (currencyInput == "﷼" && currencyOutput == "$") {
        rate = rialToDollar();
    } else if (currencyInput == "﷼" && currencyOutput == "€") {
        rate = rialToEuro();
    } else if (currencyInput == "﷼" && currencyOutput == "﷼") {
        rate = rialToRial();
    } else if (currencyInput == "﷼" && currencyOutput == "₽") {
        rate = rialToRuble();
    } else if (currencyInput == "₽" && currencyOutput == "£") {
        rate = rubleToPound();
    } else if (currencyInput == "₽" && currencyOutput == "$") {
        rate = rubleToDollar();
    } else if (currencyInput == "₽" && currencyOutput == "€") {
        rate = rubleToDollar();
    } else if (currencyInput == "₽" && currencyOutput == "﷼") {
        rate = rubleToRial();
    } else if (currencyInput == "₽" && currencyOutput == "₽") {
        rate = rubleToRuble();
    } else {
        alert("This function doesn't exist");
    }
    
    $("#output").val(`${(input * rate)}`);
}

$(document).ready(function() {
    $("#currency-input").change(function() {
        converterFunction();

        let currencyInput = $(this).val();

        $("#sign-input").html(currencyInput);

        $("#input").val('');
        $("#output").val('');

        if (currencyInput == "$") {
            $("#input").attr('placeholder', 'Dollars')
        } else if (currencyInput == "£") {
            $("#input").attr('placeholder', 'Pounds')
        } else if (currencyInput == "€") {
            $("#input").attr('placeholder', 'Euros')
        } else {
            $("#input").attr('placeholder', 'Rials')
        }
    });

    $("#input").keyup(function() {
        converterFunction();
    });

    $("#currency-output").change(function() {
        converterFunction();
        
        $("#input").val('');
        $("#output").val('');

        let currencyOutput = $(this).val();
        $("#sign-output").html(currencyOutput);

        if (currencyOutput == "$") {
            $("#output").attr('placeholder', 'Dollars')
        } else if (currencyOutput == "£") {
            $("#output").attr('placeholder', 'Pounds')
        } else if (currencyOutput == "€") {
            $("#output").attr('placeholder', 'Euros')
        } else {
            $("#output").attr('placeholder', 'Rials')
        }
    });
});