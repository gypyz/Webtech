const form = document.querySelector("#new-comment");

function getComments() {
  let comments = localStorage.getItem("comments");
  return comments ? JSON.parse(comments) : [];
}
function displayComments() {
  const comments = getComments();
  const commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML = "";

  comments.forEach((comments) => {
    const p = document.createElement("p");
    console.log(comments);
    p.textContent = comments.text;
    commentsDiv.appendChild(p);
  });
}
function saveComment(comments) {
  localStorage.setItem("comments", JSON.stringify(comments));
}
function clear() {
  localStorage.clear();
  displayComments();
}
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page from reloading on submit

  const commentText = document.querySelector("#comment-text").value;
  let comments = getComments();

  comments.push({ text: commentText });
  saveComment(comments);
  document.getElementById("comment-text").value = "";
  displayComments();
});

form.addEventListener("reset", function (e) {
  e.preventDefault();
  clear();
});
