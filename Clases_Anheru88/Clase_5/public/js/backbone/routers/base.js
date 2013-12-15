Puls3.Routers.BaseRouter = Backbone.Router.extend({
	routes: {
		"" :  "root",
		"article/:id" : "articleSingle"
	},
	initialize : function(){
		var self = this;
	},
	root: function(){
		var self = this;
		$('#contenido > div').show();
	},
	articleSingle : function(id){
		$('#contenido > div').hide();
		$('#contenido #' + id).show();
	}
});
