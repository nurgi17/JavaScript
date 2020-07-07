function requestAjax() {
    let message = {
        loading: 'Loading...',
        success: 'Thank you',
        failure: 'Smth was wrong'
    };
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contact = document.getElementById('form'),
        inputs = contact.getElementsByTagName('input');

    function requestServer(elem) {
        elem.addEventListener('submit', (e) => {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(form);

            function postData(data) {
                return new Promise((resolve, reject) => {

                    let request = new XMLHttpRequest();
                    request.open('POST', '../server.php');
                    //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        }
                    };
                    request.send(data);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = '';
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });

    }
    requestServer(form);
    requestServer(contact);

}
module.exports = requestAjax;