const music = new Audio('./audio/1.mp3');

// music.play();

const songs = [
  {
    id: 1,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/1.jpg'
  },
  {
    id: 2,
    songName: `Arjit singh
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/2.jpg'
  }, {
    id: 3,
    songName: `On My Way1
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/3.jpg'
  }, {
    id: 4,
    songName: `On My Way2
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/4.jpg'
  }, {
    id: 5,
    songName: `On My Way3
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/5.jpg'
  }, {
    id: 6,
    songName: `On My Way4
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/6.jpg'
  }, {
    id: 7,
    songName: `On My Way5
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/7.jpg'
  }, {
    id: 8,
    songName: `On My Way6
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/8.jpg'
  }, {
    id: 9,
    songName: `On My Way7
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/9.jpg'
  }, {
    id: 10,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/10.jpg'
  }, {
    id: 11,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/11.jpg'
  }, {
    id: 12,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/12.jpg'
  }, {
    id: 13,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/13.jpg'
  }, {
    id: 14,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/14.jpg'
  }, {
    id: 15,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/15.jpg'
  }, {
    id: 16,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/16.jpg'
  }, {
    id: 17,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/17.jpg'
  }, {
    id: 18,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/18.jpg'
  }, {
    id: 19,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/19.jpg'
  }, {
    id: 20,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/20.jpg'
  }
  , {
    id: 21,
    songName: `On My Way
        <div class="subtitle">Alan Walker</div>`,
    poster: './img/imgItem/20.jpg'
  }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
  e.getElementsByTagName('img')[0].src = songs[i].poster;
  e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName
})

let masterPlay = document.getElementById('master_play')
let wave = document.getElementById('wave')
masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove('bi-play-circle');
    masterPlay.classList.add('bi-pause-circle');
    wave.classList.add('active-wave');
  } else {
    music.pause();
    wave.classList.remove('active-wave');
    masterPlay.classList.add('bi-play-circle');
    masterPlay.classList.remove('bi-pause-circle');
  }
})

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
    el.classList.remove('bi-play-fill');
    el.classList.add('bi-pause-circle-fill');
  })
}
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
    el.style.background = 'rgb(105, 105, 105, .0)';

  })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play')
let title = document.getElementById('title')

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
  e.addEventListener('click', (el) => {
    index = el.target.id;

    music.src = `./audio/${index}.mp3`
    music.play();
    poster_master_play.src = `./img/imgItem/${index}.jpg`;
    masterPlay.classList.remove('bi-play-circle');
    masterPlay.classList.add('bi-pause-circle');
    wave.classList.add('active1');

    let songTitles = songs.filter((els) => {
      return els.id == index;
    })

    songTitles.forEach(elss => {
      let { songName } = elss;
      title.innerHTML = songName;
    })
    makeAllBackground();
    makeAllPlays();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1')
  })
})

let currentStart = document.getElementById('currentStart')
let currentEnd = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]


music.addEventListener('timeupdate', () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  let min1 = Math.floor(music_dur / 60)
  let sec1 = Math.floor(music_dur % 60)
  if (sec1 < 10)
    sec1 = `0${sec1}`
  currentEnd.innerText = `${min1}:${sec1}`
  let min2 = Math.floor(music_curr / 60)
  let sec2 = Math.floor(music_curr % 60)
  currentStart.innerText = `${min2}:${sec2}`

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar
  let seekbar = seek.value;
  console.log(seekbar)
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${100}%`;
})


let pop_song_left = document.getElementById("pop_song_left")
let pop_song_right = document.getElementById("pop_song_right")
let pop_song = document.getElementsByClassName('pop_song')[0];
pop_song_right.addEventListener('click', () => {
  pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
  pop_song.scrollLeft -= 330;
})



let pop_art_left = document.getElementById("pop_art_left")
let pop_art_right = document.getElementById("pop_art_right")
let pop_art = document.getElementsByClassName('item_art')[0];

pop_art_right.addEventListener('click', () => {
  pop_art.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
  pop_art.scrollLeft -= 330;
})