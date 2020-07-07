function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0, daysSum = 0, total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function (e) {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    restDays.addEventListener('change', function (e) {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function (e) {
        let a = total,
            b = this.options[this.selectedIndex].value;
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = a * b;
        }
    });
}
module.exports = calc;