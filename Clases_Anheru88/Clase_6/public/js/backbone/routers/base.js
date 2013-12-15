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

		window.app.state = "root"
	},
	articleSingle : function(id){
		window.app.state = "articleSingle"
		window.app.article = id;
	}
});
