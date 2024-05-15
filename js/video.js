//=================VIDEO===============
let video = document.querySelector(".enjoy-video");

if (window.innerWidth > "1920") {
    video.setAttribute('src', 'video/video (2160p).mp4');
} else if (window.innerWidth > "1440") {
    video.setAttribute('src', 'video/video (1440p).mp4');
} else if (window.innerWidth > "1080") {
    video.setAttribute('src', 'video/video (1080p).mp4');
} else if (window.innerWidth > "720") {
    video.setAttribute('src', 'video/video (720p).mp4');
} else if (window.innerWidth > "540") {
    video.setAttribute('src', 'video/video (540p).mp4');
} else if (window.innerWidth > "360") {
    video.setAttribute('src', 'video/video (360p).mp4');
} else {
    video.setAttribute('src', 'video/video (240p).mp4');
}
video.load();
video.play();
//=================VIDEO===============