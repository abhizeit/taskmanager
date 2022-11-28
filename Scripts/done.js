let done = JSON.parse(localStorage.getItem("done-list")) || [];
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
    row.append(col1, col2, col3, col4, col5);
    body.append(row);
  });
}
display(done);
