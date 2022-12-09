const addButton = document.querySelector('.bt1')
const maxweight = document.querySelector('.weight')
const holder = document.getElementById('knapsack_bag')
const sum = document.getElementById('total_sum')
const selectOptions = document.getElementsByTagName('select')
const doneButton = document.querySelector('.bt2')
const selected = []
const count = 0
const sumOfWeights = 0
const sumOfValue = 0
const itemBox = [
    { name: 'cement', weight: 50, value: 35 },
    { name: 'stones', weight: 60, value: 13 },
    { name: 'sand', weight: 100, value: 12 },
    { name: 'zinc', weight: 30, value: 10 },
    { name: 'nails', weight: 7, value: 75 },
    { name: 'saw', weight: 1, value: 10 },
    { name: 'wood', weight: 75, value: 72 },
    { name: 'axe', weight: 7, value: 12 },
    { name: 'hammer', weight: 5, value: 15 },
]

function reset() {
    window.location.reload();
}

function dataCollector() {
    count = 0;
    const inputVal = maxweight.value;


    addButton.addEventListener('click', () => {
        for (const i = 0; i < selectOptions.length; i++) {
            const currrentOption = selectOptions[i]
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