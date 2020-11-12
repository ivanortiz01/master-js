$(document).ready(function () {
    reloadLinks(); 

    $("#addButton").click(function () {
        var valor = $("#addLink").val();
        $("#menu").apend('<li><a href="' + valor + '"></a></li>');
        $("#addLink").val() = "";
        reloadLinks(); 
    });
});

function reloadLinks() {
    $('a').each(function () {
        var that = $(this);
        var enlace = that.attr('href');
        that.attr("target", "_blank");
        that.text(enlace);
    });
}