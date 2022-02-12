const email = document.querySelector("#email");
const button = document.querySelector("button");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener("click", () => {
  answer.innerText = "";
  let paragraph = "";
  if (emailRegex.test(email.value) == true) {
    paragraph = "Thanks for being awesome!";
    input.style.border = "1.5px solid hsl(223, 100%, 88%)";
    answer.style.color = "hsl(223, 100%, 88%)";
  } else {
    paragraph = "Please provide a valid email adress";
    answer.style.color = "hsl(354, 100%, 66%)";
    input.style.border = "1.5px solid hsl(354, 100%, 66%)";
  }
  answer.append(paragraph);
});
