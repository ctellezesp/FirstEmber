import Ember from 'ember';

export default Ember.Route.extend({

	session: Ember.inject.service(),
	beforeModel(transition){
		if(this.get('session.isLoggedIn')){
			transition.abort();
			this.transitionTo('principal');
		}
	},

	model(){

	},

	aftermodel(){

	},

	setupController(){

	}
});
