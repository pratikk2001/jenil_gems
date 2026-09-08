(function () {
  'use strict';
  var replacements = [
    ['Vegetables', 'Gemstones'], ['Fresh Fruit', 'Rudraksha'], ['Meat & Fish', 'Healing Crystals'], ['Sea Foods', 'Crystal Jewellery'], ['Bakery & Dairy', 'Spiritual Accessories'], ['Beverages', 'Vastu & Feng Shui'], ['Baby Care', 'Yantras'], ['Snacks Items', 'Puja Essentials'], ['Snacks', 'Puja Essentials'],
    ['Buy Vegetables', 'Explore Gemstones'], ['Buy the Fruit', 'Discover Rudraksha'], ['Buy the Meat', 'Shop Healing Crystals'], ['Buy Sea Foods', 'Explore Crystal Jewellery'], ['Buy the Chocolate', 'Discover Healing Crystals'], ['Buy the Cold Drink', 'Shop Crystal Energy'], ['Crackers Snack', 'Sacred Puja Essentials'],
    ['Garden fresh cherry tomato', 'Natural Yellow Sapphire (Pukhraj)'], ['Garden Fresh Cobbage', 'Natural Emerald (Panna)'], ['Red cobbage organic', 'Natural Ruby (Manik)'], ['Meridian Foods Crunchy Peanut Butter', 'Natural Red Coral (Moonga)'], ['Dolcela Chocolate Cream for Cakes', '5 Mukhi Nepal Rudraksha'], ['Cold Drink Recipe Formulation Best', 'Clear Quartz Crystal Point'], ['Snickers Chocolate 1Pcs - 50g', 'Amethyst Healing Crystal'], ['Poca Party Prawn Crackers Snack 33G', 'Rose Quartz Heart Crystal'],
    ['Eggplant', 'Ruby (Manik)'], ['Beetroot', 'Emerald (Panna)'], ['Carrot', 'Yellow Sapphire (Pukhraj)'], ['Spinach', 'Blue Sapphire (Neelam)'], ['Broccoli', 'Pearl (Moti)'], ['Apple', '1 Mukhi Rudraksha'], ['Banana', '5 Mukhi Rudraksha'], ['Grapes', '7 Mukhi Rudraksha'], ['Apricot', 'Gauri Shankar Rudraksha'], ['Orange', 'Rudraksha Mala'], ['Beef', 'Amethyst'], ['Mutton', 'Clear Quartz'], ['Lamb', 'Rose Quartz'], ['Catfish', 'Black Tourmaline'], ['Salmon', 'Citrine'], ['Cod', 'Lapis Lazuli'], ['Lobster', 'Selenite'], ['Shrimp', 'Tiger Eye'], ['Crab', 'Moonstone'], ['Octopus', 'Pyrite'],
    ['Butter', 'Natural Gemstone'], ['Chocolate', 'Healing Crystal'], ['Cake', 'Rudraksha'], ['Cold Drink', 'Crystal'], ['From Farmers Field to Your Kitchen', 'From the Earth to Your Inner Journey'], ['From Farmers Field', 'From the Earth'], ['to Your Kitchen', 'to Your Inner Journey'], ['Popular Categories', 'Explore Sacred Collections'], ['Today’s popular picks', 'Today’s cherished treasures'], ['Only for this month', 'Featured collection'], ['Shop now', 'Explore now'], ['In Stock', 'Available now'], ['Stock Out', 'Currently unavailable'],
    ['$00.99', 'Rs. 1,299'], ['$00.69', 'Rs. 699'], ['$00.79', 'Rs. 899'], ['$01.99', 'Rs. 1,499'], ['$02.99', 'Rs. 999'], ['$03.99', 'Rs. 799'], ['$12.99', 'Rs. 1,199'], ['$16.99', 'Rs. 2,999'], ['$19.99', 'Rs. 3,999'], ['$73.99', 'Rs. 799'], ['$79.99', 'Rs. 2,499'], ['$83.99', 'Rs. 999']
  ];
  function replaceText(text) { replacements.forEach(function (item) { text = text.split(item[0]).join(item[1]); }); return text; }
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: function (node) { var tag = node.parentNode.tagName; return /^(SCRIPT|STYLE|NOSCRIPT)$/i.test(tag) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; } });
  var node, nodes = [];
  while ((node = walker.nextNode())) nodes.push(node);
  nodes.forEach(function (item) { item.nodeValue = replaceText(item.nodeValue); });
  document.title = 'Jenil Gems | Gemstones, Rudraksha & Healing Crystals';
}());
