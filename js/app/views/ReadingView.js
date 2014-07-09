define(function(require) {
  
    'use strict';
  
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var evnt = _.extend({}, Backbone.Events);

    // Link to card view
    var CardView = require('CardView');    

  
    return Backbone.View.extend({

        className: 'board',

        // events: {
        //     "click": "dealsCards"
        // },
    
        initialize: function(options) {
            // Shuffle the cards
            this.model.get("cardDeck").shuffleCards();

            // Deal the cards
                // Make the card loading more fancy
            // Find matches i.e. images

            this.render();
        },
    
        render: function() {
            // Iterate through the card model and build cards on the reading view
            var el = $(this.el);
            var cardModels = this.model.get("cardDeck");
    
            cardModels.each(function(cardModel) {
                var cardView = new CardView({model: cardModel});
                // Add a card to the gameboard
                el.append(cardView.el);
            });

            setTimeout(function() {
                el.fadeIn(500);
            }, 2000);
        },

        // dealsCards: function(e) {
        //     e.preventDefault();
        //     set rotation to 0, 1, 2 or 3 on each card in set
        //     need to change the render of each card to be set to hidden apart from 2nd row centre which will be 'backImage'
        //     unhide card images one by one?! 
        // },
    
        destroy: function() {        
            // Destroy the Cards
            var cardModels = this.model.get("cardDeck");
            cardModels.each(function(cardModel) {
                cardModel.destroy();
            });
    
            // Destroy the Reading
            this.model.destroy();
    
            this.remove();
            this.unbind();
        }
    
    });

});
