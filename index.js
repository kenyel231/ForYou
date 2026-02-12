document.addEventListener('DOMContentLoaded', () => {
	const details = document.querySelector('details');
	if (!details) return;

	const summary = details.querySelector('summary');
	const content = details.querySelector('p');
	if (!summary || !content) return;

	details.style.overflowY = 'auto';
	details.style.transition = 'height 0.3s ease-in-out, opacity 0.3s ease-in-out';

	details.style.height = summary.offsetHeight + 'px';
	content.style.opacity = '0';

	summary.addEventListener('click', (e) => {
		e.preventDefault();

		if (details.hasAttribute('open')) {
			content.style.opacity = '0';
			details.style.height = summary.offsetHeight + 'px';

			setTimeout(() => {
				details.removeAttribute('open');
			}, 300);
		} else {
			details.setAttribute('open', 'true');
			const fullHeight = summary.offsetHeight + content.scrollHeight + 20;
			details.style.height = fullHeight + 'px';

			setTimeout(() => {
				content.style.opacity = '1';
			}, 10);
		}
	});

	console.log('By: https://github.com/kenyel231, 2025');
	console.log('Hola');
});
