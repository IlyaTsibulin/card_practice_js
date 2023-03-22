let cardNumberInput = document.querySelector('.card-number-input'),
    cardNumberBox = document.querySelector('.card-number-box'),
    cardHolderInput = document.querySelector('.card-holder-input'),
    cardHolderName = document.querySelector('.card-holder-name'),
    monthInput = document.querySelector('.month-input'),
    expMonth = document.querySelector('.exp-month'),
    expYear = document.querySelector('.exp-year'),
    yearInput = document.querySelector('.year-input'),
    cardForm = document.querySelector('.card-form'),
    tableContainer = document.querySelector('.table-container'),
    tableArr = [];



cardNumberInput.oninput = () => {
    cardNumberBox.textContent = cardNumberInput.value;
}

cardHolderInput.oninput = () => {
    cardHolderName.textContent = cardHolderInput.value;
}

monthInput.oninput = () => {
    expMonth.textContent = monthInput.value;
}

yearInput.oninput = () => {
    expYear.textContent = yearInput.value;
}


cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let tableItem = `
    <tr>
        <td>${cardNumberInput.value}</td>
        <td>${cardHolderInput.value}</td>
        <td>${monthInput.value}.${yearInput.value}</td>
    </tr>
    `;

    tableArr.push(tableItem)

    for (const item of tableArr) {
        tableContainer.innerHTML += item;
    }
});
