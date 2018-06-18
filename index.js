function getInputs() {
    var inputRow_1 = [];
    inputRow_1.push(document.getElementById("userInput_1").value);
    inputRow_1.push(document.getElementById("userInput_2").value);
    inputRow_1.push(document.getElementById("userInput_3").value);

    var inputRow_2 = [];
    inputRow_2.push(document.getElementById("userInput_4").value);
    inputRow_2.push(document.getElementById("userInput_5").value);
    inputRow_2.push(document.getElementById("userInput_6").value);

    var inputRow_3 = [];
    inputRow_3.push(document.getElementById("userInput_7").value);
    inputRow_3.push(document.getElementById("userInput_8").value);
    inputRow_3.push(document.getElementById("userInput_9").value);

    var inputArr = [inputRow_1, inputRow_2, inputRow_3];
    // console.log(inputArr);

    computeScore(inputArr);
}

function computeScore(arr){
    console.log(arr);
    // check rows
    let count = 1;
    let char = arr[0][0];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] == arr[i][j+1] && arr[i][j] !== null){
                count += 1;
                char = arr[i][j];
            }
        }
        if(count == 3){
            console.log(char + " " + "winner");
            return;
        }
    }

    // check columns 
    if(arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]){
        console.log(arr[0][0] + " " + "winner");
    }
    if(arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1]){
        console.log(arr[0][1] + " " + "winner");
    }
    if(arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]){
        console.log(arr[0][2] + " " + "winner");
    }

    // check diagonals
    if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]){
        console.log(arr[0][0] + " " + "winner");
    }
    if(arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]){
        console.log(arr[0][2] + " " + "winner");
    }
}
// computeScore([["o", null, null], ["x", "o", "o"], ["x", "o", "o"]]);