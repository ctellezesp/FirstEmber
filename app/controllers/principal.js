import Ember from 'ember';

export default Ember.Controller.extend({

	actions:{
		crearMovie: function(nameP){
			let movie = {
				name: nameP
			}
			this.store.createRecord("movie", movie);
		},

		borrarMovie: function(movie){
			movie.destroyRecord(movie);
		}
	}
});
