var paths = {

    // Dependencies
    'jquery': 'lib/jquery.min',
    'underscore': 'lib/underscore.min',
    'backbone': 'lib/backbone.min',
    'imagesloaded': 'lib/imagesloaded.pkgd.min',

    // Views
    'CardView': 'app/views/CardView',
    'ReadingView': 'app/views/ReadingView',
    'ImageView': 'app/views/ImageView',

    // Collections
    'CardDeckCollection': 'app/collections/CardDeckCollection',
    'ImageSetCollection': 'app/collections/ImageSetCollection',

    // Models
    'CardModel': 'app/models/CardModel',
    'ReadingModel': 'app/models/ReadingModel',
    'ImageModel': 'app/models/ImageModel',

};

require.config({

    baseUrl: 'js/',

    paths: paths,

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            deps: ["imagesloaded", "jquery"],
            exports: "Backbone"
        }
    }
});


requirejs(['jquery', 'underscore', 'imagesloaded', 'CardView', 'ReadingView', 'ImageView', 'CardDeckCollection', 'ImageSetCollection', 'ReadingModel', 'CardModel', 'ImageModel'], function ($, _, imagesloaded, CardView, ReadingView, ImageView, CardDeckCollection, ImageSetCollection, ReadingModel, CardModel, ImageModel) {
    
    $(document).ready(function() {

        function startReading() {
    
            var cardDeckCollection = new CardDeckCollection();

            var readingModel = new ReadingModel({cardDeck: cardDeckCollection});
            var readingView = new ReadingView({model: readingModel});
            $('#appContent').html(readingView.el);  

            var imageSetCollection = new ImageSetCollection();

            window.imageSetCollection = imageSetCollection

            var imageModel = new ImageModel({imageSet: imageSetCollection});
            var imageView = new ImageView({model: imageModel});
            $('#appDetails').html(imageView.el); 
        
        }
    
        // Initialize the reading
        startReading();    
    });
});

