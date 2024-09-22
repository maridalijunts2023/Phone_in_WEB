const d = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Отображение времени с добавлением ведущего нуля для минут
document.querySelector('.block_time').textContent = `${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`;

// Отображение даты
document.querySelector('.date').textContent = `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;

//......................

const swipeBlock = document.querySelector('.Blockscreen');
let startX;
let distX;
const threshold = 100;
const restraint = 50;
let startTime;

//..................
swipeBlock.addEventListener('touchstart', function (e) {
    const touchobj = e.changedTouches[0];
    startX = touchobj.pageX;
    startTime = new Date().getTime();
    e.preventDefault();
})

//...............

swipeBlock.addEventListener('touchmove', function (e) {
    e.preventDefault();
})

//.......................

swipeBlock.addEventListener('touchend', function (e) {
    const touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX;

    const elapsedTime = new Date().getTime() - startTime;

    if (Math.abs(touchobj.pageY - e.changedTouches[0].pageY) <= restraint) {
        if (distX > 0) {
            swipeBlock.style.transform = 'translateY(-200px)';
            // swipeBlock.style.opacity = '0';
            setTimeout(() => {
                swipeBlock.style.display = 'none';
                document.querySelector('.Apps_container').style.display = 'flex'
                document.querySelector('.Weadther_App').style.display = 'flex'
            }, 300);
        }
    }
    e.preventDefault()
})
//.....................
var count = 1;
document.getElementById('block_btn').addEventListener('click', () => {
    count++
    if (count % 2 == 0) {
        document.querySelector('.fon').style.animation = 'showblock 1s linear forwards'
        document.querySelector('.Phone_container').style.transform = 'rotateY(0) rotateX(0) scale(1)'
        document.querySelector('.title1').style.opacity = '0'
        document.querySelector('.title1').style.left = '-20%'
        document.querySelector('.title2').style.opacity = '0'
        document.querySelector('.title2').style.right = '-20%'

    } else {
        // swipeBlock.style.opacity = '1';
        swipeBlock.style.display = 'flex';
        swipeBlock.style.transform = 'translateY(0)';
        document.querySelector('.fon').style.animation = 'hideblock 1s linear forwards'
        document.querySelector('.Phone_container').style.transform = 'rotateY(-30deg) rotateX(20deg) scale(1)'
        document.querySelector('.title1').style.opacity = '1'
        document.querySelector('.title1').style.left = '10%'
        document.querySelector('.title2').style.opacity = '1'
        document.querySelector('.title2').style.right = '2%'
    }
})

//....................
const Weadther_App = document.createElement('div');
Weadther_App.classList.add('Weadther_App')
Weadther_App.innerHTML = `
<div>
<div>
<span>sofa <i class="fa-solid fa-arrow-pointer"></i></span>
<h2>23<sup>o</sup></h2>
</div>
<div>
<i class="fa-solid fa-sun"></i>
<span>Sunny</span>
<span>H:24<sup>o</sup>L:9<sup>o</sup></span>
</div>
</div>
<div>
<table width = '100%'>
<tr>
<td>16</td>
<td>17</td>
<td>18</td>
<td>19</td>
<td>19.25</td>
<td>20</td>
</tr>
<tr>
<td><i class="fa-solid fa-sun"></i></td>
<td><i class="fa-solid fa-sun"></i></td>
<td><i class="fa-solid fa-sun"></i></td>
<td><i class="fa-solid fa-sun"></i></td>
<td><i class="fa-solid fa-sun"></i></td>
<td><i class="fa-solid fa-moon"></i></td>
</tr>
<tr>
<td>24<sup>o</sup></td>
<td>24<sup>o</sup></td>
<td>23<sup>o</sup></td>
<td>21<sup>o</sup></td>
<td>21<sup>o</sup></td>
<td>19<sup>o</sup></td>
</tr>
</table>
</div>
`;
document.querySelector('.phone_box').append(Weadther_App);
//.................................

const Apps_Container = document.createElement('div');
Apps_Container.classList.add('Apps_container');
document.querySelector('.phone_box').append(Apps_Container)

const apps = [
    {
        id: 'clock',
        img: 'https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Clock-512.png',
        name: 'clock'
    },
    {
        id: 'music',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png',
        name: 'music'
    },
    {
        id: 'contact',
        img: 'https://cdn.iconscout.com/icon/free/png-256/free-contacts-icon-download-in-svg-png-gif-file-formats--contact-phone-book-ios-ios14-14-pack-user-interface-icons-2365230.png?f=webp&w=256',
        name: 'contact'
    },
    {
        id: '',
        img: 'https://i.pinimg.com/originals/8e/14/6e/8e146e9e28baeb9b59c6004ed7b1343b.png',
        name: 'appstore'
    },
    {
        id: 'gallery',
        img: 'https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Photos-512.png',
        name: 'galery'
    },
]
apps.map((e) => {
    const App_btn = document.createElement('button');
    App_btn.setAttribute('id', `${e.id}`)
    App_btn.style.backgroundImage = `url(${e.img})`;
    //..............
    const App_name = document.createElement('h3');
    App_name.textContent = e.name;
    App_btn.append(App_name);
    Apps_Container.append(App_btn)
})


//...........................

const Time_App = document.createElement('div');
Time_App.classList.add('Time_App');
//.....................
const Alarm_clock_container = document.createElement('div');
Alarm_clock_container.classList.add('Alarm_clock_container');
document.querySelector('.phone_box').append(Alarm_clock_container)
Alarm_clock_container.innerHTML = `
<h1>Будильник</h1>
<button id = "close"><i class="fa-solid fa-xmark"></i></button>
<ul>
<li>
<div>
<h1>06:20</h1>
<span>Ежедневно</span>
</div>
<div>
<input type= "radio" />
</div>
</li>
<li>
<div>
<h1>07:00</h1>
<span>По будням</span>
</div>
<div>
<input type= "radio" />
</div>
</li>
<li>
<div>
<h1>14:30</h1>
<span>Однократно</span>
</div>
<div>
<input type= "radio" />
</div>
</li>
</ul>

<nav>
<ul>
<li>
<button id = "alarm">
<img src = "https://cdn-icons-png.flaticon.com/512/860/860735.png"/>
Будильник
</button>
</li>
<li>
<button id = "time">
<img src = "https://icons.veryicon.com/png/o/miscellaneous/night-hunting/ios-clock-6.png"/>
Часы
</button>
</li>
<li>
<button id = "second">
<img src = "https://cdn-icons-png.flaticon.com/512/45/45443.png"/>
Секундомер
</button>
</li>
<li>
<button id = "sandtime">
<img  src = "https://cdn-icons-png.flaticon.com/512/4/4273.png"/>
Таймер
</button>
</li>
</ul>
</nav>
`
//...........Open Clock App...............

document.getElementById('clock').addEventListener('click', () => {
    Alarm_clock_container.style.transform = 'scale(1)'
    Alarm_clock_container.style.opacity = '1'
})
//........... Clock_Container...........
document.getElementById('time').addEventListener('click', showClockPage);

function showClockPage() {
    const Alarm_clock_container = document.querySelector('.Alarm_clock_container');

    function updateTime() {
        const x = new Date();
        Alarm_clock_container.querySelector('.Time').textContent =
            `${x.getHours().toString().padStart(2, '0')}:${x.getMinutes().toString().padStart(2, '0')}:${x.getSeconds().toString().padStart(2, '0')}`;
    }

    // Рендерим интерфейс для часов
    Alarm_clock_container.innerHTML = `
        <h1>Часы</h1>
        <button id="close"><i class="fa-solid fa-xmark"></i></button>
        <h1 class="Time"></h1>
        <nav>
            <ul>
                <li><button id="alarm"><img src="https://cdn-icons-png.flaticon.com/512/860/860735.png"/>Будильник</button></li>
                <li><button id="time"><img src="https://icons.veryicon.com/png/o/miscellaneous/night-hunting/ios-clock-6.png"/>Часы</button></li>
                <li><button id="second"><img src="https://cdn-icons-png.flaticon.com/512/45/45443.png"/>Секундомер</button></li>
                <li><button id="sandtime"><img src="https://cdn-icons-png.flaticon.com/512/4/4273.png"/>Таймер</button></li>
            </ul>
        </nav>
    `;

    // Назначаем обработчик для кнопки закрытия
    document.getElementById('close').addEventListener('click', () => {
        Alarm_clock_container.style.transform = 'scale(0)';
        Alarm_clock_container.style.opacity = '0';
    });

    // Обновляем время каждую секунду
    updateTime();
    setInterval(updateTime, 1000);

    // Навешиваем обработчики для кнопок
    document.getElementById('alarm').addEventListener('click', showAlarmPage);
    document.getElementById('second').addEventListener('click', showSecondPage);
    document.getElementById('sandtime').addEventListener('click', showTimerPage);
}
function showAlarmPage() {
    const Alarm_clock_container = document.querySelector('.Alarm_clock_container');

    Alarm_clock_container.innerHTML = `
        <h1>Будильник</h1>
        <button id="close"><i class="fa-solid fa-xmark"></i></button>
        <ul>
            <li>
                <div><h1>06:20</h1><span>Ежедневно</span></div>
                <div><input type="radio" /></div>
            </li>
            <li>
                <div><h1>07:00</h1><span>По будням</span></div>
                <div><input type="radio" /></div>
            </li>
            <li>
                <div><h1>14:30</h1><span>Однократно</span></div>
                <div><input type="radio" /></div>
            </li>
        </ul>
        <nav>
            <ul>
                <li><button id="alarm"><img src="https://cdn-icons-png.flaticon.com/512/860/860735.png"/>Будильник</button></li>
                <li><button id="time"><img src="https://icons.veryicon.com/png/o/miscellaneous/night-hunting/ios-clock-6.png"/>Часы</button></li>
                <li><button id="second"><img src="https://cdn-icons-png.flaticon.com/512/45/45443.png"/>Секундомер</button></li>
                <li><button id="sandtime"><img src="https://cdn-icons-png.flaticon.com/512/4/4273.png"/>Таймер</button></li>
            </ul>
        </nav>
    `;

    // Назначаем обработчик для кнопки закрытия
    document.getElementById('close').addEventListener('click', () => {
        Alarm_clock_container.style.transform = 'scale(0)';
        Alarm_clock_container.style.opacity = '0';
    });

    // Навешиваем обработчики для кнопок
    document.getElementById('time').addEventListener('click', showClockPage);
    document.getElementById('second').addEventListener('click', showSecondPage);
    document.getElementById('sandtime').addEventListener('click', showTimerPage);
}
function showSecondPage() {
    const Alarm_clock_container = document.querySelector('.Alarm_clock_container');

    Alarm_clock_container.innerHTML = `
        <h1>Секундомер</h1>
        <button id="close"><i class="fa-solid fa-xmark"></i></button>
        
       <div class = "second_box">
        <h1 id = "timeDisplay">0</h1>
        <div>
            <button id = "start"><i class="fa-solid fa-play"></i></button>
            <button id = "stop"><i class="fa-solid fa-stop"></i></button>
             <button id="reset"><i class="fa-solid fa-undo"></i></button>
        </div>
       </div>

        <nav>
            <ul>
                <li><button id="alarm"><img src="https://cdn-icons-png.flaticon.com/512/860/860735.png"/>Будильник</button></li>
                <li><button id="time"><img src="https://icons.veryicon.com/png/o/miscellaneous/night-hunting/ios-clock-6.png"/>Часы</button></li>
                <li><button id="second"><img src="https://cdn-icons-png.flaticon.com/512/45/45443.png"/>Секундомер</button></li>
                <li><button id="sandtime"><img src="https://cdn-icons-png.flaticon.com/512/4/4273.png"/>Таймер</button></li>
            </ul>
        </nav>
    `;
    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    // Форматирует время в виде 00:00.00
    function formatTime(time) {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    }

    // Обновляет отображаемое время
    function updateTime() {
        const currentTime = Date.now() - startTime + elapsedTime;
        document.getElementById('timeDisplay').textContent = formatTime(currentTime);
    }

    // Старт секундомера
    document.getElementById('start').addEventListener('click', () => {
        if (!timerInterval) {
            startTime = Date.now();
            timerInterval = setInterval(updateTime, 10);
        }
    });

    // Стоп секундомера
    document.getElementById('stop').addEventListener('click', () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            elapsedTime += Date.now() - startTime;
            timerInterval = null;
        }
    });

    // Сброс секундомера
    document.getElementById('reset').addEventListener('click', () => {
        clearInterval(timerInterval);
        elapsedTime = 0;
        document.getElementById('timeDisplay').textContent = "00:00.00";
        timerInterval = null;
    });

    // Назначаем обработчик для кнопки закрытия
    document.getElementById('close').addEventListener('click', () => {
        Alarm_clock_container.style.transform = 'scale(0)';
        Alarm_clock_container.style.opacity = '0';
    });

    // Навешиваем обработчики для кнопок
    document.getElementById('time').addEventListener('click', showClockPage);
    document.getElementById('alarm').addEventListener('click', showAlarmPage);
    document.getElementById('sandtime').addEventListener('click', showTimerPage);
}
function showTimerPage() {
    const Alarm_clock_container = document.querySelector('.Alarm_clock_container');

    Alarm_clock_container.innerHTML = `
        <h1>Таймер</h1>
        <button id="close"><i class="fa-solid fa-xmark"></i></button>
      <div class="container">
        <div class="inputs">
            <input type="number" id="hoursInput" placeholder="0" min="0" max="23">
            <input type="number" id="minutesInput" placeholder="0" min="0" max="59">
            <input type="number" id="secondsInput" placeholder="0" min="0" max="59">
        </div>
        <div class="timer" id="timer">00:00:00</div>
        <div class = "buttons">
        <button id="startButton">Старт</button>
        <button id="stopButton">Стоп</button>
        <button id="resetButton">Сброс</button>
        </div>
    </div>

        <nav>
            <ul>
                <li><button id="alarm"><img src="https://cdn-icons-png.flaticon.com/512/860/860735.png"/>Будильник</button></li>
                <li><button id="time"><img src="https://icons.veryicon.com/png/o/miscellaneous/night-hunting/ios-clock-6.png"/>Часы</button></li>
                <li><button id="second"><img src="https://cdn-icons-png.flaticon.com/512/45/45443.png"/>Секундомер</button></li>
                <li><button id="sandtime"><img src="https://cdn-icons-png.flaticon.com/512/4/4273.png"/>Таймер</button></li>
            </ul>
        </nav>
    `;

    document.getElementById('close').addEventListener('click', () => {
        Alarm_clock_container.style.transform = 'scale(0)';
        Alarm_clock_container.style.opacity = '0';
    });

    let timeLeft = 0;
    let timerId;
    let isRunning = false;

    const timerDisplay = document.getElementById('timer');
    const hoursInput = document.getElementById('hoursInput');
    const minutesInput = document.getElementById('minutesInput');
    const secondsInput = document.getElementById('secondsInput');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton = document.getElementById('resetButton');

    // Функция обновления отображения таймера
    function updateDisplay(time) {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Запуск таймера
    function startTimer() {
        if (!isRunning) {
            let hours = parseInt(hoursInput.value) || 0;
            let minutes = parseInt(minutesInput.value) || 0;
            let seconds = parseInt(secondsInput.value) || 0;

            timeLeft = hours * 3600 + minutes * 60 + seconds;

            if (timeLeft > 0) {
                timerId = setInterval(() => {
                    if (timeLeft > 0) {
                        timeLeft--;
                        updateDisplay(timeLeft);
                    } else {
                        clearInterval(timerId);
                        alert("Время вышло!");
                    }
                }, 1000);
                isRunning = true;
            }
        }
    }

    // Остановка таймера
    function stopTimer() {
        clearInterval(timerId);
        isRunning = false;
    }

    // Сброс таймера
    function resetTimer() {
        stopTimer();
        hoursInput.value = '';
        minutesInput.value = '';
        secondsInput.value = '';
        updateDisplay(0);
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
    document.getElementById('alarm').addEventListener('click', showAlarmPage);
    document.getElementById('time').addEventListener('click', showClockPage);
    document.getElementById('second').addEventListener('click', showSecondPage);
    document.getElementById('sandtime').addEventListener('click', showTimerPage);
}
showClockPage();

//............Music App......................


const musicApp = document.createElement('div');
document.querySelector('.phone_box').append(musicApp);
musicApp.classList.add('musicApp');

const music_data = [
    {
        name: "John Legend - All Of Me",
        src: "./1.mp3",
        img: "https://i.scdn.co/image/ab67616d0000b273d56159304b0098aa0873b839",
    },
    {
        name: "UNIK & GARA - Гонк-Конг",
        src: ".2.mp3",
        img: "https://i1.sndcdn.com/artworks-wSJhQotPtoOP-0-t500x500.jpg",
    },
    {
        name: "Matrang - Медуза.",
        src: "./3.mp3",
        img: "https://i1.sndcdn.com/artworks-000351168381-drmxl0-t500x500.jpg",
    },
];
musicApp.innerHTML = `
 <button id="close-music"><i class="fa-solid fa-xmark"></i></button>
<h1>музыка</h1>
<ul class = "music_list">
 
 </ul>
`
//.....................
document.getElementById("music").addEventListener("click", () => {
    musicApp.style.opacity = "1";
    musicApp.style.transform = "scale(1)";
});
//......................
document.getElementById('close-music').addEventListener('click', () => {
    musicApp.style.opacity = '0';
    musicApp.style.transform = 'scale(0)';
});
let currentAudio = null;
//.............................
music_data.forEach((track, index) => {
    const Musicitem = document.createElement("li");
    Musicitem.innerHTML = `
      <div>
        <img src="${track.img}" />
        <span>${track.name}</span>
      </div>
      <audio id="audio_${index}" src="${track.src}" controls></audio>
      <button class = "play" id="play_${index}"><i class="fa-solid fa-play"></i></button>
    `;
    document.querySelector(".music_list").append(Musicitem);
    document.getElementById(`play_${index}`).addEventListener('click', () => {
        const audioElement = document.getElementById(`audio_${index}`);
        const playButton = document.getElementById(`play_${index}`);

        // Если есть другой играющий аудиоэлемент, остановим его
        if (currentAudio && currentAudio !== audioElement) {
            currentAudio.pause();
            currentAudio.nextElementSibling.innerHTML = '<i class="fa-solid fa-play"></i>';
        }

        // Переключаем воспроизведение
        if (audioElement.paused) {
            audioElement.play();
            playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
            currentAudio = audioElement; // Обновляем текущий аудиоэлемент
        } else {
            audioElement.pause();
            playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });
})
//.....................GALLERY APP...............................



const Gallery_app = document.createElement('div');
Gallery_app.classList.add('gallery_app');
Gallery_app.innerHTML = `
<h1>Галлерия</h1>
<button id = "close_gallery"><i class="fa-solid fa-xmark"></i></button>
<div class = "img_box"></div>
`
document.querySelector('.phone_box').append(Gallery_app);
document.getElementById('close_gallery').addEventListener('click', () => {
    Gallery_app.style.opacity = '0';
    Gallery_app.style.transform = 'scale(0)';
});
document.getElementById('gallery').addEventListener('click', () => {
    Gallery_app.style.opacity = '1';
    Gallery_app.style.transform = 'scale(1)';
});
const Gallery_data = [
    // './Gallery-App/1.jpg',
    // './Gallery-App/2.webp',
    // './Gallery-App/3.jpeg',
    // './Gallery-App/4.webp',
    // './Gallery-App/5.jpg',
    // './Gallery-App/6.jpg',
    // './Gallery-App/7.jpg',
    // './Gallery-App/8.jpg',
    // './Gallery-App/9.jpg',
    // './Gallery-App/10.webp',
    // './Gallery-App/11.jpg',
    // './Gallery-App/12.jpg',
    // './Gallery-App/13.jpg',
    // './Gallery-App/14.jpg',
    // './Gallery-App/15.jpg',
    // './Gallery-App/16.jpg',
];

Gallery_data.map((e, index) => {
    const Image = document.createElement('img');
    Image.src = e;
    document.querySelector('.img_box').append(Image);
    var count = 1
    Image.addEventListener('click', () => {
        const imgview = document.createElement('div')
        imgview.classList.add('imgview');
        Gallery_app.append(imgview)
        const img = document.createElement('img');
        img.src = e;
        imgview.append(img)
        count++
        if (count % 2 == 0) {
            imgview.style.display = 'flex'
            document.querySelector('.img_box').style.display = 'none'

            imgview.addEventListener('click', () => {
                imgview.style.display = 'none'
                document.querySelector('.img_box').style.display = 'flex'
            })
        }
    })
})

//.................contacts app.................
const Contacts_App = document.createElement('div');
document.querySelector('.phone_box').append(Contacts_App)
Contacts_App.classList.add('Contacts_app');
Contacts_App.innerHTML = `
 <h1 id='Contacts_Container'> Контакты </h1>
 <button id = "close_contact"><i class="fa-solid fa-xmark"></i></button>
 <ul class = 'numbers'></ul>
 `
document.getElementById('close_contact').addEventListener('click', () => {
    Contacts_App.style.opacity = '0';
    Contacts_App.style.transform = 'scale(0)';
});
document.getElementById('contact').addEventListener('click', () => {
    Contacts_App.style.opacity = '1';
    Contacts_App.style.transform = 'scale(1)';
});
const Contacts = [
    {
        name: `Mari Dalijunts`,
        number: `+374 96 55 65 80`,
    },
    {
        name: `Hexine Matevosyan`,
        number: `+374 96 35 52 23`,
    },
    {
        name: `Nina Matevosyan`,
        number: `+374 94 77 54 48`,
    },
]
Contacts.map((e) => {
    const Contact = document.createElement('li');
    Contact.innerHTML = `
    <h3>${e.name}</h3>
    <a href = "tel:${e.number}"><i class="fa-solid fa-phone"></i></a>
    `
    document.querySelector('.numbers').append(Contact)
})

//........................................

const openCameraBtn = document.getElementById("openCameraBtn");
let stream;

const Camera_app = document.createElement('div');
Camera_app.classList.add('camera_app');
Camera_app.innerHTML = `
<button id = "close_camera_app"><i class="fa-solid fa-xmark"></i></button>
            <video id="video" autoplay></video>
            <div>
            <button id="takePhotoBtn"></button>
            <canvas id="canvas" style="display:none;"></canvas>
            <img id="photo" alt="Captured Image">
            </div>
        `;
document.querySelector(".phone_box").appendChild(Camera_app);
const video = Camera_app.querySelector("#video");
const takePhotoBtn = Camera_app.querySelector("#takePhotoBtn");
const canvas = Camera_app.querySelector("#canvas");
const photo = document.getElementById("photo");

openCameraBtn.addEventListener("click", async () => {
    Camera_app.style.opacity = '1' // Показать контейнер
    Camera_app.style.transform = 'scale(1)'
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        alert("Error accessing camera: " + err.message);
    }
});


//.........................
// Проверяем, есть ли уже сохраненные снимки в localStorage
let camera_photo_data = JSON.parse(localStorage.getItem('camera_photo_data')) || [];

// Функция для отображения всех снимков из localStorage
function displayStoredPhotos() {
    const photoGallery = document.querySelector('.img_box');
    photoGallery.innerHTML = ''; // Очищаем галерею
    camera_photo_data.forEach(photoSrc => {
        const imgElement = document.createElement('img');
        imgElement.src = photoSrc;
        imgElement.style.width = "100px"; // Задаем размер изображения
        imgElement.style.margin = "5px";
        photoGallery.appendChild(imgElement);

        // Добавляем событие для увеличения изображения при клике
        imgElement.addEventListener('click', () => {
            const imgview = document.createElement('div');
            imgview.classList.add('imgview');
           Gallery_app.append(imgview);
            
            const img = document.createElement('img');
            img.src = photoSrc;
            imgview.append(img);

            // Показать полноразмерное изображение
            imgview.style.display = 'flex';
            document.querySelector('.img_box').style.display = 'none';

            // Закрытие полноразмерного изображения по клику
            imgview.addEventListener('click', () => {
                imgview.style.display = 'none';
                document.querySelector('.img_box').style.display = 'flex';
            });
        });
    });
}

// Отображаем снимки при загрузке страницы
displayStoredPhotos();

// Обработка снимка при нажатии на кнопку
takePhotoBtn.addEventListener("click", () => {
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Преобразуем снимок в изображение
    const imageData = canvas.toDataURL("image/png");
    photo.src = imageData;
    photo.style.display = "block";

    // Добавляем новый снимок в массив и сохраняем в localStorage
    camera_photo_data.push(imageData);
    localStorage.setItem('camera_photo_data', JSON.stringify(camera_photo_data));

    // Отображаем все снимки из localStorage
    displayStoredPhotos();
});


document.getElementById('close_camera_app').addEventListener('click', () => {
    Camera_app.style.opacity = '0' // Показать контейнер
    Camera_app.style.transform = 'scale(0)'
})