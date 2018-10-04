$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
   
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(600, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var inputText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + inputText + "</li>")
    }
})

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
})
/*
$("ul").on("mouseenter", "li", function () {
    $(this).children("span").animate({width: "+=50"}, 300);
    $(this).children("span").fadeIn(25);
});
*//*
$("ul").on("mouseleave", "li", function () {
    $(this).children("span").animate({width: "-=50"}, 300);
    $(this).children("span").fadeOut(25);
});
*/