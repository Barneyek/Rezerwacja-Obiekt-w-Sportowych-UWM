Template.register.events({
    'submit form': function (e) {
        e.preventDefault();

        var data = {
            login: $(e.target).find('[name=login]').val(),
            password: $(e.target).find('[name=password]').val(),
            password2: $(e.target).find('[name=password2]').val()
        }
        if (data.password == data.password2) {
            Accounts.createUser({
                username: data.login,
                password: data.password,
                profile: {
                    typ: 'klient'
                }},
		function (err) {
                if (err) {
                    alert("Podany login już istnieje w bazie");
                } else {
                    	alert("Użytkownik "+ data.login+" został zarejestrowany.");
            		Router.go('login');
			}
		
            });

        }
        else{
            alert('Podane hasła się różnią');
        }

    }
});