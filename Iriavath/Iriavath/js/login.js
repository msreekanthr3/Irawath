// Login Form

$(function () {
    debugger;
    var button = $('#loginButton');
    var button2 = $('#RegisterButton');

    var box = $('#loginBox');
    var box2 = $('#loginBox2');

    var form = $('#loginForm');
    var form2 = $('#loginForm2');

    button.removeAttr('href');
    button2.removeAttr('href');

    button.mouseup(function(login) {
        debugger;
        box.toggle();
        button.toggleClass('active');
    });
    button2.mouseup(function (login) {
        
        box2.toggle();
        button2.toggleClass('active');
    });


    form.mouseup(function() { 
        return false;
    });
    form2.mouseup(function () {
        return false;
    });


    $(this).mouseup(function (login) {
        debugger;
        if(!($(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
    $(this).mouseup(function (login) {
        if (!($(login.target).parent('#RegisterButton').length > 0)) {
            button2.removeClass('active');
            box2.hide();
        }
    });
    4
});

