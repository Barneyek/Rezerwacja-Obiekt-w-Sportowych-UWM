Template.login.events ({
    'click #login-button': function (x, y) {
        x.preventDefault();
        var username = $("#login-username").val(),
            password = $("#login-password").val();
        Meteor.loginWithPassword(username,password,function (błąd) {
	    if (błąd)
                alert("Błąd, użytkownik nie istnieje");
            else {
                alert("Zalogowano pomyślnie");
                Router.go("home");
            }
        });
        return false;
    }
});
       
/* 
        if (Meteor.userId() != 0)
            Router.go('home');
        else
            alert('Najpierw musisz się zalogować.');
    }

}*/
