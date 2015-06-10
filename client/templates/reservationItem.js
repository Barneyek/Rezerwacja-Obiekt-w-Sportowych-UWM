Template.reservationItem.events({

    'click #remove': function () {
        var id = this._id;
	var data = Rezerwacje.remove({
            _id: id

	
        });
alert("Rezerwacja została anulowana")
    }

});