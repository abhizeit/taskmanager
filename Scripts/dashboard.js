// Write code related to dashboard page here
let tasks = JSON.parse(localStorage.getItem("task-list")) || [];
console.log(tasks);
function display(data) {
  let total = 0;
  let body = document.querySelector("tbody");
  body.innerHTML = "";
  data.forEach((el, index) => {
    total++;
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.textContent = el.name;
    let col2 = document.createElement("td");
    col2.textContent = el.desc;
    let col3 = document.createElement("td");
    col3.textContent = el.start;
    let col4 = document.createElement("td");
    console.log(el.end);
    col4.textContent = el.end;
    let col5 = document.createElement("td");
    col5.textContent = el.pr;
    let col6 = document.createElement("td");
    col6.textContent = "Add";
    row.append(col1, col2, col3, col4, col5, col6);
    body.append(row);
    col6.addEventListener("click", () => {
      let progress = JSON.parse(localStorage.getItem("priority-list")) || [];
      progress.push(data[index]);
      localStorage.setItem("priority-list", JSON.stringify(progress));
      data.splice(index, 1);
      localStorage.setItem("task-list", JSON.stringify(data));
      display(data);
    });
  });
  document.querySelector("#task-count").textContent = total;
}
document.querySelector("#filter").addEventListener("change", () => {
  let fltr = document.querySelector("#filter").value;
  console.log(fltr);
  if (fltr == "") {
    let tasks = JSON.parse(localStorage.getItem("task-list")) || [];
    display(tasks);
  } else {
    let tasks = JSON.parse(localStorage.getItem("task-list")) || [];
    let filtered = tasks.filter((el) => {
      return el.pr == fltr;
    });
    display(filtered);
  }
});
display(tasks);
