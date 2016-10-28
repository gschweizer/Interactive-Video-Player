window.onload = function() {

	// Video
	var video = document.getElementById("video");
	var captions = document.getElementById("captions");
	var lines = document.getElementById("subtitles").getElementsByTagName("span");
	var now = video.currentTime;
	
	// Buttons
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");

	// Sliders
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");
	var pBar = document.getElementById("p");
	var pBarTwo = document.getElementById("p2");
	var videoControls = document.getElementById("videoControls");


	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button image to pause-icon.png
			playButton.src = "icons/pause-icon.png";
		} else {
			// Pause the video
			video.pause();

			// Update the button image to play-icon.png
			playButton.src = "icons/play-icon.png";
		}
	});


	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button image to volume-off-icon.png
			muteButton.src = "icons/volume-off-icon.png";
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button image to volume-on-icon.png
			muteButton.src = "icons/volume-on-icon.png";
		}
	});


	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	});


		// Play the video when the seek handle is dropped
//	seekBar.addEventListener("mouseup", function() {
//		video.play();
//	});

	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	});

	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
			// Update the button image to play-icon.png
			playButton.src = "icons/play-icon.png";
	});


	// Update the progress bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the progress value
  		var value = (100 / video.duration) * video.currentTime;

		// Update the progress value
		pBar.value = value;
	});

		// Update the progress bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the progress value
  		var value = (100 / video.duration) * video.currentTime;

		// Update the progress value
		pBarTwo.value = value;
	});


	// Update the duration and current play time
	video.ontimeupdate = function() {

	function myFunction() {
		var curmins = Math.floor(video.currentTime / 60);
		var cursecs = Math.floor(video.currentTime - curmins * 60);
		var durmins = Math.floor(video.duration / 60);
		var dursecs = Math.floor(video.duration - durmins * 60);
		if(cursecs < 10){ cursecs = "0"+cursecs; }
		if(dursecs < 10){ dursecs = "0"+dursecs; }
		if(curmins < 10){ curmins = "0"+curmins; }
		if(durmins < 10){ durmins = "0"+durmins; }
	// Display the current position of the video in a <span> element with id="current"
	    document.getElementById("current").innerHTML = curmins+":"+cursecs;
	// Display the current position of the video in a <span> element with id="current"
	    document.getElementById("duration").innerHTML = durmins+":"+dursecs;
	}
};

		
		// Update the time as the video plays
	video.addEventListener("timeupdate", function() {
		// loop through each span
	for (var i = 0; i < lines.length; i++) {

		var now = video.currentTime;
		var start = lines[i].getAttribute("data-start");
		var end = lines[i].getAttribute("data-end");	

		  if (now >= start && now <= end) {
		    lines[i].className = "current";
		  } else {
		    lines[i].className = "";
		  }
		}
	});
	


}





