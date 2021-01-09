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

function dollarToRuble() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 74.08).toFixed(2)}`);
}

function poundToDollar() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 1.36).toFixed(2)}`);
}

function poundToPound() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 1).toFixed(2)}`);
}

function poundToEuro() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 1.11).toFixed(2)}`);
}

function poundToRial() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 57128.06).toFixed(2)}`);
}

function poundToRuble() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 100.50).toFixed(2)}`);
}

function euroToPound() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 0.90).toFixed(2)}`);
}

function euroToDollar() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 0.82).toFixed(2)}`);
}

function euroToEuro() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 1).toFixed(2)}`);
}

function euroToRial() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 51473.32).toFixed(2)}`);
}

function euroToRuble() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 90.57).toFixed(2)}`);
}

function rialToPound() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 0.000018)}`);
}

function rialToDollar() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 0.000024)}`);
}

function rialToEuro() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 0.000019)}`);
}

function rialToRial() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 1)}`);
}

function rialToRuble() {
    let output = 0;

    $("#input").each(function() {
        output += Number($(this).val());
    })

    $("#output").val(`${(output * 0.0018).toFixed(2)}`);
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
        let currencyOutput = $("#currency-output").val();

        $("#sign-input").html(currency);

        if (currency == "$" && currencyOutput == "£") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToPound();
            })
        } else if (currency == "$" && currencyOutput == "$") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToDollar();
            })
        } else if (currency == "$" && currencyOutput == "€") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToEuro();
            })
        } else if (currency == "$" && currencyOutput == "﷼") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToRial();
            })
        } else if (currency == "$" && currencyOutput == "₽") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToRuble();
            })
        } else if (currency == "£" && currencyOutput == "£") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                poundToPound();
            })
        } else if (currency == "£" && currencyOutput == "$") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                poundToDollar();
            })
        } else if (currency == "£" && currencyOutput == "€") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                poundToEuro();
            })
        } else if (currency == "£" && currencyOutput == "﷼") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                poundToRial();
            })
        } else if (currency == "£" && currencyOutput == "₽") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                poundToRuble();
            })
        } else if (currency == "€" && currencyOutput == "£") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                euroToPound();
            })
        } else if (currency == "€" && currencyOutput == "$") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                euroToDollar();
            })
        } else if (currency == "€" && currencyOutput == "€") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                euroToEuro();
            })
        } else if (currency == "€" && currencyOutput == "﷼") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                euroToRial();
            })
        } else if (currency == "﷼" && currencyOutput == "£") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                rialToPound();
            })
        } else if (currency == "﷼" && currencyOutput == "$") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                rialToDollar();
            }) 
        } else if (currency == "﷼" && currencyOutput == "€") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                rialToEuro();
            }) 
        } else if (currency == "﷼" && currencyOutput == "﷼") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                rialToRial();
            }) 
        } else {
            alert("This function doesn't exist");
        }
    });

    $("#currency-output").click(function() {
        let currency = $("#currency-input").val();
        let currencyOutput = $(this).val();

        $("#sign-input").html(currency);

        if (currency == "$" && currencyOutput == "£") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToPound();
            })
        } else if (currency == "$" && currencyOutput == "$") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToDollar();
            })
        } else if (currency == "$" && currencyOutput == "€") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToEuro();
            })
        } else if (currency == "$" && currencyOutput == "﷼") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToRial();
            })
        } else if (currency == "$" && currencyOutput == "₽") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                dollarToRuble();
            })
        } else if (currency == "£" && currencyOutput == "£") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                poundToPound();
            })
        } else if (currency == "£" && currencyOutput == "$") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                poundToDollar();
            })
        } else if (currency == "£" && currencyOutput == "€") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                poundToEuro();
            })
        } else if (currency == "£" && currencyOutput == "﷼") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                poundToRial();
            })
        } else if (currency == "£" && currencyOutput == "₽") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                poundToRuble();
            })
        } else if (currency == "€" && currencyOutput == "£") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                euroToPound();
            })
        } else if (currency == "€" && currencyOutput == "$") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                euroToDollar();
            })
        } else if (currency == "€" && currencyOutput == "€") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                euroToEuro();
            })
        } else if (currency == "€" && currencyOutput == "﷼") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                euroToRial();
            })
        }  else if (currency == "€" && currencyOutput == "₽") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                euroToRuble();
            })
        } else if (currency == "﷼" && currencyOutput == "£") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                rialToPound();
            })
        } else if (currency == "﷼" && currencyOutput == "$") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                rialToDollar();
            }) 
        } else if (currency == "﷼" && currencyOutput == "€") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                rialToEuro();
            }) 
        } else if (currency == "﷼" && currencyOutput == "﷼") {
            $("#input").val('');
            $("#output").val('');

            $("#input").keyup(function() {
                rialToRial();
            }) 
        } else {
            alert("This function doesn't exist");
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