let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let result = document.querySelector("#result");
let computerScore = document.querySelector("#computerScore");
let userScore = document.querySelector("#userScore");
let cScore = 0;
let uScore = 0;
let mode = document.querySelector("#mode");

mode.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
  mode.classList.toggle("darkMode");
  document.querySelector(".head").classList.toggle("darkMode"); // header
  document.querySelector(".footer").classList.toggle("darkMode"); // footer

  document.querySelectorAll("p").forEach((p) => p.classList.toggle("darkMode")); // all <p>
  document
    .querySelectorAll(".value")
    .forEach((v) => v.classList.toggle("darkMode")); // all .value

    if (document.body.classList.contains("darkMode")) {
        mode.textContent = "Light";
      } else {
        mode.textContent = "Dark";
      }
});

rock.addEventListener("click", chosen);
paper.addEventListener("click", chosen);
scissor.addEventListener("click", chosen);

rock.addEventListener("mouseover", highlighting);
paper.addEventListener("mouseover", highlighting);
scissor.addEventListener("mouseover", highlighting);

rock.addEventListener("mouseout", removeHighlighting);
paper.addEventListener("mouseout", removeHighlighting);
scissor.addEventListener("mouseout", removeHighlighting);

function highlighting(event) {
  let item = event.target;
  item.style.border = "5px solid green";
}

function removeHighlighting(event) {
  let item = event.target;
  item.style.border = "";
}

function chosen(event) {
  let computerChoice = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissor"];
  let comChoice = choices[computerChoice];
  console.log(computerChoice);
  let userChoice = event.target.id;
  let status = document.querySelector(".status");

  if (userChoice === "rock") {
    if (comChoice === "rock") {
      result.innerText = "Computer Chose Rock. Draw";
      status.style.backgroundColor = "yellow";
    } else if (comChoice == "paper") {
      result.innerText = "Computer Chose Paper. Computer Wins";
      cScore++;
      computerScore.innerText = cScore;
      status.style.backgroundColor = "rgb(243, 68, 68)";
      computerScore.style.color = "rgb(243, 68, 68)";
    } else if (comChoice == "scissor") {
      result.innerText = "Computer Chose Scissor. You Win";
      uScore++;
      userScore.innerText = uScore;
      status.style.backgroundColor = "lightgreen";
      userScore.style.color = "green";
    }
  }

  if (userChoice === "paper") {
    if (comChoice === "rock") {
      result.innerText = "Computer Chose Rock. You Win";
      uScore++;
      userScore.innerText = uScore;
      status.style.backgroundColor = "lightgreen";
      userScore.style.color = "green";
    } else if (comChoice == "paper") {
      result.innerText = "Computer Chose Paper. Draw";
      status.style.backgroundColor = "yellow";
    } else if (comChoice == "scissor") {
      result.innerText = "Computer Chose Scissor. Computer Wins";
      cScore++;
      computerScore.innerText = cScore;
      status.style.backgroundColor = "rgb(243, 68, 68)";
      computerScore.style.color = "rgb(243, 68, 68)";
    }
  }

  if (userChoice === "scissor") {
    if (comChoice === "rock") {
      result.innerText = "Computer Chose Rock. Computer Wins";
      cScore++;
      computerScore.innerText = cScore;
      status.style.backgroundColor = "rgb(243, 68, 68)";
      computerScore.style.color = "rgb(243, 68, 68)";
    } else if (comChoice == "paper") {
      result.innerText = "Computer Chose Paper. You Win";
      uScore++;
      userScore.innerText = uScore;
      status.style.backgroundColor = "lightgreen";
      userScore.style.color = "green";
    } else if (comChoice == "scissor") {
      result.innerText = "Computer Chose Scissor. Draw";
      status.style.backgroundColor = "yellow";
    }
  }
}
