   const getValueInpR = () => {
			let perValue = document.getElementById('percent'),
			printPerValue = document.querySelector('.percent-value');
			printPerValue.innerText = `${perValue.value}%`;
		}
		percent.addEventListener('input', getValueInpR);
		window.onunload = () => percent.removeEventListener('input', getValueInpR);