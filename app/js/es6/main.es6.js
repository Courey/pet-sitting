/* global Pet*/
/* global pets*/

(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(addPet);
    $('#pets').on('click', '.eat', eat);
    $('#pets').on('click', '.play', play);
    $('#pets').on('click', '.sleep', sleep);
  }

  function eat(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.eat();
    pet.update();
  }

  function sleep(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.sleep();
    pet.update();
  }

  function play(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.play();
    pet.update();
  }

  function addPet(){
    let gender = $('#gender').val();
    let speciesImg = $('#species').val();
    let species = $('#species :selected').text();
    let name = $('#name').val() || undefined;
    let age = $('#age').val();

    let pet = new Pet(age, species, speciesImg, gender, name);
    pets.push(pet);
    pet.render();
    $('#name').val('');
    $('#age').val('');
  }



})();
