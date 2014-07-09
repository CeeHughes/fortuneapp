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
    
            var cardDeckCollection = new CardDeckCollection([
                new CardModel({cardNumber: '01', cardImagePath: 'images/01.jpg'}),
                new CardModel({cardNumber: '02', cardImagePath: 'images/02.jpg'}),
                new CardModel({cardNumber: '03', cardImagePath: 'images/03.jpg'}),
                new CardModel({cardNumber: '04', cardImagePath: 'images/04.jpg'}),
                new CardModel({cardNumber: '05', cardImagePath: 'images/05.jpg'}),
                new CardModel({cardNumber: '06', cardImagePath: 'images/06.jpg'}),
                new CardModel({cardNumber: '07', cardImagePath: 'images/07.jpg'}),
                new CardModel({cardNumber: '08', cardImagePath: 'images/08.jpg'}),
                new CardModel({cardNumber: '09', cardImagePath: 'images/09.jpg'}),
                new CardModel({cardNumber: '10', cardImagePath: 'images/10.jpg'}),
                new CardModel({cardNumber: '11', cardImagePath: 'images/11.jpg'}),
                new CardModel({cardNumber: '12', cardImagePath: 'images/12.jpg'}),
                new CardModel({cardNumber: '13', cardImagePath: 'images/13.jpg'}),
                new CardModel({cardNumber: '14', cardImagePath: 'images/14.jpg'}),
                new CardModel({cardNumber: '15', cardImagePath: 'images/15.jpg'}),
                new CardModel({cardNumber: '16', cardImagePath: 'images/16.jpg'}),
                new CardModel({cardNumber: '17', cardImagePath: 'images/17.jpg'}),
                new CardModel({cardNumber: '18', cardImagePath: 'images/18.jpg'}),
                new CardModel({cardNumber: '19', cardImagePath: 'images/19.jpg'}),
                new CardModel({cardNumber: '20', cardImagePath: 'images/20.jpg'}),
                new CardModel({cardNumber: '21', cardImagePath: 'images/21.jpg'}),
                new CardModel({cardNumber: '22', cardImagePath: 'images/22.jpg'}),
                new CardModel({cardNumber: '23', cardImagePath: 'images/23.jpg'}),
                new CardModel({cardNumber: '24', cardImagePath: 'images/24.jpg'}),
                new CardModel({cardNumber: '25', cardImagePath: 'images/25.jpg'}),
            ]);

            var readingModel = new ReadingModel({cardDeck: cardDeckCollection});
            var readingView = new ReadingView({model: readingModel});
            $('#appContent').html(readingView.el);  

            var imageSetCollection = new ImageSetCollection ([
                new ImageModel({
                    imageNumber: 1,
                    imageName: "Cavalier",
                    periodOfInfluence: "immediate to short",
                    symbolFor:"news",
                    generalMeaning: "The CAVALIER was a gallant gentleman most often seen serving the king or helping ladies.",
                    downMeaning: "You will hear pleasant news.",
                    rightMeaning: "Unexpected happy news.",
                    leftMeaning: "News that will bring disappointment.",
                    upMeaning: "Unpleasant news."
                }),
                new ImageModel({
                    imageNumber: 2,
                    imageName: "Clover",
                    periodOfInfluence: "middle",
                    symbolFor:"luck",
                    generalMeaning: "The CLOVER is a plant that enriches the soil; consequently, it has been associated with good pastures and good luck.",
                    downMeaning: "Happiness and fulfilment of desires.",
                    rightMeaning: "Happiness slightly clouded by a misunderstanding.",
                    leftMeaning: "Sorrow for a short duration, which will have a satisfactory outcome.",
                    upMeaning: "Considerable grief or a disappointment."
                }),
                new ImageModel({
                    imageNumber: 3,
                    imageName: "Ship",
                    periodOfInfluence: "middle",
                    symbolFor:"finances, adventure",
                    generalMeaning: "The SHIP is closely related to one's money situation.  It speaks of riches and adventure.",
                    downMeaning: "You will receive an inheritance of a winning.",
                    rightMeaning: "Riches due to trade or labour.",
                    leftMeaning: "Travel.",
                    upMeaning: "Material loss or unsuccessful efforts."
                }),
                new ImageModel({
                    imageNumber: 4,
                    imageName: "House",
                    periodOfInfluence: "immediate to middle",
                    symbolFor:"household or business affairs",
                    generalMeaning: "The HOUSE, like the CLOVER, denotes good luck.",
                    downMeaning: "You will enjoy success in all affairs.",
                    rightMeaning: "The right step will bring you success.",
                    leftMeaning: "Beware of the people surrounding you.",
                    upMeaning: "Failure in some newly planned project."
                }),
                new ImageModel({
                    imageNumber: 5,
                    imageName: "Firewood",
                    periodOfInfluence: "immediate",
                    symbolFor:"physical health",
                    generalMeaning: "FIREWOOD is used to keep us warm and healthy when the weather is cold.  This picture refers to the immediate condition of our physical health.",
                    downMeaning: "A good state of health.",
                    rightMeaning: "Recovery.",
                    leftMeaning: "A minor illness.",
                    upMeaning: "A bruise, cut or illness."
                }),
                new ImageModel({
                    imageNumber: 6,
                    imageName: "Apple",
                    periodOfInfluence: "immediate",
                    symbolFor:"encounter",
                    generalMeaning: "Like the student bringing an apple to the teacher to make him or her happy, the APPLE refers to little things that make us happy or cause us irritation.",
                    downMeaning: "A pleasant happening.",
                    rightMeaning: "A pleasant unexpected occurrence, a present.",
                    leftMeaning: "An unpleasant meeting, encounter.",
                    upMeaning: "An unpleasant occurrence in the near future."
                }),
                new ImageModel({
                    imageNumber: 7,
                    imageName: "Snake",
                    periodOfInfluence: "immediate to middle",
                    symbolFor:"attack by someone",
                    generalMeaning: "The SNAKE is a strongly negative picture that warns you ef evil forces.",
                    downMeaning: "A verbal sting by a malicious person.",
                    rightMeaning: "Betrayal, unfaithfulness.",
                    leftMeaning: "Loss.",
                    upMeaning: "Bitter jealousy."
                }),
                new ImageModel({
                    imageNumber: 8,
                    imageName: "Hearse",
                    periodOfInfluence: "immediate to middle",
                    symbolFor:"danger to physical and emotional state",
                    generalMeaning: "The picture at first appears frightening because it indicates death. However, it does not mean that death is imminent, it only warns us of the possibility.",
                    downMeaning: "Sickness.",
                    rightMeaning: "A loss of condition, although only temporarily.",
                    leftMeaning: "An unquestionable unpleasantness to which you will be subjected or fall prey.",
                    upMeaning: "You will escape danger in time."
                }),
                new ImageModel({
                    imageNumber: 9,
                    imageName: "Bouquet",
                    periodOfInfluence: "immediate to short",
                    symbolFor:"happiness",
                    generalMeaning: "A BOUQUET of flowers is the reward that you get for spending many hours in he garden, planting weeding, fertilising, watering and so forth.  Thus this picture speaks of the final success that you achieve due to your efforts.",
                    downMeaning: "Great success in all affairs.",
                    rightMeaning: "Winnings.",
                    leftMeaning: "Fulfilment of a hope.",
                    upMeaning: "You will find a means of earning money."
                }),
                new ImageModel({
                    imageNumber: 10,
                    imageName: "Scythe",
                    periodOfInfluence: "immediate to life",
                    symbolFor:"fate upsetting your life",
                    generalMeaning: "This picture refers to forces outside your control.  Like the SCYTHE that cuts long grass, a force is working on sabotaging your life.",
                    downMeaning: "Evil fate pursues you.",
                    rightMeaning: "You will hear a threat that will have consequences.",
                    leftMeaning: "You will escape a catastrophe.",
                    upMeaning: "Quarrel."
                }),
                new ImageModel({
                    imageNumber: 11,
                    imageName: "Branches",
                    periodOfInfluence: "immediate to life",
                    symbolFor:"reconciliation or unpleasantness in family relations",
                    generalMeaning: "The BRANCHES refer to our family structure or to people whom we consider our family.",
                    downMeaning: "Making up after a quarrel.",
                    rightMeaning: "Disagreement in the family.",
                    leftMeaning: "A breakup with a close person.",
                    upMeaning: "Tears, an offence."
                }),
                new ImageModel({
                    imageNumber: 12,
                    imageName: "Birds",
                    periodOfInfluence: "immediate",
                    symbolFor:"freedom from responsibilities",
                    generalMeaning: "BIRDS suggest freedom of flight; they have no worries or cares to hold them downMeaning.  A bird is free to soar the heights that we cannot obtain by ourselves.  It can fly and enjoy iMeaningtself.",
                    downMeaning: "Joy, merriment.",
                    rightMeaning: "Unexpected pleasure.",
                    leftMeaning: "You expect someone will not fulfil a promise and you will be right.",
                    upMeaning: "An obstacle with which you will have to fight."
                }),
                new ImageModel({
                    imageNumber: 13,
                    imageName: "Boy",
                    periodOfInfluence: "immediate to short",
                    symbolFor:"adventure",
                    generalMeaning: "The BOY signifies youth, energy and adventure.",
                    downMeaning: "Travel in the near future.",
                    rightMeaning: "You will find yourself in pleasant company and will have a good time.",
                    leftMeaning: "A new friendship is possible.",
                    upMeaning: "An unexpected meeting or a date."
                }),
                new ImageModel({
                    imageNumber: 14,
                    imageName: "Fox",
                    periodOfInfluence: "short",
                    symbolFor:"deceit",
                    generalMeaning: "The FOX is an animal that we associate with cunning and deceit.",
                    downMeaning: "You are being cunningly deceived.",
                    rightMeaning: "A falsity will be revealed.",
                    leftMeaning: "It isn;t wise to trust a new friendship.",
                    upMeaning: "Be careful not to feel unwarranted trust toward some people."
                }),
                new ImageModel({
                    imageNumber: 15,
                    imageName: "Bear",
                    periodOfInfluence: "middle",
                    symbolFor:"work, effort with good results",
                    generalMeaning: "The BEAR is our inborn brute strength and resilience.",
                    downMeaning: "With caution happiness will not elude you.",
                    rightMeaning: "Your efforts will bear fruit",
                    leftMeaning: "You will get what you desire, although not in the immediate future.",
                    upMeaning: "Don't have faith in every piece of advice."
                }),
                new ImageModel({
                    imageNumber: 16,
                    imageName: "Stars",
                    periodOfInfluence: "short to life",
                    symbolFor:"destiny influencing your life",
                    generalMeaning: "This picture is for dreamers, for people who feel they have to accomplish something in life.",
                    downMeaning: "Your guiding star will bring you to your goal.",
                    rightMeaning: "Success in dealings.",
                    leftMeaning: "Temporary blindness will force you to make a series of mistakes.",
                    upMeaning: "A series of unpleasant occurrences."
                }),
                new ImageModel({
                    imageNumber: 17,
                    imageName: "Heron",
                    periodOfInfluence: "middle",
                    symbolFor:"new beginnings, change",
                    generalMeaning: "The stork, a relative of the HERON, is traditionally associated with the arrival of newborn babies. ",
                    downMeaning: "A change in place of residence.",
                    rightMeaning: "Circumstances will force you to enter an undesirable path.",
                    leftMeaning: "A change in relations with friends.",
                    upMeaning: "An addition to the family."
                }),
                new ImageModel({
                    imageNumber: 18,
                    imageName: "Dog",
                    periodOfInfluence: "middle to life",
                    symbolFor:"relationships with friends",
                    generalMeaning: "The DOG is humankind's best friend.  Thus the dog symbolises our best friend.",
                    downMeaning: "You have a faithful and constant friend.",
                    rightMeaning: "The help of friends will support you.",
                    leftMeaning: " A person you consider a friend is untrue to you.",
                    upMeaning: "A change of friends."
                }),
                new ImageModel({
                    imageNumber: 19,
                    imageName: "Castle",
                    periodOfInfluence: "life",
                    symbolFor:"security",
                    generalMeaning: "The CASTLE is material security.",
                    downMeaning: "Fulfilment of hopes, although at the end of your life.",
                    rightMeaning: "A refuge in old age.",
                    leftMeaning: "A long life.",
                    upMeaning: "A chronic illness."
                }),
                new ImageModel({
                    imageNumber: 20,
                    imageName: "Forest",
                    periodOfInfluence: "middle",
                    symbolFor:"people around you",
                    generalMeaning: "A FOREST is made up of many trees.",
                    downMeaning: "Continuous friendship with many worthwhile people.",
                    rightMeaning: "Mixing with purpose in numerous and agreeable society.",
                    leftMeaning: "Contact with suspicious people.",
                    upMeaning: "Beware of the nets that are thrown your way."
                }),
                new ImageModel({
                    imageNumber: 21,
                    imageName: "Mountains",
                    periodOfInfluence: "immediate",
                    symbolFor:"danger",
                    generalMeaning: "This is one of the stronger pictures and should be paid attention to.  It warns of danger that comes from outside, not something that we have created ourselves.",
                    downMeaning: "A treacherous enemy is trying to catch you, be on guard.",
                    rightMeaning: "Nearness to a great unpleasantness that can be avoided.",
                    leftMeaning: "After deliberation you will make the right decision.",
                    upMeaning: "You wil receive help from strong people during a difficult moment."
                }),
                new ImageModel({
                    imageNumber: 22,
                    imageName: "Road",
                    periodOfInfluence: "middle to life",
                    symbolFor:"path in life",
                    generalMeaning: "The ROAD symbolises your path in life.",
                    downMeaning: "Happy path or road.",
                    rightMeaning: "A joyful journey.",
                    leftMeaning: "A lonely and boring road or work.",
                    upMeaning: "Difficulties on the road."
                }),
                new ImageModel({
                    imageNumber: 23,
                    imageName: "Mice",
                    periodOfInfluence: "immediate",
                    symbolFor:"loss or finding of material article",
                    generalMeaning: "MICE are industrious little animals that exist on what they can forage or steal around the house.",
                    downMeaning: "You will find what you have lost.",
                    rightMeaning: "An unexpected discovery.",
                    leftMeaning: "A theft.",
                    upMeaning: "The stolen goods have disappeared forever."
                }),
                new ImageModel({
                    imageNumber: 24,
                    imageName: "Heart",
                    periodOfInfluence: "middle",
                    symbolFor:"love",
                    generalMeaning: "The HEART has been a symbol of love for thousands of years.",
                    downMeaning: "Your happiness is in the answer of the person you love.",
                    rightMeaning: "Love will ignite your heart.",
                    leftMeaning: "Merriment gaiety, will never leave you.",
                    upMeaning: "You are in agreement with close people."
                }),
                new ImageModel({
                    imageNumber: 25,
                    imageName: "Ring",
                    periodOfInfluence: "middle",
                    symbolFor:"relationship between two people",
                    generalMeaning: "The RING is the symbol of the commitment of two people to a lasting friendship.",
                    downMeaning: "A wedding or agreement.",
                    rightMeaning: "Engagement to a rich person.",
                    leftMeaning: "An interruption of relations between lovers or friends.",
                    upMeaning: "A complete breakup between people in love."
                }),
                new ImageModel({
                    imageNumber: 26,
                    imageName: "Book",
                    periodOfInfluence: "short",
                    symbolFor:"secret news",
                    generalMeaning: "The BOOK has always been associated with knowledge.",
                    downMeaning: "Communication of a secret.",
                    rightMeaning: "Something that is of importance to you is being hidden from  you.",
                    leftMeaning: "A secret entrusted to you will be disclosed.",
                    upMeaning: "Your talkativeness will bring you harm."
                }),
                new ImageModel({
                    imageNumber: 27,
                    imageName: "Letter",
                    periodOfInfluence: "immediate to short",
                    symbolFor:"news from a distance",
                    generalMeaning: "Ever since humans learned to write and read, the LETTER has been a means of spreading and delivering news.",
                    downMeaning: "Happiness will come to you from far away.",
                    rightMeaning: "Interesting, unexpected news.",
                    leftMeaning: "You will hear a long-awaited word.",
                    upMeaning: "Sad news."
                }),
                new ImageModel({
                    imageNumber: 28,
                    imageName: "Horseshoe",
                    periodOfInfluence: "middle",
                    symbolFor:"success",
                    generalMeaning: "Like the CLOVER picture, the HORSESHOE picture tells of great luck and success.",
                    downMeaning: "Good fortune awaits you.",
                    rightMeaning: "Everything that you undertake i the near future will be successful.",
                    leftMeaning: "Your desire will be fulfilled.",
                    upMeaning: "You will walk by happiness not noticing it."
                }),
                new ImageModel({
                    imageNumber: 29,
                    imageName: "Money",
                    periodOfInfluence: "middle",
                    symbolFor:"money",
                    generalMeaning: "The MONEY picture is self explanatory - it deals with money.",
                    downMeaning: "You will receive a substantial amount of money.",
                    rightMeaning: "You will find success or profit from an undertaking.",
                    leftMeaning: "An unexpected pleasant windfall.",
                    upMeaning: "A long wait before receiving earned money."
                }),
                new ImageModel({
                    imageNumber: 30,
                    imageName: "Lily",
                    periodOfInfluence: "life",
                    symbolFor:"faithfulness",
                    generalMeaning: "The LILY is another life picture that symbolises beauty, purity, faithfulness and caring.",
                    downMeaning: "A happy life full of meaning.",
                    rightMeaning: "You will know in life faithfulness till death.",
                    leftMeaning: "Unearthly happiness.",
                    upMeaning: "Useless doubts about faithfulness; jealousy."
                }),
                new ImageModel({
                    imageNumber: 31,
                    imageName: "Sun",
                    periodOfInfluence: "immediate to middle",
                    symbolFor:"warmth and strength of character",
                    generalMeaning: "The SUN is at the centre of our solar system.  It radiates the heat and light that make life possible on earth.",
                    downMeaning: "Prosperity, flourishment, life's caress, happiness.",
                    rightMeaning: "Warmth and light are within you alone.",
                    leftMeaning: "A lack of courage hinders you from obtaining your wish.",
                    upMeaning: "Coldness of the heart will freeze you."
                }),
                new ImageModel({
                    imageNumber: 32,
                    imageName: "Moon",
                    periodOfInfluence: "short to middle",
                    symbolFor:"peace",
                    generalMeaning: "The MOON, like the SUN, has been worshipped by many cultures.",
                    downMeaning: "Although your life is uneventful, you have happiness nevertheless.",
                    rightMeaning: "If you are patient, you will obtain that which you desire.",
                    leftMeaning: "Do not become despondent over a temporary setback.",
                    upMeaning: "Delay in action will work against you."
                }),
                new ImageModel({
                    imageNumber: 33,
                    imageName: "Fish",
                    periodOfInfluence: "short to middle",
                    symbolFor:"material and/or spiritual fortune",
                    generalMeaning: "The FISH picture has a dual meaning.  On the first level, it stands for plenty, abundance of food.  On the second level, the fish symbolises spiritual life.",
                    downMeaning: "Fortune, especially on the sea.",
                    rightMeaning: "If you want success, seek it on the water and not on land.",
                    leftMeaning: "Trade will bring profit.",
                    upMeaning: "In a difficult moment you won't sink but will rise to the surface."
                }),
                new ImageModel({
                    imageNumber: 34,
                    imageName: "Owl",
                    periodOfInfluence: "short",
                    symbolFor:"problems with immediate projects",
                    generalMeaning: "In Western society, the OWL has stood for wisdom.",
                    downMeaning: "At the present time you want to act unwisely.",
                    rightMeaning: "Your cunning schemes will be exposed.",
                    leftMeaning: "Your project will be unsuccessful.",
                    upMeaning: "Your plans will not materialise."
                }),
                new ImageModel({
                    imageNumber: 35,
                    imageName: "Anchor",
                    periodOfInfluence: "middle",
                    symbolFor:"stability or hindrance",
                    generalMeaning: "The ANCHOR refers to stability.",
                    downMeaning: "Success in love, you are loved.",
                    rightMeaning: "Fulfillment of hopes; success on the sea.",
                    leftMeaning: "Disillusionment with the ideal; doubts.",
                    upMeaning: "Your mistake will be difficult to correct."
                }),
                new ImageModel({
                    imageNumber: 36,
                    imageName: "Handshake",
                    periodOfInfluence: "middle to life",
                    symbolFor:"state of the union between two people",
                    generalMeaning: "The HANDSHAKE has usually signified an agreement between two people, whether for friendly or buines reasons.",
                    downMeaning: "A strong friendship will be a support to you for your entire life.",
                    rightMeaning: "Love will weld you into one with the person you love.",
                    leftMeaning: "The handshake will weaken if you don't make the effort to strengthen it.",
                    upMeaning: "Your union threatens to come appart."
                }),
                new ImageModel({
                    imageNumber: 37,
                    imageName: "Angel",
                    periodOfInfluence: "middle",
                    symbolFor:"guardian angel helping you",
                    generalMeaning: "The ANGEL is my favourite picture.  When you get it, it is as though your life lights up like a light bulb.",
                    downMeaning: "A bright, wished for happiness awaits you.",
                    rightMeaning: "Reconciliation will give you joy.",
                    leftMeaning: "Love and tenderness will comfort you.",
                    upMeaning: "Heavenly powers will save you from a false step."
                }),
                new ImageModel({
                    imageNumber: 38,
                    imageName: "Lady",
                    periodOfInfluence: "short",
                    symbolFor:"support, help",
                    generalMeaning: "The LADY in the cards symbolises a feminine force that gives you help and insight.",
                    downMeaning: "A soft feminine hand will support you in time.",
                    rightMeaning: "The helping hand is given to you not in friendship but due to hidden love.",
                    leftMeaning: "Don't believe the show of politeness, it is false.",
                    upMeaning: "Having sucked you dry, they will turn away from you."
                }),
                new ImageModel({
                    imageNumber: 39,
                    imageName: "Horse",
                    periodOfInfluence: "immediate",
                    symbolFor:"emotional upheaval",
                    generalMeaning: "The HORSE is a very powerful animal.  From earliest times, humans have admired the intelligent, sensible, noble, proud horse.",
                    downMeaning: "You will experience a vivid or traumatic life event.",
                    rightMeaning: "Outward appearance and beauty will turn your head.",
                    leftMeaning: "Hold the reins firmly; otherwise, you will stumble.",
                    upMeaning: "Your feelings will be trampled upon."
                }),
                new ImageModel({
                    imageNumber: 40,
                    imageName: "Knot",
                    periodOfInfluence: "life",
                    symbolFor:"family ties",
                    generalMeaning: "A KNOT can join two pieces of rope, or it can create a lump or knot in a single piece of rope.",
                    downMeaning: "You have tied strong knots for a lifetime.",
                    rightMeaning: "The chains binding you will always be sweet.",
                    leftMeaning: "You will break the bonds that are entangling you.",
                    upMeaning: "You can achieve freedom only by cutting the Gordian knot."
                }),
                new ImageModel({
                    imageNumber: 41,
                    imageName: "Cat",
                    periodOfInfluence: "short",
                    symbolFor:"hidden danger",
                    generalMeaning: "The CAT was first domesticated in Egypt about 2,600 years ago.  The ancient Egyptians believed cats were sacred.",
                    downMeaning: "Someone will charm you with kindness, which you'll yield to.",
                    rightMeaning: "Beware of claws hidden beneath a friendly exterior.",
                    leftMeaning: "Having received a blow, you will hide your feelings with dignity.",
                    upMeaning: "You will be unexpectedly be badly scratched."
                }),
                new ImageModel({
                    imageNumber: 42,
                    imageName: "Scales",
                    periodOfInfluence: "short to life",
                    symbolFor:"justice, balance",
                    generalMeaning: "The SCALES of balance have been used for thousands of years to weigh goods.",
                    downMeaning: "In your fate, good will outweigh evil.",
                    rightMeaning: "Your happiness depends on the decision you make.",
                    leftMeaning: "If you maintain your balance, you will come out whole from a predicament.",
                    upMeaning: "Your evil action will have consequences."
                }),
                new ImageModel({
                    imageNumber: 43,
                    imageName: "Crayfish",
                    periodOfInfluence: "short to life",
                    symbolFor:"learning to cope with fate",
                    generalMeaning: "The CRAYFISH is a small crustacean that lives under rocks in rivers and ponds.  It is a scavenger, eating anything found in the waters.",
                    downMeaning: "Having made too bold a step, you'll back off.",
                    rightMeaning: "Your pride will be hurt.",
                    leftMeaning: "Delay is sometimes designed by fate.",
                    upMeaning: "Too much haste often defeats this business."
                }),
                new ImageModel({
                    imageNumber: 44,
                    imageName: "Fire",
                    periodOfInfluence: "short to middle",
                    symbolFor:"passion",
                    generalMeaning: "Our first reaction to FIRE is that it is a destructive force.  Once a fire takes hold, it is difficult to stop or contain until it burns itself out.  So it is with people's passion. ",
                    downMeaning: "Fire will envelop your heart.",
                    rightMeaning: "Beware of fire, it will burn your wings.",
                    leftMeaning: "Out of the frying pan into the fire.",
                    upMeaning: "You will be warmed by love during difficult, cold days."
                }),
                new ImageModel({
                    imageNumber: 45,
                    imageName: "Pig",
                    periodOfInfluence: "immediate to middle",
                    symbolFor:"earthly pleasures",
                    generalMeaning: "The PIG is a symbol of prosperity.",
                    downMeaning: "Positively a prosperous and happy year.",
                    rightMeaning: "Purely an earthly happiness.",
                    leftMeaning: "Your greed will be punished.",
                    upMeaning: "Overindulgence in food will make you sick."
                }),
                new ImageModel({
                    imageNumber: 46,
                    imageName: "Bridge",
                    periodOfInfluence: "short to life",
                    symbolFor:"deliberate change",
                    generalMeaning: "This is one of the life pictures.  The BRIDGE symbolises our ability to change our circumstances.",
                    downMeaning: "A radical change in lifestyle awaits you.",
                    rightMeaning: "You will build a bridge that will draw you together with a loved person.",
                    leftMeaning: "No matter where you go the past will pursue you.",
                    upMeaning: "If you want freedom, create a bridge over the chasm."
                }),
                new ImageModel({
                    imageNumber: 47,
                    imageName: "Demons",
                    periodOfInfluence: "short",
                    symbolFor:" subconscious negative thoughts",
                    generalMeaning: "DEMONS are your inner conflicts, the negative thoughts that cause doubt or urge retaliation.",
                    downMeaning: "Do not listen to cunning whisperings wishing to hurt you.",
                    rightMeaning: "Yielding to the temptation of taking vengeance for an offense, you will only increase the unpleasantness.",
                    leftMeaning: "Too much unrestrained merriment occurs before chagrin.",
                    upMeaning: "Your fervour will not lead to any good."
                }),
                new ImageModel({
                    imageNumber: 48,
                    imageName: "Rooster",
                    periodOfInfluence: "immediate",
                    symbolFor:"news that wakes you",
                    generalMeaning: "The ROOSTER crows at the beginning of the day, signalling the coming of light.",
                    downMeaning: "Soon you will hear good news.",
                    rightMeaning: "Heart-to-heart sharing of news.",
                    leftMeaning: "A cheerful passtime will force you to forget grief.",
                    upMeaning: "You will wake up form a sweet sleep to daily activity."
                }),
                new ImageModel({
                    imageNumber: 49,
                    imageName: "Dagger",
                    periodOfInfluence: "immediate",
                    symbolFor:"hidden assault",
                    generalMeaning: "A DAGGER is a short, sharp weapon worn by knights and courtiers of old.",
                    downMeaning: "You will be protected in time.",
                    rightMeaning: "You will escape danger due to the concern of a friend.",
                    leftMeaning: "You will experience a prick to your pride.",
                    upMeaning: "Someone will inflict pain on your heart."
                }),
                new ImageModel({
                    imageNumber: 50,
                    imageName: "Bread",
                    periodOfInfluence: "middle",
                    symbolFor:"happiness",
                    generalMeaning: "BREAD is the staff of life.  The cultivation of grain has led to the formation of a stable society; thus bread implies stability, prosperity, generosity and nourishment.",
                    downMeaning: "You will be made happy with a present.",
                    rightMeaning: "Profit and happiness in the house, success in business affairs.",
                    leftMeaning: "Fulfilment of wishes.",
                    upMeaning: "Having received something yourself, do not forget those surrounding you."
                }),
            ])

            window.imageSetCollection = imageSetCollection

            var imageModel = new ImageModel({imageSet: imageSetCollection});
            var imageView = new ImageView({model: imageModel});
            $('#appDetails').html(imageView.el); 
        
        }
    
        // Initialize the reading
        startReading();    
    });
});

