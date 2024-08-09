document.addEventListener('DOMContentLoaded', function () {
    const channelLinks = document.querySelectorAll('.channel-link');
    const playerContainer = document.getElementById('player-container');
    const videoPlayer = document.getElementById('video-player');
    const closePlayerBtn = document.getElementById('close-player');

    channelLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const streamUrl = this.getAttribute('data-stream-url');
            videoPlayer.src = streamUrl;
            playerContainer.style.display = 'flex';
        });
    });

    closePlayerBtn.addEventListener('click', function () {
        videoPlayer.src = '';
        playerContainer.style.display = 'none';
    });
});
