var song;
var fft;
// let glitch;
var curCol;
let bgs = [];
var bg;
let visOffsetY;
let hackedFont;
var textchangeCounter = 0;

function preload() {
  song = loadSound("Demo.mp3");
  for (var i = 1; i < 17; i++) {
    bgs.push(loadImage('imgs/glitch-img/ts_glitched' + i + '.jpeg'));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSL);
  imageMode(CENTER);
  // frameRate(1);
  curCol = color(182,100,50);
  fft = new p5.FFT();
  // glitch = new Glitch();
  bg = bgs[0];
  visOffsetY = -200;
}

function draw() {
  background(0);

  translate(width/2, height/2);

  textchangeCounter++;

  image(bg, 0, 0, width, bg.height*width/bg.width); // to fit width

  // // // test rect
  // fill(255)
  // rect(-100, -height/2 , 600, height);

  fft.analyze();
  amp = fft.getEnergy(20, 200);

  noFill();
  stroke(curCol);
  strokeWeight(3);
  if (amp > 233) {
    curCol = color(random(100,300), 100, 50);
    bg = random(bgs);
    document.getElementById('title').style.fontFamily = "hackedFont";
    document.getElementById("error_intro").style.display = "block";
  } else {
    document.getElementById('title').style.fontFamily = "Mohave-Bold";
    if (textchangeCounter > 60) {
      textchangeCounter = 0;
      document.getElementById("error_intro").style.display = "none";
    }

  }

  var wave = fft.waveform();

  for (var t = -1; t <= 1; t+=2) {
    beginShape();
    for (var i = 0; i <= 180; i += 0.5) {
      var index =floor(map(i, 0, 180, 0, wave.length -1));

      var r = map(wave[index], -1, 1, 50, 150);

      var x = r * sin(i) * t;
      var y = r * cos(i) + visOffsetY;
      vertex(x,y);
    }
    endShape();
  }

}

function mouseClicked() {
  // check if mouse is in the middle positions
  if (width/2-100 < mouseX && mouseX < width/2+500) {
    if (song.isPlaying()) {
      song.pause();
      noLoop();
    } else {
      song.play();
      loop();
    }
  }
}

load_intro = function() {
  document.getElementById("intro").style.display = "block";
  document.getElementById("lyrics-container").style.display = "none";
  document.getElementById("demo-container").style.display = "none";
  document.getElementById("video-container").style.display = "none";
  document.getElementById("error_video").pause();

  // change section color
  document.getElementById("lyricsBtn").style.color = "#08F7FE";
  document.getElementById("demoBtn").style.color = "#08F7FE";
  document.getElementById("pay_dayBtn").style.color = "#08F7FE";
}
load_demo = function() {
  // display demo
  document.getElementById("intro").style.display = "none";
  document.getElementById("lyrics-container").style.display = "none";
  document.getElementById("demo-container").style.display = "block";
  document.getElementById("video-container").style.display = "none";
  document.getElementById("error_video").pause();

  // change section color
  document.getElementById("lyricsBtn").style.color = "#08F7FE";
  document.getElementById("demoBtn").style.color = "#FFF01F";
  document.getElementById("pay_dayBtn").style.color = "#08F7FE";

  console.log(song.isPlaying());
  // play or pause song
  if (song.isPlaying()) {
    song.pause();
    noLoop();
  } else {
    song.play();
    loop();
  }
}
load_lyrics = function() {
  // display lyrics & description
  document.getElementById("intro").style.display = "none";
  document.getElementById("lyrics-container").style.display = "block";
  document.getElementById("demo-container").style.display = "none";
  document.getElementById("video-container").style.display = "none";
  document.getElementById("error_video").pause();

  // change section color
  document.getElementById("lyricsBtn").style.color = "#FFF01F";
  document.getElementById("demoBtn").style.color = "#08F7FE";
  document.getElementById("pay_dayBtn").style.color = "#08F7FE";
}
load_payday = function() {
  // display video not available
  document.getElementById("intro").style.display = "none";
  document.getElementById("lyrics-container").style.display = "none";
  document.getElementById("demo-container").style.display = "none";
  document.getElementById("video-container").style.display = "block";
  document.getElementById("error_video").play();

  // change section color
  document.getElementById("lyricsBtn").style.color = "#08F7FE";
  document.getElementById("demoBtn").style.color = "#08F7FE";
  document.getElementById("pay_dayBtn").style.color = "#FFF01F";
}
