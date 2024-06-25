import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductviewService {

  constructor() { }
  private data = {
    datafieldAll: [
      {
        "id": 1,
        "flavourName": "Butterscotch 1l & 500ml",
        "description": "Presenting our delicious butterscotch ice cream in a bucket, crafted with love and only the purest & natural ingredients. Who says money can't buy happiness, it can buy you butterscotch ice cream.",
        "imagepath": "butterscotch 500ml.png"
      },
      {
        "id": 2,
        "flavourName": "Banana 1l and 500 ml",
        "description": "Enjoy the goodness of bananas in a bucket. What better way to bring a smile to your face than getting a vesta banana ice cream bucket. Add it on a slice of cake or add it with milkshakes and enjoy the taste of our Banana ice cream.",
        "imagepath": "banana-family-500ml.png"
      },
      {
        "id": 3,
        "flavourName": "Black-Currant 1l and 500 ml",
        "description": "Black currant fruit, with milk and heavy cream, feels like treasure found in one bucket. Get your treasure bucket and fall in love with the black currant.",
        "imagepath": "blackcnt 500ml.png"
      },
      {
        "id": 4,
        "flavourName": "Chocolate 1l and 500 ml",
        "description": "Serve your guests the most delicious and creamy chocolate ice cream. Watch their faces brighten up as they eat each bite of the luscious creamy chocolate ice cream.",
        "imagepath": "choclate 500ml.png"
      },      {
        "id": 5,
        "flavourName": "Vanilla 1l and 500 ml",
        "description": "Vanilla ice cream though simple flavour but the best of all, add a luscious flavour to any of the milkshakes or cold coffees and enjoy it to the fullest. Serve as dessert to your family and friends to end the gatherings on a good note.",
        "imagepath": "vennila 500ml.png"
      },
      {
        "id": 6,
        "flavourName": "Strawberry 1l and 500 ml",
        "description": "Ice cream can never be too much, we now present to you, strawberry ice cream bucket. Enjoy the delicious natural flavour of strawberries with your loved ones.",
        "imagepath": "strawberry 500ml.png"
      },
      {
        "id": 7,
        "flavourName": "Pista 1l and 500 ml",
        "description": "Who doesn't love the pista ice creams! Vesta Pista ice cream are creamy, with lusicous and silky texture that just melts in your mouth. Made with only natural ingredients, you can now enjoy nutty pista ice cream bucket with your loved ones",
        "imagepath": "pista 500ml.png"
      },
      {
        "id": 8,
        "flavourName": "Fig & Honey 1l and 500 ml",
        "description": "Are you a fig and honey lover? We have good news for you. Presenting to you fig and honey ice cream bucket. To enjoy the goodness of figs and honey, and the luscious texture of our ice cream, grab a bucket of the Vesta Fig and Honey ice cream now!",
        "imagepath": "fig and honey 500ml.png"
      },
      {
        "id": 9,
        "flavourName": "Jack Fruit 1l and 500 ml",
        "description": "Now find the goodness and deliciousness of jackfruit in a bucket. Jackfruit mixed with purest ingredients, milk and cream makes it one of the best ice cream flavours.",
        "imagepath": "jac fruit 500ml.png"
      },
      {
        "id": 10,
        "flavourName": "Mango 1l and 500 ml",
        "description": "Miss eating mango? Don't wait for the mango season to arrive, buy a mango ice cream bucket today and enjoy the delicious taste of natural mango flavour with your family.",
        "imagepath": "mango 500ml.png"
      },{
        "id": 11,
        "flavourName": "Spanish Delight 1l and 500 ml",
        "description": "Bring home some delight with our newest flavour Spanish delight ice cream. Creamiest cream, milk and little crumbs of the caramelised cashews all brought together makes the perfect ice cream for your taste buds.",
        "imagepath": "spanish del 500ml.png"
      },
      {
        "id": 12,
        "flavourName": "Conevita Butterscotch",
        "description": "Now enjoy a little crispy and a lot creamy butterscotch ice-creams in cones. Taste your happiness with love",
        "imagepath": "butterscotch-cone.png"
      },
      {
        "id": 13,
        "flavourName": "Conevita Chocolate",
        "description": "Who doesn't love chocolate cone ice cream? Vesta presents to you delicious, creamy chocolate ice cream, made with all natural ingredients, served on top of crispy cones!",
        "imagepath": "conevita chocolate.png"
      },
      {
        "id": 14,
        "flavourName": "Fruitae Mango",
        "description": "Want to enjoy mango without getting your hands messy? Savour the taste of real mango pulp. Buy your fruitae today.",
        "imagepath": "fruitae mango.png"
      },
      {
        "id": 15,
        "flavourName": "Fruitae Pineapple",
        "description": "Enjoy the delicious taste of pineapple ice cream bar, filled with real pineapple pulp, all made with love and natural ingredients!",
        "imagepath": "fruitae pineapple.png"
      },
      {
        "id": 16,
        "flavourName": "Fruitae Strawberry",
        "description": "Eat natural, stay healthy. With this in mind we prepared a fun-filled ice-cream bar, filled with real fruit pulp. Enjoy your fruits as and when you want with our new fruitae.",
        "imagepath": "fruitae strawberry.png"
      },
      {
        "id": 17,
        "flavourName": "Ice Crush Mango",
        "description": "Presenting to you Mango ice crush. Mango, the king of fruits, is crushed into tiny crystals, mixed with natural ingredients and served. Enjoy the mouth-watering ice crush in mango flavor.",
        "imagepath": "ice crush mango.png"
      },  
      {
        "id": 18,
        "flavourName": "Ice Crush Pineapple",
        "description": "Get rid of the heat during those hot summers by eating our pineapple ice crush. Feel fresh and start fresh.",
        "imagepath": "ice crush pinapple.png"
      },{
        "id": 19,
        "flavourName": "Ice Crush Strawberry",
        "description": "Strawberries, brought fresh from the farms, crushed and blended with milk, natural ingredients to bring out the natural flavours. Enjoy the yummy, luscious, the most natural Strawberry ice-cream without any added preservatives.",
        "imagepath": "ice crush strawberry.png"
      },{
        "id": 20,
        "flavourName": "Milk lolly mango",
        "description": "Don't have the time to wait and eat your ice cream. Worry not, buy sip-ups and enjoy delicious mangoes on the go.",
        "imagepath": "milk lolly mango.png"
      },{
        "id": 21,
        "flavourName": "Milk lolly Pista",
        "description": "We all love sip-ups, don't we! Our favorite pista ice cream is now available in the form of sip-ups. Try out the new & interesting style to have pistas.",
        "imagepath": "milk lolly pista.png"
      },{
        "id": 22,
        "flavourName": "Milk lolly Vanilla",
        "description": "Want it all for yourself? We got you! We have made vanilla sip-ups, taste just the way you want. Enjoy sip-ups on the go.",
        "imagepath": "tube-vennila.png"
      },{
        "id": 23,
        "flavourName": "Choco bar",
        "description": "Fresh cocoa beans, bought from the farm, ground into fine powder and mixed in natural ingredients to make the finest chocolate ice cream bar that you can get. Fall in love with the rich taste of our chocolate ice cream.",
        "imagepath": "choco bar.png"
      },{
        "id": 24,
        "flavourName": "Mango bar",
        "description": "Indulge in the luscious creamy mango ice cream melting in your mouth and turn the gloomy day into a fun exciting one.",
        "imagepath": "mango bar.png"
      },{
        "id": 25,
        "flavourName": "Strawberry bar",
        "description": "Who doesn't like an ice cream bar? Refresh your childhood memories by eating our delicious strawberry ice cream bar made from all natural ingredients, no added preservatives and no artificial flavours. Taste your childhood again.",
        "imagepath": "strawberry bar.png"
      },{
        "id": 26,
        "flavourName": "White Chocolate bar",
        "description": "Made from the freshest ingredients with no added artificial flavours we bring to you a silky and creamiest white chocolate ice cream bar which is nothing less than a piece of heaven in every bite.",
        "imagepath": "white choclate bar.png"
      },{
        "id": 27,
        "flavourName": "Sundae Strawberry",
        "description": "Strawberries, brought fresh from the farms, crushed and blended with milk, natural ingredients to bring out the natural flavours. Enjoy the yummy, luscious, the most natural Strawberry ice-cream without any added preservatives.",
        "imagepath": "sundae strawberry.png"
      },{
        "id": 28,
        "flavourName": "Sundae Chocolate",
        "description": "Whether you want a personal pack we have you covered. Get your Chocolate Sundae with added natural flavoured syrup to add an interesting taste and turn that boring day into a fun one.",
        "imagepath": "sundae chocolate.png"
      },{
        "id": 29,
        "flavourName": "Sundae Pista",
        "description": "Pista flavoured ice cream along with syrup that just doesn't taste sweet but also heavenly, you cannot wait to taste it. Get your sundae today.",
        "imagepath": "sundae pista.png"
      },{
        "id": 30,
        "flavourName": "Fundae Black Currant",
        "description": "Imagine dry fruits, and the creamy black currant ice cream topped with natural flavoured syrup! Every bite of it is like a burst of happiness in the mouth.",
        "imagepath": "fundae black crt.png"
      },{
        "id": 31,
        "flavourName": "Fundae Chocolate",
        "description": "If you have not seen what fun in a bucket is, then you should try our chocolate fundae. Ice cream made with natural ingredients, with added dry fruits and syrup, makes the ice cream amazingly lick-a-licsious.",
        "imagepath": "fundae-chocolate.png"
      },{
        "id": 32,
        "flavourName": "Fundae Fig & Honey",
        "description": "Why settle when you can have it all? We present to you, our Fig and Honey ice cream, topped with nuts, and the goodness of fruit and syrup all in one. Enjoy the Vesta fig and honey ice cream in a new way.",
        "imagepath": "fundae fig and honey.png"
      },{
        "id": 33,
        "flavourName": "Ball",
        "description": "Make ice cream fun for your kids, try out our new vanilla ice cream ball. The deliciousness of vanilla ice cream is now available in a fun packaging. Bring home the joy!",
        "imagepath": "ball.png"
      },{
        "id": 34,
        "flavourName": "Paper Cup",
        "description": "Relive your childhood memories with your child, go back into the days, share your stories with your kid while enjoying our naturally flavoured vanilla ice cream paper cup.",
        "imagepath": "paper cup.png"
      },{
        "id": 35,
        "flavourName": "Bulk Pack 4l",
        "description": "Imagine hundreds of all in one big bulk pack, impossible? Not for us, our bulk packs are the most tasty and naturally flavoured ice creams that you can taste with no added synthetic colours and no added preservatives.",
        "imagepath": "bulk pack 4l.png"
      }
      
    ],
    datafield2: [
      {
        "id": 1,
        "flavourName": "Butterscotch 1l & 500ml",
        "description": "Presenting our delicious butterscotch ice cream in a bucket, crafted with love and only the purest & natural ingredients. Who says money can't buy happiness, it can buy you butterscotch ice cream.",
        "imagepath": "butterscotch 500ml.png"
      },
      {
        "id": 2,
        "flavourName": "Banana 1l and 500 ml",
        "description": "Enjoy the goodness of bananas in a bucket. What better way to bring a smile to your face than getting a vesta banana ice cream bucket. Add it on a slice of cake or add it with milkshakes and enjoy the taste of our Banana ice cream.",
        "imagepath": "banana-family-500ml.png"
      },
      {
        "id": 3,
        "flavourName": "Black-Currant 1l and 500 ml",
        "description": "Black currant fruit, with milk and heavy cream, feels like treasure found in one bucket. Get your treasure bucket and fall in love with the black currant.",
        "imagepath": "blackcnt 500ml.png"
      },
      {
        "id": 4,
        "flavourName": "Chocolate 1l and 500 ml",
        "description": "Serve your guests the most delicious and creamy chocolate ice cream. Watch their faces brighten up as they eat each bite of the luscious creamy chocolate ice cream.",
        "imagepath": "choclate 500ml.png"
      },      {
        "id": 5,
        "flavourName": "Vanilla 1l and 500 ml",
        "description": "Vanilla ice cream though simple flavour but the best of all, add a luscious flavour to any of the milkshakes or cold coffees and enjoy it to the fullest. Serve as dessert to your family and friends to end the gatherings on a good note.",
        "imagepath": "vennila 500ml.png"
      },
      {
        "id": 6,
        "flavourName": "Strawberry 1l and 500 ml",
        "description": "Ice cream can never be too much, we now present to you, strawberry ice cream bucket. Enjoy the delicious natural flavour of strawberries with your loved ones.",
        "imagepath": "strawberry 500ml.png"
      },
      {
        "id": 7,
        "flavourName": "Pista 1l and 500 ml",
        "description": "Who doesn't love the pista ice creams! Vesta Pista ice cream are creamy, with lusicous and silky texture that just melts in your mouth. Made with only natural ingredients, you can now enjoy nutty pista ice cream bucket with your loved ones",
        "imagepath": "pista 500ml.png"
      },
      {
        "id": 8,
        "flavourName": "Fig & Honey 1l and 500 ml",
        "description": "Are you a fig and honey lover? We have good news for you. Presenting to you fig and honey ice cream bucket. To enjoy the goodness of figs and honey, and the luscious texture of our ice cream, grab a bucket of the Vesta Fig and Honey ice cream now!",
        "imagepath": "fig and honey 500ml.png"
      },
      {
        "id": 9,
        "flavourName": "Jack Fruit 1l and 500 ml",
        "description": "Now find the goodness and deliciousness of jackfruit in a bucket. Jackfruit mixed with purest ingredients, milk and cream makes it one of the best ice cream flavours.",
        "imagepath": "jac fruit 500ml.png"
      },
      {
        "id": 10,
        "flavourName": "Mango 1l and 500 ml",
        "description": "Miss eating mango? Don't wait for the mango season to arrive, buy a mango ice cream bucket today and enjoy the delicious taste of natural mango flavour with your family.",
        "imagepath": "mango 500ml.png"
      }
    ],
    datafield3: [
      {
        "id": 12,
        "flavourName": "Conevita Butterscotch",
        "description": "Now enjoy a little crispy and a lot creamy butterscotch ice-creams in cones. Taste your happiness with love",
        "imagepath": "butterscotch-cone.png"
      },
      {
        "id": 13,
        "flavourName": "Conevita Chocolate",
        "description": "Who doesn't love chocolate cone ice cream? Vesta presents to you delicious, creamy chocolate ice cream, made with all natural ingredients, served on top of crispy cones!",
        "imagepath": "conevita chocolate.png"
      },
    ],
    datafield4:[
      {
        "id": 14,
        "flavourName": "Fruitae Mango",
        "description": "Want to enjoy mango without getting your hands messy? Savour the taste of real mango pulp. Buy your fruitae today.",
        "imagepath": "fruitae mango.png"
      },
      {
        "id": 15,
        "flavourName": "Fruitae Pineapple",
        "description": "Enjoy the delicious taste of pineapple ice cream bar, filled with real pineapple pulp, all made with love and natural ingredients!",
        "imagepath": "fruitae pineapple.png"
      },
      {
        "id": 16,
        "flavourName": "Fruitae Strawberry",
        "description": "Eat natural, stay healthy. With this in mind we prepared a fun-filled ice-cream bar, filled with real fruit pulp. Enjoy your fruits as and when you want with our new fruitae.",
        "imagepath": "fruitae strawberry.png"
      },
    ],
    datafield5:[
      {
        "id": 17,
        "flavourName": "Ice Crush Mango",
        "description": "Presenting to you Mango ice crush. Mango, the king of fruits, is crushed into tiny crystals, mixed with natural ingredients and served. Enjoy the mouth-watering ice crush in mango flavor.",
        "imagepath": "ice crush mango.png"
      },  
      {
        "id": 18,
        "flavourName": "Ice Crush Pineapple",
        "description": "Get rid of the heat during those hot summers by eating our pineapple ice crush. Feel fresh and start fresh.",
        "imagepath": "ice crush pinapple.png"
      },{
        "id": 19,
        "flavourName": "Ice Crush Strawberry",
        "description": "Strawberries, brought fresh from the farms, crushed and blended with milk, natural ingredients to bring out the natural flavours. Enjoy the yummy, luscious, the most natural Strawberry ice-cream without any added preservatives.",
        "imagepath": "ice crush strawberry.png"
      },
    ],
    datafield6:[
      {
        "id": 20,
        "flavourName": "Milk lolly mango",
        "description": "Don't have the time to wait and eat your ice cream. Worry not, buy sip-ups and enjoy delicious mangoes on the go.",
        "imagepath": "milk lolly mango.png"
      },{
        "id": 21,
        "flavourName": "Milk lolly Pista",
        "description": "We all love sip-ups, don't we! Our favorite pista ice cream is now available in the form of sip-ups. Try out the new & interesting style to have pistas.",
        "imagepath": "milk lolly pista.png"
      },{
        "id": 22,
        "flavourName": "Milk lolly Vanilla",
        "description": "Want it all for yourself? We got you! We have made vanilla sip-ups, taste just the way you want. Enjoy sip-ups on the go.",
        "imagepath": "tube-vennila.png"
      }
    ],
    datafield7:[
      {
        "id": 23,
        "flavourName": "Choco bar",
        "description": "Fresh cocoa beans, bought from the farm, ground into fine powder and mixed in natural ingredients to make the finest chocolate ice cream bar that you can get. Fall in love with the rich taste of our chocolate ice cream.",
        "imagepath": "choco bar.png"
      },{
        "id": 24,
        "flavourName": "Mango bar",
        "description": "Indulge in the luscious creamy mango ice cream melting in your mouth and turn the gloomy day into a fun exciting one.",
        "imagepath": "mango bar.png"
      },{
        "id": 25,
        "flavourName": "Strawberry bar",
        "description": "Who doesn't like an ice cream bar? Refresh your childhood memories by eating our delicious strawberry ice cream bar made from all natural ingredients, no added preservatives and no artificial flavours. Taste your childhood again.",
        "imagepath": "strawberry bar.png"
      },{
        "id": 26,
        "flavourName": "White Chocolate bar",
        "description": "Made from the freshest ingredients with no added artificial flavours we bring to you a silky and creamiest white chocolate ice cream bar which is nothing less than a piece of heaven in every bite.",
        "imagepath": "white choclate bar.png"
      }
    ],
    datafield8:[
      {
        "id": 27,
        "flavourName": "Sundae Strawberry",
        "description": "Strawberries, brought fresh from the farms, crushed and blended with milk, natural ingredients to bring out the natural flavours. Enjoy the yummy, luscious, the most natural Strawberry ice-cream without any added preservatives.",
        "imagepath": "sundae strawberry.png"
      },{
        "id": 28,
        "flavourName": "Sundae Chocolate",
        "description": "Whether you want a personal pack we have you covered. Get your Chocolate Sundae with added natural flavoured syrup to add an interesting taste and turn that boring day into a fun one.",
        "imagepath": "sundae chocolate.png"
      },{
        "id": 29,
        "flavourName": "Sundae Pista",
        "description": "Pista flavoured ice cream along with syrup that just doesn't taste sweet but also heavenly, you cannot wait to taste it. Get your sundae today.",
        "imagepath": "sundae pista.png"
      }
    ],
    datafield9:[
      {
        "id": 30,
        "flavourName": "Fundae Black Currant",
        "description": "Imagine dry fruits, and the creamy black currant ice cream topped with natural flavoured syrup! Every bite of it is like a burst of happiness in the mouth.",
        "imagepath": "fundae black crt.png"
      },{
        "id": 31,
        "flavourName": "Fundae Chocolate",
        "description": "If you have not seen what fun in a bucket is, then you should try our chocolate fundae. Ice cream made with natural ingredients, with added dry fruits and syrup, makes the ice cream amazingly lick-a-licsious.",
        "imagepath": "fundae-chocolate.png"
      },{
        "id": 32,
        "flavourName": "Fundae Fig & Honey",
        "description": "Why settle when you can have it all? We present to you, our Fig and Honey ice cream, topped with nuts, and the goodness of fruit and syrup all in one. Enjoy the Vesta fig and honey ice cream in a new way.",
        "imagepath": "fundae fig and honey.png"
      }
    ],
    datafield10:[
      {
        "id": 33,
        "flavourName": "Ball",
        "description": "Make ice cream fun for your kids, try out our new vanilla ice cream ball. The deliciousness of vanilla ice cream is now available in a fun packaging. Bring home the joy!",
        "imagepath": "ball.png"
      }
    ],
    datafield11:[
      {
        "id": 34,
        "flavourName": "Paper Cup",
        "description": "Relive your childhood memories with your child, go back into the days, share your stories with your kid while enjoying our naturally flavoured vanilla ice cream paper cup.",
        "imagepath": "paper cup.png"
      }
    ],
    datafield12:[
      {
        "id": 35,
        "flavourName": "Bulk Pack 4l",
        "description": "Imagine hundreds of all in one big bulk pack, impossible? Not for us, our bulk packs are the most tasty and naturally flavoured ice creams that you can taste with no added synthetic colours and no added preservatives.",
        "imagepath": "bulk pack 4l.png"
      }
    ]
  };
  getData() {
    return this.data;
  }
}
