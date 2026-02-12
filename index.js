document.addEventListener('DOMContentLoaded', () => {
	const details = document.querySelector('details');
	if (!details) return;

	const summary = details.querySelector('summary');
	const content = details.querySelector('p');
	if (!summary || !content) return;


	// Don't override overflow here; allow CSS to control scrolling behavior
	details.style.transition = 'height 0.28s ease-in-out';

	function closeDetails() {
		content.style.opacity = '0';
		details.style.height = summary.offsetHeight + 'px';
	}

	function openDetails() {
		const fullHeight = summary.offsetHeight + content.scrollHeight + 20;
		const maxAllowed = Math.floor(window.innerHeight * 0.65);
		const target = Math.min(fullHeight, maxAllowed);
		details.style.height = target + 'px';
		setTimeout(() => { content.style.opacity = '1'; }, 50);
	}

	// Initialize state
	if (details.open) {
		openDetails();
	} else {
		closeDetails();
	}

	// Use native toggle event so default behavior remains (keyboard, semantics)
	details.addEventListener('toggle', () => {
		if (details.open) openDetails(); else closeDetails();
	});

	// Recalculate heights on resize
	window.addEventListener('resize', () => {
		if (details.open) openDetails(); else closeDetails();
	});

	console.log('By: https://github.com/kenyel231, 2025');
	console.log('Hola');
});
