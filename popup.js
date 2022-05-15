let restore = document.getElementById("restore");

restore.style.backgroundColor = '#3aa757';

restore.addEventListener("click", async () => {
  console.log('hey');
  let windows = [];
  chrome.windows.getAll({}, (windows) => {
    windows.forEach(window => {
      windows.push(window.width);
      console.log(window.height);
    });
  });

  chrome.windows.create({
    url: "https://www.nytimes.com/games/wordle/index.html"
  });
});