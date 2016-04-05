$(document).ready(function(){
    var name;
$('#submit').click(function() {
var user = $("#user").val();
var pass = $("#pass").val();
    Parse.User.logIn(user, pass, {
      success: function(user) {
        // Do stuff after successful login.
        alert("success");
        var name = user.get("username");
        $(location).attr('href',"admin.html");
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        alert("fail");
      }
    });

})
});
