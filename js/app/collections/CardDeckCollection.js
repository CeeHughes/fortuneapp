define(function(require) {
  
    'use strict';
  
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
  
    // Models
    var CardModel = require('CardModel');


    return Backbone.Collection.extend({
  
        model: CardModel,

        staticData: [
            {cardNumber: '01', cardImagePath: 'images/01.jpg'},
            {cardNumber: '02', cardImagePath: 'images/02.jpg'},
            {cardNumber: '03', cardImagePath: 'images/03.jpg'},
            {cardNumber: '04', cardImagePath: 'images/04.jpg'},
            {cardNumber: '05', cardImagePath: 'images/05.jpg'},
            {cardNumber: '06', cardImagePath: 'images/06.jpg'},
            {cardNumber: '07', cardImagePath: 'images/07.jpg'},
            {cardNumber: '08', cardImagePath: 'images/08.jpg'},
            {cardNumber: '09', cardImagePath: 'images/09.jpg'},
            {cardNumber: '10', cardImagePath: 'images/10.jpg'},
            {cardNumber: '11', cardImagePath: 'images/11.jpg'},
            {cardNumber: '12', cardImagePath: 'images/12.jpg'},
            {cardNumber: '13', cardImagePath: 'images/13.jpg'},
            {cardNumber: '14', cardImagePath: 'images/14.jpg'},
            {cardNumber: '15', cardImagePath: 'images/15.jpg'},
            {cardNumber: '16', cardImagePath: 'images/16.jpg'},
            {cardNumber: '17', cardImagePath: 'images/17.jpg'},
            {cardNumber: '18', cardImagePath: 'images/18.jpg'},
            {cardNumber: '19', cardImagePath: 'images/19.jpg'},
            {cardNumber: '20', cardImagePath: 'images/20.jpg'},
            {cardNumber: '21', cardImagePath: 'images/21.jpg'},
            {cardNumber: '22', cardImagePath: 'images/22.jpg'},
            {cardNumber: '23', cardImagePath: 'images/23.jpg'},
            {cardNumber: '24', cardImagePath: 'images/24.jpg'},
            {cardNumber: '25', cardImagePath: 'images/25.jpg'}
        ],
    
        initialize: function() {
            this.add(this.staticData);   
        },
    
        shuffleCards: function() {
            this.reset(this.shuffle(), {silent: true});
        },
    
        destroy: function() {

        }
    
    });
  
});
