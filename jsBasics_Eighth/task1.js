function delayedOut(text, delay) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(text);
			resolve();
		}, delay);
	});
}

delayedOut('Promise Test', 2000).then(() => console.log(`Text viewed in 2 seconds`));
