function timer() {
    let deadline = '2019-10-13';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            // hours = Math.floor(t / (1000 * 60 * 60));
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }
            days.textContent = addZero(t.days) + 'd';
            hours.textContent = addZero(t.hours) + 'h';
            minutes.textContent = addZero(t.minutes) + 'm';
            seconds.textContent = addZero(t.seconds) + 's';

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00d';
                hours.textContent = '00h';
                minutes.textContent = '00m';
                seconds.textContent = '00s';
            }
        }
    }
    setClock('timer', deadline);
}
module.exports = timer;