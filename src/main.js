import login from './login.js';

const main = document.querySelector('#root');
const init = () => {
	main.innerHTML = '';
	switch (window.location.hash) {
	case '#login':
		main.appendChild(login());
		break;
	default:
		main.appendChild(login());
	}
};
window.addEventListener('load', () => {
	window.addEventListener('hashchange', init);
	init();
});
