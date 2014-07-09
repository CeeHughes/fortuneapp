define(function(require) {
  
    'use strict';
  
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

    // Model
    var ImageModel = require('ImageModel');

    return Backbone.Collection.extend({
  
        model: ImageModel,
    
        initialize: function() {
            console.log(this)    
        },
    
        destroy: function() {

        }
    
    });
  
});