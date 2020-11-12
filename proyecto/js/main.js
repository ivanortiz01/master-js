$(document).ready(function () {

    if (window.location.href.indexOf("index") > -1) {
        // Slider
        $('.slider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });

        // Posts
        var posts = [
            {
                title: 'Prueba titulo 1',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sem molestie, ullamcorper est quis, luctus ante.Nunc eu consectetur sem, ut elementum sapien.In interdum dolor ipsum, sed ultrices lectus vehicula sollicitudin.Nam at erat sit amet sem gravida vehicula porta non nisi.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Curabitur porttitor efficitur tellus, et malesuada ante.Vivamus a ipsum ac nisl vulputate sollicitudin.Phasellus vitae dolor nec ipsum pretium blandit.Morbi non enim porttitor, dictum lectus ac, auctor ipsum.Praesent lacinia sem non nibh vehicula, eget vulputate erat viverra.'
            },
            {
                title: 'Prueba titulo 2',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sem molestie, ullamcorper est quis, luctus ante.Nunc eu consectetur sem, ut elementum sapien.In interdum dolor ipsum, sed ultrices lectus vehicula sollicitudin.Nam at erat sit amet sem gravida vehicula porta non nisi.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Curabitur porttitor efficitur tellus, et malesuada ante.Vivamus a ipsum ac nisl vulputate sollicitudin.Phasellus vitae dolor nec ipsum pretium blandit.Morbi non enim porttitor, dictum lectus ac, auctor ipsum.Praesent lacinia sem non nibh vehicula, eget vulputate erat viverra.'
            },
            {
                title: 'Prueba titulo 3',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sem molestie, ullamcorper est quis, luctus ante.Nunc eu consectetur sem, ut elementum sapien.In interdum dolor ipsum, sed ultrices lectus vehicula sollicitudin.Nam at erat sit amet sem gravida vehicula porta non nisi.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Curabitur porttitor efficitur tellus, et malesuada ante.Vivamus a ipsum ac nisl vulputate sollicitudin.Phasellus vitae dolor nec ipsum pretium blandit.Morbi non enim porttitor, dictum lectus ac, auctor ipsum.Praesent lacinia sem non nibh vehicula, eget vulputate erat viverra.'
            },
            {
                title: 'Prueba titulo 4',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sem molestie, ullamcorper est quis, luctus ante.Nunc eu consectetur sem, ut elementum sapien.In interdum dolor ipsum, sed ultrices lectus vehicula sollicitudin.Nam at erat sit amet sem gravida vehicula porta non nisi.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Curabitur porttitor efficitur tellus, et malesuada ante.Vivamus a ipsum ac nisl vulputate sollicitudin.Phasellus vitae dolor nec ipsum pretium blandit.Morbi non enim porttitor, dictum lectus ac, auctor ipsum.Praesent lacinia sem non nibh vehicula, eget vulputate erat viverra.'
            },
            {
                title: 'Prueba titulo 5',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sem molestie, ullamcorper est quis, luctus ante.Nunc eu consectetur sem, ut elementum sapien.In interdum dolor ipsum, sed ultrices lectus vehicula sollicitudin.Nam at erat sit amet sem gravida vehicula porta non nisi.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Curabitur porttitor efficitur tellus, et malesuada ante.Vivamus a ipsum ac nisl vulputate sollicitudin.Phasellus vitae dolor nec ipsum pretium blandit.Morbi non enim porttitor, dictum lectus ac, auctor ipsum.Praesent lacinia sem non nibh vehicula, eget vulputate erat viverra.'
            }
        ];

        posts.forEach(element => {
            var post = `
            <article class="posts">
                <h2>${element.title}</h2>
                <span class="date">${element.date}</span>
                <p>
                    ${element.content}
                </p>
                <a href="#" class="button-more">Leer Mas</a>
            </article>
        `;

            $("#posts").append(post);
        });
    }

    if (window.location.href.indexOf("about") > -1) {
        $("#acordeon").accordion();
    }

    if (window.location.href.indexOf("reloj") > -1) {
        setInterval(function () {
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }

    if (window.location.href.indexOf("contact") > -1) {
        $("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

    // Selector tema
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });
    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });
    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });

    // Scroll arriba web
    $(".subir").click(function (e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // login falso
    $("#login form").submit(function () {
        let formName = $("#form_name").val();
        localStorage.setItem("form_name", formName);
    });

    var formName = localStorage.getItem("form_name");
    if (formName != null && formName != "undefined") {
        var aboutParrafo = $("#about p");
        aboutParrafo.html("<br /><strong>Bienvenido, " + formName + "</strong> ");
        aboutParrafo.append('<a href="#" id="logout">Cerrar Sesión</a>');

        $("#login").hide();
        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }
});