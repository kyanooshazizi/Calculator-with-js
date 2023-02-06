var btns = document.getElementsByClassName("num-button");
var resultBox = document.getElementById("result-box");
var clearBtn = document.getElementById("clear");
var totalBtn = document.getElementById("total");
var editBtn = document.getElementById("edit");
//
var btnsspreed = [...btns];
//console.log(btnsspreed)

btnsspreed.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (resultBox.innerHTML == "0") {
            resultBox.innerHTML = null;
        }
        resultBox.innerHTML += item.innerHTML;

    })

})
totalBtn.addEventListener("click", () => {
    let result = resultBox.innerHTML;
    resultBox.innerHTML = eval(result);
    // console.log(eval(result))
})
clearBtn.addEventListener("click", () => {
    resultBox.innerHTML = null;
})
editBtn.addEventListener("click", () => {
    let result = resultBox.innerHTML;
    resultBox.innerHTML = result.substring(0, result.length - 1);
})