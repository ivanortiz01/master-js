$(document).ready(function () {
    //load
    $("#datosLoad").load("https://reqres.in/");

    //get y post
    $.get("https://reqres.in/api/users", { page: 3 }, function (response) {
        response.data.forEach(element => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>");
        });
    });

    $("#formulario").submit(function (e) {
        e.preventDefault();

        var usuario = {
            "name": $('input[name="name"]').val(),
            "job": $('input[name="job"]').val()
        }

        // $.post($(this).attr("action"), usuario, function (response) {
        //     console.log(response);
        // }).done(function () {
        //     alert("Usuario añadido correctamente!!")
        // });

        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function () {
                console.log("Enviando usuario.");
            },
            success: function (response) {
                console.log(response);
            }, 
            error: function(error) {
                console.log("A ocurrido un error: " + error);
            },
            timeout: 2000
        });

        return false;
    });
});