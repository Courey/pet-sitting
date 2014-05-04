/* exported Pet */
/* global _ */
/* global pets */

class Pet{
  constructor(age, species, speciesImg, gender, name='pet'){
    this.age = age * 1;
    this.speciesImg = `../media/${speciesImg}`;
    this.species = species;
    this.gender = gender;
    this.name = name;

    this.health = _.random(10, 100);
    this.full = _.random(5, 50);
    this.mood = _.random(1, 10);
  }

  static find(name){
    return _(pets).find(p=>p.name === name);
  }


  eat(){
    this.full += _.random(1, 3);
    if(this.full >= 50){this.full = 50;}
  }

  play(){
    this.full -= _.random(0,3);
    this.mood += 1;
    this.health -= _.random(0,3);
    if(this.mood >= 10){this.mood = 10;}
    if(this.full <= 0 || this.health <= 0){
      $(`.pet[data-name =${this.name}]`).find('.image').find('img').attr('src', './media/dead.png');
      $('#sound')[0].play();
    }
  }

  sleep(){
    this.mood -= 1;
    this.health += _.random(1, 3);
    if(this.health >= 100){this.health = 100;}
  }
  update(){
    $(`.pet[data-name =${this.name}]`).find('.info').find('.status').find('.full').find('.fullLow').css('width', `${this.full*2}%`);
    $(`.pet[data-name =${this.name}]`).find('.info').find('.status').find('.health').find('.healthLow').css('width', `${this.health}%`);
    $(`.pet[data-name =${this.name}]`).find('.info').find('.status').find('.mood').find('.moodLow').css('width', `${this.mood*10}%`);
  }


  render(){
    $('#pets').append(`<div data-name=${this.name} class=pet>
                          <div class=image>
                            <img src=${this.speciesImg}></img>
                          </div>
                          <div class=info>
                            <div class=name>name: ${this.name}</div>
                            <div class=species>species: ${this.species}</div>
                            <div class=age>age: ${this.age}</div>
                            <div class=gender>gender: ${this.gender}</div>
                            <div class=status>
                              <div class=health>
                                <div class=healthLow style = width:${this.health}%></div>
                              </div>
                              <span>health</span><div class=sleep></div>

                              <div class=mood>
                                <div class=moodLow style =width:${this.mood*10}%></div>
                              </div>
                              <span>mood</span><div class=play></div>

                              <div class=full>
                                <div class=fullLow style = width:${this.full*2}%></div>
                              </div>
                              <span>hunger</span><div class=eat></div>
                            </div>
                          </div>
                       </div>`);
  }

}
