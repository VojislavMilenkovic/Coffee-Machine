
let coffeeMachine = {
    water: 400,
    coffee: 200,
    milk: 100,
    credit: 100,

    waterStatus: function () {
        document.getElementById('water-status').innerText = this.water;
    },

    addWater: function () {
        let waterAmount = prompt('How much water would you like to add?');

        if (waterAmount === null) {
            alert("Please enter the amount of water you would like to add?!");
        }
        if (isNaN(waterAmount) || waterAmount < 0) {
            alert('Please enter only positive numbers.');
            this.addWater();
        }
        if (this.water + Number(waterAmount) > 400) {
            this.water = 400;
        }

        if (this.water + Number(waterAmount) < 400) {
            this.water += Number(waterAmount);

        }


        this.waterStatus();
    },

    emptyWater: function (water) {
        if (this.water < water) {
            document.getElementById('message').innerText = 'Machine is out of water!';
        } else {
            this.water -= water;
            this.waterStatus();
            document.getElementById('message').innerText = 'Pouring water';
        }
    },
    coffeeStatus: function () {
        document.getElementById('coffee-status').innerText = this.coffee;
    },

    addCoffee: function () {

        let coffeeAmount = prompt('How much coffee would you like to add?');

        if (coffeeAmount === null) {
            alert("Please enter the amount of coffee you would like to add?!");

        }
        if (isNaN(coffeeAmount) || coffeeAmount < 0) {
            alert('Please enter only positive numbers');

            this.addCoffee();
        }

        if (this.coffee + Number(coffeeAmount) > 200) {
            this.coffee = 200;
        }

        if (this.coffee + Number(coffeeAmount) < 200) {
            this.coffee += Number(coffeeAmount);
        }

        this.coffeeStatus();

    },
    emptyCoffee: function (coffee) {
        if (this.coffee < coffee) {
            document.getElementById('message').innerText = 'Machine is out of coffee!';
        } else {
            this.coffee -= coffee;
            this.coffeeStatus();
            document.getElementById('message').innerText = 'Pouring coffee';
        }
    },
    milkStatus: function () {
        document.getElementById('milk-status').innerText = this.milk;
    },
    addMilk: function () {
        let milkAmount = prompt('How much milk would you like to add?');
        if (milkAmount === null) {
            alert('Please enter the amount of coffee you would like to add?!');
        }
        if (isNaN(milkAmount) || Number(milkAmount) < 0) {
            alert("Please enter onlin positive numbers!");
            this.addMilk();
        }
        if (this.milk + Number(milkAmount) > 100) {
            this.milk = 100;
        }

        if (this.milk + Number(milkAmount) < 100) {
            this.milk += Number(milkAmount);
        }

        this.milkStatus();

    },
    emptyMilk: function (milk) {
        if (this.milk < milk) {
            document.getElementById('message').innerText = 'Machine is out of milk!';
        } else {
            this.milk -= milk;
            this.milkStatus();
            document.getElementById('message').innerText = 'Pouring milk!';
        }
    },
    creditStatus: function () {
        document.getElementById('credit').innerText = this.credit;
    },
    addCredit: function () {
        let creditAmount = prompt('Please enter the credit!');

        if (creditAmount === null) {
            alert("Please enter the amount of credit you would like to deposit!?");
        }
        if (isNaN(creditAmount) || Number(creditAmount) < 0) {
            alert("Please enter only positive numbers");
        }

        if (this.credit + Number(creditAmount)) {
            this.credit += Number(creditAmount);
        }

        this.creditStatus();



    },

    emptyCredit: function (credit) {
        if (this.credit > credit) {
            this.credit -= credit;
            this.creditStatus();
        } else {
            document.getElementById('message').innerText = 'There is no enough credit for this service!';
        }
    },

    makeShortEspresso: function () {
        if (this.credit < 30) {
            this.emptyCredit(30);
            return;
        }
        if (this.water < 20) {
            this.emptyWater(20);
            return;
        }
        if (this.coffee < 10) {
            this.emptyCoffee(10);
            return;
        } else {
            document.getElementById('message').innerText = 'Preparing Short Espresso!';
            this.emptyCredit(30);
            setTimeout(this.emptyWater.bind(this), 1500, 20);
            setTimeout(this.emptyCoffee.bind(this), 2500, 10);
            setTimeout(function () {
                document.getElementById('message').innerText = 'Short Espresso is finished!';
            }, 3500);
        }

    },

    makeLongEspresso: function () {
        if (this.credit < 40) {
            this.emptyCredit(40);
            return;
        }
        if (this.water < 40) {
            this.emptyWater(40);
            return;
        }
        if (this.coffee < 10) {
            this.emptyCoffee(10);
            return;
        } else {
            document.getElementById('message').innerText = 'Preparing Long Espresso!';
            this.emptyCredit(40);
            setTimeout(this.emptyWater.bind(this), 1700, 40);
            setTimeout(this.emptyCoffee.bind(this), 2700, 10);
            setTimeout(function () {
                document.getElementById('message').innerText = 'Long Espresso is finished!';
            }, 3700);
        }


    },
    makeCappuccino: function () {
        if (this.credit < 50) {
            this.emptyCredit(50);
            return;
        }
        if (this.water < 20) {
            this.emptyWater(20);
            return;
        }
        if (this.coffee < 10) {
            this.emptyCoffee(10);
            return;
        }
        if (this.milk < 10) {
            this.emptyMilk(10);
            return;
        } else {
            document.getElementById('message').innerText = 'Preparing Cappuccino!';
            this.emptyCredit(50);
            setTimeout(this.emptyWater.bind(this), 1500, 20);
            setTimeout(this.emptyCoffee.bind(this), 2500, 10);
            setTimeout(this.emptyMilk.bind(this), 3500, 10);
            setTimeout(function () {
                document.getElementById('message').innerText = 'Cappuccino is finished!';
            }, 4000);
        }





    }



};

coffeeMachine.waterStatus();
coffeeMachine.coffeeStatus();
coffeeMachine.milkStatus();
coffeeMachine.creditStatus();