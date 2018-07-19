let Board = (size) => {
    let board = document.getElementById("board");
    for (let row = 0; row <size; row++) {
        let Row = document.createElement('div');
        Row.id = row;
        Row.className = "row";
        board.appendChild(Row);
        for (let column = 1; column <= size; column++) {
            let Element = document.createElement('div');
            Element.id = row * 10 + column;
            //bindEventListener(Element);
            if ((row + column) % 2 == 0) {
                Element.className = "grey";
            } else {
                Element.className = "white";
            }
            let cell = document.getElementById(row);
            cell.appendChild(Element);
        }

    }

}

window.onload=()=>{
    Board(8);
}


