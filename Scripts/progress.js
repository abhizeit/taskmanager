let progress = JSON.parse(localStorage.getItem("priority-list")) || [];

function display(data) {
  let body = document.querySelector("tbody");
  body.innerHTML = "";
  data.forEach((el, index) => {
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
    col6.addEventListener("click", () => {
      let done = JSON.parse(localStorage.getItem("done-list")) || [];
      done.push(data[index]);
      localStorage.setItem("done-list", JSON.stringify(done));
      data.splice(index, 1);
      localStorage.setItem("priority-list", JSON.stringify(data));
      display(data);
    });
    row.append(col1, col2, col3, col4, col5, col6);
    body.append(row);
  });
}
display(progress);
