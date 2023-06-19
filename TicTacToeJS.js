let cells = document.querySelectorAll('#field td');
let input = document.querySelector('#input');
let pause = document.querySelector(".pause");

input.addEventListener("click", function () {
    pause.classList.toggle('pause-dark');
    if (input.value == "Начать игру"){
        input.value = "Нажмите для Паузы";
        input.style.color = "white";
    } else if (input.value == "Нажмите для Паузы"){
        input.value = "Начать игру";
        input.style.color = "black";
    }
});

start(cells);

function start(cells) {
    let nameNextMove = document.querySelector('#nameNextMove');
    let i = 0;
    for (let cell of cells){
        cell.addEventListener("click", function step(){
            this.textContent = ['X', 'O'][i % 2];
			this.removeEventListener('click', step);
            if (isVictory(cells)){
                alert("Победитель - " + this.textContent);
            } else if (i == 8){
                alert("Ничья!");
            }
            i++;
            if (i % 2){
                nameNextMove.textContent = "Следующий ход - O";
            } else {
                nameNextMove.textContent = "Следующий ход - X";
            }
        });
    };
};

function isVictory(cells) {
    let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
    for (let comb of combs){
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != ""
            ){
                return true;
            };
    };
    return false;
};