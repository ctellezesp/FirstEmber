import Ember from 'ember';

export default Ember.Service.extend({
	isLoggedIn: false, 
	enter: function(correo,pass){
		if (correo=="ctellez@talentics.com.mx" && pass=="123"){
			this.set('isLoggedIn', true);
		}
		return this.get('isLoggedIn');
	}
});
