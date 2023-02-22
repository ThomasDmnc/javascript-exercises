const cont = document.querySelector('.container');
cont.classList.add('flex-grid');
cont.style.display = "flex";
cont.style.columns = 16;


var colNb = document.getElementById("range-slider").value;


for (let i = 0; i <= colNb; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    cont.appendChild(row);

    for (let j = 0; j <= colNb; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = "20px";
        square.style.height = "20px";
        square.style.border = "solid";
        row.appendChild(square);
    };
};


let paint = () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function(event) {
            console.log("pouet")
            event.target.style.backgroundColor = "black";
        });
    });
};

paint();