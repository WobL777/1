let table = document.getElementById("00");
console.log(table);
table.onclick = function(event) {
    let target = event.target;
    if (target.id === '00') {
        target.setAttribute("class", "hit");
    }
}

     let actions = [{
         name: "Kiril",
         photo: "kiril.jpg",
         title: "Здарова, уебища!!!",
         description: "В кабинет зашел дружелюбный сотрудник другого отдела и вся команда потеряла 4 часа рабочего времени на беседы с ним",
         negative: true
     },
         {
             name: "Stas",
             photo: "stas.jpg",
             title: "Есть минутка?",
             description: "В кабинет зашел сотрудник смежного отдела по рабочему вопросу и PM и тестировщик 3 часа выясняли с ним кто круче - Какаши или Саске",
             negative: true
         },
     ]

