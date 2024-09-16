document.getElementById('normal').addEventListener('click', () => {
	changeSpeed(1);
});

document.getElementById('faster').addEventListener('click', () => {
	changeSpeed(16);
});

function changeSpeed(speed) {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, { type: 'changeSpeed', speed: speed });
	});
}
