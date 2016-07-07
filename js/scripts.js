//business logic

function Person(name, initialDeposit) {
  this.fullName = name;
  this.balance = initialDeposit;
}

Person.prototype.addDeposit = function(deposit){
  return this.balance += deposit;
}

// user interface logic

$(document).ready(function() {

  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var inputtedFullName = ($("input#new-full-name").val());
    var inputtedInitialDeposit = parseInt($("input#new-initial-deposit").val());
    console.log(inputtedFullName + " " + inputtedInitialDeposit);

    var newPerson = new Person(inputtedFullName, inputtedInitialDeposit);
    console.log(newPerson)
    });


});
