var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};
var model = {
    boardsize: 7,
    NumShips: 3,
    ShipSunk:0,
    ShipLenghth: 3,
    ships: [{locations: ["06","16","26"], hits: ["","",""]},
        {locations: ["24","34","44"], hits: ["","",""]},
        {locations: ["10","11","12"], hits: ["","",""]}],
    fire: function (guess) {
        for (var i = 0; i < this.NumShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("ЕБАШЬ!!!!");
                if (this.isSunk(ship)) {
                    view.displayMessage("Пизда кораблику");
                    this.ShipSunk++;
                }
                return true;
            }
        }
            view.displayMiss(guess);
            view.displayMessage("Мимо!!!");
            return false;
    },
    isSunk:function(ship) {
        for (var i = 0; i < this.ShipLenghth; i++) {
            if (ship.hits[i] !==  "hit") {
                return false;
            }
        }
            return true;
        }

}
function ParseGuess(guess) {
    var alphabet = ["a","b","c","d","e","f","g"];
    if (guess === null || guess.length !== 2) {
        alert("Ты чо, не вдупляешь какие координаты вводить?");
    }
    else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Ты еблан??? Введи нормальные координаты!!!")
        } else if (row < 0 || column < 0 || row > model.boardsize || column > model.boardsize) {
            alert("Буквы знаешь? До 6-ти считать умеешь? Чо тупим то????")
        }
        else {
            return row + column;
        }
        return null;
    }

}

var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = ParseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.ShipSunk === model.NumShips) {
                view.displayMessage("Ну все...все...молодец!!! Всех потопил за" + " " + this.guesses + " попыток");
            }
        }
    }
}

controller.processGuess("a0");
controller.processGuess("a6");
controller.processGuess("b6");
controller.processGuess("c6");
controller.processGuess("f3");
controller.processGuess("c4");
controller.processGuess("d4");
controller.processGuess("b4");
controller.processGuess("e4");
controller.processGuess("e3");
controller.processGuess("bo");
controller.processGuess("b0");
controller.processGuess("c0");
controller.processGuess("b1");
controller.processGuess("b2");
