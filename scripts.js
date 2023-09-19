const secunds = document.querySelector('.secunds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');
const btn1 = document.querySelector('.play');
const btn2 = document.querySelector('.pause');
const btn3 = document.querySelector('.reset')


let run = false;
let interval;
let s = 0;
let m = 0;
let h = 0;

function setButtonStyle(activeButton) {
    btn1.style.backgroundColor = 'rgba(60, 60, 60, 1)';
    btn2.style.backgroundColor = 'rgba(60, 60, 60, 1)';
    btn3.style.backgroundColor = 'rgba(60, 60, 60, 1)';
    activeButton.style.backgroundColor = '#1a1818';
}

function play() {
    setButtonStyle(btn1);

    if (!run) {
        interval = setInterval(() => {
            s++;
            if (s <= 9) {
                secunds.innerHTML = `0${s}`;
            } else if (s >= 10 && s < 60) {
                secunds.innerHTML = s;
            } else if (s === 60) {
                s = 0;
                m++;
                secunds.innerHTML = `00`
                if (m <= 9) {
                    minutes.innerHTML = `0${m}`;
                } else if (m >= 10 && m < 60) {
                    minutes.innerHTML = m;
                } else if (m == 60) {
                    m = 0;
                    h++;
                    if (h <= 9) {
                        hours.innerHTML = `0${h}`;
                    }
                    else if (h <= 9) {
                        hours.innerHTML = h;
                    }
                }
            }

        }, 1000)
        run = true;
    }
}

function pause() {
    setButtonStyle(btn2);

    clearInterval(interval)
    run = false;
}

function reset() {
    setButtonStyle(btn3);

    clearInterval(interval)

    s = 0;
    m = 0;
    h = 0;

    secunds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";

    run = false;
}





