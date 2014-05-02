(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#button').click(addPet);
    $('#pets').on('click', '.eat', eat);
    $('#pets').on('click', '.play', play);
    $('#pets').on('click', '.sleep', sleep);
  }
  function eat() {
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.eat();
    pet.update();
  }
  function sleep() {
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.sleep();
    pet.update();
  }
  function play() {
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.play();
    pet.update();
  }
  function addPet() {
    var gender = $('#gender').val();
    var speciesImg = $('#species').val();
    var species = $('#species :selected').text();
    var name = $('#name').val() || undefined;
    var age = $('#age').val();
    var pet = new Pet(age, species, speciesImg, gender, name);
    pets.push(pet);
    pet.render();
    $('#name').val('');
    $('#age').val('');
  }
})();

//# sourceMappingURL=main.map
