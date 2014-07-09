define(function(require) {
  
    'use strict';
  
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var evnt = _.extend({}, Backbone.Events);

    // Model
    var ImageModel = require('ImageModel');
  
    return Backbone.View.extend({

        className: 'image',

        events: {
            'click input[id="submit"]': 'getsMeaning'
        },
    
        initialize: function() {   
            this.render();
        },
    
        render: function() {            
            // Compile the user input template using underscore
            var template = _.template( $("#userInputTemplate").html(), {} );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
        },

        getsMeaning: function(e) {
            e.preventDefault();
            var numberInput = $("#numberInput").val();
            var positionInput = $("#positionInput").val();
            var image = window.imageSetCollection.findWhere({imageNumber: parseInt(numberInput)});
            var imageNumber = image.get("imageNumber")
            var imageName = image.get("imageName");
            var periodOfInfluence = image.get("periodOfInfluence");
            var symbolFor = image.get("symbolFor");
            var generalMeaning = image.get("generalMeaning");
            var imagePositionMeaning = image.get(positionInput);
            alert(imageNumber + ". The " + imageName + " is the symbol for " + symbolFor + ". " + generalMeaning + " In this position it means: " + imagePositionMeaning);
        },
    
        destroy: function() {
            this.model.destroy();
    
            this.remove();
            this.unbind();
        }
    
    });

});