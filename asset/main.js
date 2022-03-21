let grid = document.getElementById(`grid`)

for( let i = 1; i <= 100; i++){
    let box = document.createElement(`div`);

    box.classList.add(`box`);
    grid.appendChild(box);

    document.getElementsByClassName("box").innerHTML += `${i}`

    box.addEventListener(`click`, function(){
        console.log(this);
        this.classList.add(`clicked`);
    });

}
