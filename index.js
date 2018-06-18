document.getElementById("grid").addEventListener('click', move);
var grid = [[], [], []];
var inputs = ["x", "o"];
var currentIndex = 0;
var count = 0;

function move(event){
    var target = event.target;
    if(target.tagName !== "TD"){
        return;
    }
    var rowIndex = event.target.parentElement.rowIndex;
    var cellIndex = event.target.cellIndex;

    if(grid[rowIndex][cellIndex]){
        return;
    } 
    var value = inputs[currentIndex];
    grid[rowIndex][cellIndex] = value;
    currentIndex = 1 - currentIndex;
    target.innerText = value;
    count += 1;
    
    if(count >= 5){
        console.log(grid);
        computeScore(grid);
    }
}

function computeScore(arr){
    // check rows
    if(arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2]){
        document.getElementById("text").innerHTML("winner");
        alert(arr[0][0] + " " + "winner");
    }
    if(arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2]){
        alert(arr[1][0] + " " + "winner");
    }
    if(arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2]){
        alert(arr[2][0] + " " + "winner");
    }
    // let count = 1;
    // let char = arr[0][0];
    // for(let i = 0; i < arr.length; i++){
    //     for(let j = 0; j < arr[i].length; j++){
    //         if(arr[i][j] == arr[i][j+1] && arr[i][j] !== null){
    //             count += 1;
    //             char = arr[i][j];
    //         }
    //     }
    //     if(count == 3){
    //         alert(char + " " + "winner");
    //         return;
    //     }
    // }

    // check columns 
    if(arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]){
        alert(arr[0][0] + " " +"winner");
    }
    if(arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1]){
        alert(arr[0][1] + " " +"winner");
    }
    if(arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]){
        alert(arr[0][2] + " " +"winner");
    }

    // check diagonals
    if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]){
        alert(arr[0][0] + " " +"winner");
    }
    if(arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]){
        alert(arr[0][2] + " " +"winner");
    }
}
// computeScore([["o", null, null], ["x", "o", "o"], ["x", "o", "o"]]);

function reset(){
    window.location.reload();
}