
  let player;
  let isPlaying = false;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubeVideo', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    updatePlayIcon();
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      isPlaying = true;
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
      isPlaying = false;
    }
    updatePlayIcon();
  }

  function toggleVideo() {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  }

  function updatePlayIcon() {
    const container = document.querySelector('.video-container');
    const icon = document.getElementById('playIcon');
    if (!isPlaying) {
      container.classList.add('paused');
      icon.style.display = 'block';
    } else {
      container.classList.remove('paused');
      icon.style.display = 'none';
    }
  }

  // Load YouTube API
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);


  

  
