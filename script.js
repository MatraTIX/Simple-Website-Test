const clickBtn = document.getElementById('click-btn');
const clickCount = document.getElementById('click-count');

let count = localStorage.getItem('clickCount') || 0;

clickCount.textContent = count;

clickBtn.addEventListener('click', () => {
  count++;
  clickCount.textContent = count;
  localStorage.setItem('clickCount', count);
});