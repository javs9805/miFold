var headHeight = $("#cabecera").height();
$(document).ready(function() {
    var headHeight = $("#cabecera").height();
    var height = $(window).height();
    var width = $(window).width();
    $("#container").height(height);
    $("#container").width(width);
    $("#espacio").height(height + headHeight);
    $("#espacio").css({ top: headHeight });
    $("#espacio").width(width);
    $("#paisaje").height(height);
    $("#paisaje").width(width);

});

$(document).ready(function() {
    var height = $(window).height();
    var width = $(window).width();
    var stars = 60;
    var x = 0;
    var y = 0;
    for (let i = 0; i < stars; i++) {
        y = Math.floor(Math.random() * width);
        x = Math.floor(Math.random() * height);
        CrearEstrella(x, y);
    }

});

function CrearEstrella(x, y) {
    var time = Math.random() * 4;
    time = (time < 1) ? (time + 1) : time;
    return $("#espacio").append(
        '<div class="estrella" style=" top:' +
        (x) +
        "px; left:" +
        y +
        'px;animation: starOp ' + time + 's infinite">' +
        "</div>"
    );
}

function zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */
    var zero = "0"; /* String de cero */

    if (width <= length) {
        if (number < 0) {
            return "-" + numberOutput.toString();
        } else {
            return numberOutput.toString();
        }
    } else {
        if (number < 0) {
            return "-" + zero.repeat(width - length) + numberOutput.toString();
        } else {
            return zero.repeat(width - length) + numberOutput.toString();
        }
    }
}

$(document).ready(function() {
    udateTime();
    setInterval(udateTime, 1000);
});


function udateTime() {
    var hoy = new Date();
    var h = hoy.getHours();
    var m = hoy.getMinutes();
    var s = hoy.getSeconds();
    // if ((h > 18 || h < 6) && !(document.getElementById("chkbx").checked)) {
    //     document.getElementById("chkbx").checked = true;
    //     cambiarTiempo();
    // } else if ((h < 18 && h > 6) && document.getElementById("chkbx").checked) {
    //     document.getElementById("chkbx").checked = false;
    //     cambiarTiempo();
    // }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }
    $("#horas").html(h + ":");
    $("#segundos").html(s);
    $("#minutos").html(m + ":");

}

$(document).ready(function() {
    $(".switch").click(function() {
        cambiarTiempo();
    });
});


function cambiarTiempo() {

    $(".switch").toggleClass("switchOn");
    $("#navbar").toggleClass("bg-darknight");
    $("#navbar").toggleClass("bg-whiteday");
    $("#espacio").toggleClass("bg-darknight");
    $("#espacio").toggleClass("bg-whiteday");
    $("#tiempo").toggleClass("bg-darknight");
    $("#tiempo").toggleClass("bg-whiteday");
    $("#paisaje")
        .css("backgroundImage", "url(" + dir + ")")
        .promise()
        .done(function() {
            // Callback of the callback :)
            $(this).animate({
                    opacity: 1
                },
                600
            );
        });

}


$(document).ready(function() {
    $("#user").hover(
        function() {
            $("body").addClass("hover");
        },
        function() {
            $("body").removeClass("hover");
        }
    );
});