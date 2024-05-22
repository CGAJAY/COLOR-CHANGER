document.addEventListener('DOMContentLoaded', () => {

    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

	function getRandomColor() {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);
		
		return `rgb(${r}, ${g}, ${b})`;
	}

    changeColorBtn.addEventListener('click', () => {
        colorBox.style.backgroundColor = getRandomColor();
    });
});

