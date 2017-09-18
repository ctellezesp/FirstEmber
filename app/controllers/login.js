import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(), 
	actions: {
		login: function(){
			var correo = this.get('correo');
			var pass = this.get('pass');
			if(this.get('session').enter(correo, pass)){
				return this.transitionToRoute('principal');
			}
			else {
				console.log("error");
			}
		}
	}
});
