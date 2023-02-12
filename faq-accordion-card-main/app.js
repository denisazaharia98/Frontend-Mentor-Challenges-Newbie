let question = document.querySelectorAll(".question");
let answer = document.querySelectorAll(".answer");
let rotate = document.querySelectorAll(".rotate");
for (let i = 0; i < question.length; i++) {
  answer[i].style.display = "none";
  question[i].addEventListener("click", (e) => {
    if (answer[i].style.display === "none") {
      rotate[i].style.transform = "rotate(180deg)";
      answer[i].classList.add("show");
      // question[i].
      answer[i].style.display = "block";
    } else {
      rotate[i].style.transform = "rotate(0)";
      answer[i].style.display = "none";
    }
  });
}
