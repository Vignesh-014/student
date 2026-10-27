
function addBook() {
  let book = document.getElementById("book").value;

  if (book.trim() === "") {
    alert("Enter a book name!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = book;

  let btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("bookList").appendChild(li);

  document.getElementById("book").value = "";
}
