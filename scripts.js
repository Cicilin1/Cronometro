const secunds = document.querySelector('.secunds');
const minutes = document.querySelector('.minutes');
const miliseconds = document.querySelector('.miliseconds');
const hours = document.querySelector('.hours');

const btn1 = document.querySelector('.play');
const btn2 = document.querySelector('.pause');
const btn3 = document.querySelector('.reset');
const btn4 = document.querySelector('.return')



let ispaused = false;
let interval;
let ml = 0;
let s = 0;
let m = 0;
let h = 0;

function play() {
    interval = setInterval(() => {
        if (!ispaused) {
            ml += 10;

            if (ml === 1000) {
                s++;
                ml = 0;
            }

            if (s === 60) {
                m++;
                s = 0;
            }

            if (h === 60) {
                h++;
                m = 0;
            }

            miliseconds.textContent = formatml(ml);
            secunds.textContent = format(s);
            minutes.textContent = format(m);
            hours.textContent = format(h);
        }
    }, 10);

    btn1.style.display = "none"
    btn2.style.display = "inline-block"
}

function format(time) {
    return time < 10 ? `0${time}` : time;
}

function formatml(mls) {
    if (mls < 10) {
        return `00${mls}`;
    } else if (mls < 100) {
        return `0${mls}`;
    } else {
        return mls;
    }
}

function pause() {
    clearInterval(interval);
    ispaused = true;

    btn2.style.display = "none"
    btn4.style.display = "inline-block"
}

function returnInvterval(){
    ispaused = false;
    play()

    btn2.style.display = "inline-block"
    btn4.style.display = "none"
}


function reset() {
    clearInterval(interval);
    ml = 0;
    s = 0;
    m = 0;
    h = 0;

    miliseconds.textContent = formatml(ml);
    secunds.textContent = format(s);
    minutes.textContent = format(m);
    hours.textContent = format(h);

    ispaused = false;

    btn1.style.display = "inline-block"
    btn4.style.display = "none"
    btn2.style.display = "none"

}



btn1.addEventListener('click', play);
btn2.addEventListener('click', pause);
btn3.addEventListener('click', reset);
btn4.addEventListener('click', returnInvterval)