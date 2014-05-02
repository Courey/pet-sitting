var Pet = function Pet(age, species, speciesImg, gender) {
  "use strict";
  var name = arguments[4] !== (void 0) ? arguments[4] : 'pet';
  this.age = age * 1;
  this.speciesImg = ("../media/" + speciesImg);
  this.species = species;
  this.gender = gender;
  this.name = name;
  this.health = _.random(10, 100);
  this.full = _.random(5, 50);
  this.mood = _.random(1, 10);
};
($traceurRuntime.createClass)(Pet, {
  eat: function() {
    "use strict";
    this.full += _.random(1, 3);
    if (this.full >= 50) {
      this.full = 50;
    }
  },
  play: function() {
    "use strict";
    this.full -= _.random(0, 3);
    this.mood += 1;
    this.health -= _.random(0, 3);
    if (this.mood >= 10) {
      this.mood = 10;
    }
    if (this.full <= 0 || this.health <= 0) {
      $((".pet[data-name =" + this.name + "]")).find('.image').find('img').attr('src', './media/dead.png');
      $('#sound')[0].play();
    }
  },
  sleep: function() {
    "use strict";
    this.mood -= 1;
    this.health += _.random(1, 3);
    if (this.health >= 100) {
      this.health = 100;
    }
  },
  update: function() {
    "use strict";
    $((".pet[data-name =" + this.name + "]")).find('.info').find('.status').find('.full').find('.fullLow').css('width', (this.full * 2 + "%"));
    $((".pet[data-name =" + this.name + "]")).find('.info').find('.status').find('.health').find('.healthLow').css('width', (this.health + "%"));
    $((".pet[data-name =" + this.name + "]")).find('.info').find('.status').find('.mood').find('.moodLow').css('width', (this.mood * 10 + "%"));
  },
  render: function() {
    "use strict";
    $('#pets').append(("<div data-name=" + this.name + " class=pet>\n                          <div class=image>\n                            <img src=" + this.speciesImg + "></img>\n                          </div>\n                          <div class=info>\n                            <div class=name>name: " + this.name + "</div>\n                            <div class=species>species: " + this.species + "</div>\n                            <div class=age>age: " + this.age + "</div>\n                            <div class=gender>gender: " + this.gender + "</div>\n                            <div class=status>\n                              <div class=health>\n                                <div class=healthLow style = width:" + this.health + "%></div>\n                              </div>\n                              <span>health</span><div class=sleep></div>\n\n                              <div class=mood>\n                                <div class=moodLow style =width:" + this.mood * 10 + "%></div>\n                              </div>\n                              <span>mood</span><div class=play></div>\n\n                              <div class=full>\n                                <div class=fullLow style = width:" + this.full * 2 + "%></div>\n                              </div>\n                              <span>hunger</span><div class=eat></div>\n                            </div>\n                          </div>\n                       </div>"));
  }
}, {find: function(name) {
    "use strict";
    return _(pets).find((function(p) {
      return p.name === name;
    }));
  }});

//# sourceMappingURL=pet.map
