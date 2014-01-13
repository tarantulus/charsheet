$(function () {
    $('.editBox').toggle();
    $('.edit').click(function () {
        $(this).siblings('.editBox').toggle();
        $(this).toggleClass("glyphicon-pencil glyphicon-remove")
    });
});
    