
document.getElementById("theme-btn").addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// Date Area
function formatDate() {
  const date = new Date();
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  const formatted = date.toLocaleDateString('en-US', options).replace(',', '');

  const [weekday, month, day, year] = formatted.split(" ");

  document.getElementById("day").innerText = `${weekday},`;
  document.getElementById("fullDate").innerText = `${month} ${day} ${year}`;
}

formatDate();