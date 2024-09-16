function changeVideoSpeed(speed) {
	const videos = document.querySelectorAll('video');
	if (videos.length > 0) {
		videos.forEach((video) => {
			video.playbackRate = speed;
		});
	}
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.type === 'changeSpeed') {
		changeVideoSpeed(request.speed);
		sendResponse({ status: 'success' });
	}
});
