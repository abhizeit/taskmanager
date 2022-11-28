// Write code related to Home page here
let tasks = JSON.parse(localStorage.getItem("task-list")) || [];
let f = document.querySelector("form");
f.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    name: f.name.value,
    desc: f.desc.value,
    start: f.start.value,
    end: f.end.value,
    pr: f.priority.value,
  };
  tasks.push(obj);
  localStorage.setItem("task-list", JSON.stringify(tasks));
});
