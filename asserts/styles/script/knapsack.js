let addButton = document.querySelector('.bt1')
let maxweight = document.querySelector('.weight')
let holder = document.getElementById('knapsack-bag')
let sum = document.getElementById('total-sum')
let selectOptions = document.getElementsByTagName("select")
let doneButton = document.querySelector(".bt2")
let selected = []
let count;
let sumOfWeights = 0
let sumOfValue = 0
let itemBox = [
    { name: "cement", weight: 50, value: 35 },
    { name: "stones", weight: 60, value: 13 },
    { name: "sand", weight: 100, value: 12 },
    { name: "zinc", weight: 30, value: 10 },
    { name: "nails", weight: 7, value: 75 },
    { name: "saw", weight: 1, value: 10 },
    { name: "wood", weight: 75, value: 72 },
    { name: "axe", weight: 7, value: 12 },
    { name: "hammer", weight: 5, value: 15 },
]

function reset() {
    window.location.reload();
}

function dataCollector() {
    count = 0;
    let inputVal = maxweight.value;


    addButton.addEventListener("click", () => {
        for (let i = 0; i < selectOptions.length; i++) {
            let currrentOption = selectOptions[i]
            console.log(count)
            sumOfWeights += itemBox[count].weight;
            sumOfValue += itemBox[count].value

            if (sumOfWeights <= inputVal && count <= itemBox.length) {
                console.log(sumOfWeights)
                holder.innerHTML += `<h4>Item:${currrentOption.value} , weight:${itemBox[count].weight}, value:${itemBox[count].value}<h4>`
                sum.innerHTML = `<p>weigt: ${sumOfWeights}</p> <p>value: ${sumOfValue}</p> `

            }
            else {
                alert(`maximum weight of ${inputVal}`)
                addButton.disabled = true;
            }
            count++;
        }
    });
    doneButton.disabled = true;
}