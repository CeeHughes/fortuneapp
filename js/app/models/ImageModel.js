define(function(require) {
  
    'use strict';
  
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');


    return Backbone.Model.extend({

        initialize: function(options) {
            // this.set({imagePath: options.imagePath});
            this.set({imageNumber: options.imageNumber});            
            this.set({imageName: options.imageName});
            this.set({periodOfInfluence: options.periodOfInfluence});
            this.set({symbolFor: options.symbolFor});
            this.set({generalMeaning: options.generalMeaning});
            this.set({downMeaning: options.downMeaning});
            this.set({rightMeaning: options.rightMeaning});
            this.set({leftMeaning: options.leftMeaning});
            this.set({upMeaning: options.upMeaning});
        },
       
        destroy: function() {

        }
    
    });

});