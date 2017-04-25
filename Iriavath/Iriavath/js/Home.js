$(document).ready(function () {

    $("#insertUser").click(function () {

        var un = $("#txtUsername").val();
        var pass = $("#txtpassword").val();
        var Cpass = $("#Text11").val();
        var Email = $("#txtEmail").val();
        var Pno = $("#txtPhone").val();

        var male = $('#rdbMale').is(':checked');
        var female = $('#rdbFemale').is(':checked');



        if (un == '' || un == null) {
            alert('Please Fill Username');
            return false;
        }

        else if (pass == '' || pass == null) {
            alert('please Enter password');
            return false;
        }
        else if (Cpass == '' || Cpass == null) {
            alert('please Reenter password');
            return false;
        }
        else if (pass != Cpass) {
            alert('password didnot match');
            return false;
        }
        else if (male == false && female == false) {
            alert('please select radio button');
            return false;
        }
        else if (Email == '' || Email == null) {
            alert('please enter valid emailid');
            return false;
        }
        else if (Pno == '' || Pno == null) {
            alert('please enter valid phonenumber');
            return false;
        }


        $.ajax(
     {
         type: "POST", //HTTP POST Method
         url: "Home/RegisterUser", // Controller/View 
         data: { //Passing data
             UserName: $("#txtUsername").val(), //Reading text box values using Jquery 
             Password: $("#txtpassword").val(),
             Address: $("#txtcity").val(),
             Email: $("#txtEmail").val(),
             PhNumber: $("#txtPhone").val()
         },
         success: function (response) {
             if (response != null && response.success) {
                 alert(response.responseText);

             } else {
                 // DoSomethingElse()
                 alert(response.responseText);
             }
         },
         error: function (response) {
             alert("error!");  // 
         }

     });
    });

    $('#btnLogin').click(function () {

        var userName = $("#emaillogin").val();
        var passWord = $("#passwordlogin").val();
        if (userName == '' || passWord == '') {
            alert('Please fill User Name / Password');
        }
        else {
            $.ajax(
            {
                 type: "POST", //HTTP POST Method
                 url: "Home/CheckUser", // Controller/View 
                 data: { //Passing data
                     emaillogin: $("#emaillogin").val(),
                     passwordlogin: $("#passwordlogin").val()
                 },
                 success: function (response) {
                     if (response != null && response.success) {
                         if (response.responseText == '1') {
                             location.href = '/Home/UserWelcome';
                         }
                         else
                             alert('Invalid username/password');

                     } else {
                         // DoSomethingElse()
                         alert(response.responseText);
                         
                     }
                 },
                 error: function (response) {
                     alert("error!");  // 
                 }

            });
        }
    });
});