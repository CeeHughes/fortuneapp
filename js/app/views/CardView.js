define(function(require) {
  
    'use strict';
  
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var evnt = _.extend({}, Backbone.Events);


    return Backbone.View.extend({

        className: 'card',
    
        events: {
            "click": "rotatesCard"
        },
    
        initialize: function(options) {
            this.render();
        },
    
        render: function() { 
            $(this.el).addClass('rotate-0').css({"background-image": "url(" + this.model.get("cardImagePath") + ")", "background-size": "contain", "background-repeat": "no-repeat"});
        },
    
        rotatesCard: function(e) {
            e.preventDefault();
            var next_class_map = { "0" : "1",  "1" : "2", "2" : "3", "3" : "0"}
            var original_class = $(this.el).attr("class").replace("card ", "")
            $(this.el).removeClass(original_class)
            var new_class_number = original_class.match(/rotate-(\d)/i)[1]
            var next_class = ["rotate-", next_class_map[new_class_number]].join("")
            $(this.el).addClass(next_class)            
        },
    
        destroy: function() {
            this.remove();
            this.unbind();
        }

    });

});
