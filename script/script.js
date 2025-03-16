document.getElementById("navber").style.display = "none";
document.getElementById("learnSection").style.display = "none";
document.getElementById("faqSection").style.display = "none";

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const userName = document.getElementById("user-name").value;
    const userPassword = document.getElementById("user-password").value;
    const convertPassword = parseInt(userPassword);
    if (userName) {
      if (userPassword) {
        if (convertPassword === 123456) {
          Swal.fire({
            icon: "success",
            title: "অভিনন্দন",
            text: "চলুন আজ নতুন কিছু শেখা জাক",
            confirmButtonText: "OK",
          });
          document.getElementById("bannerSection").style.display = "none";
          document.getElementById("navber").style.display = "flex";
          document.getElementById("learnSection").style.display = "grid";
          document.getElementById("faqSection").style.display = "grid";
        } else {
          alert("invalid pin");
        }
      } else {
        alert("please enter your pin");
      }
    } else {
      alert("please enter your username");
    }
  });

//   logout btn

document.getElementById("btn-logout").addEventListener("click", function () {
  document.getElementById("bannerSection").style.display = "flex";
  document.getElementById("navber").style.display = "none";
  document.getElementById("learnSection").style.display = "none";
  document.getElementById("faqSection").style.display = "none";
});
// learn section
document.getElementById("lesson0").style.display = "none";
document.getElementById("lesson0").style.display = "none";

// Dynamic btn name

fetch("https://openapi.programming-hero.com/api/levels/all")
  .then((res) => res.json())
  .then((response) => {
    const data = response.data;

    document.querySelectorAll(".click-btn").forEach((button, index) => {
      if (index < data.length) {
        button.querySelector(".text-btn").innerText =
          `lesson-` + data[index].level_no;
      }
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

// lesson -1
document.getElementById("lesson-1").addEventListener("click", function () {
  fetch("https://openapi.programming-hero.com/api/level/5")
    .then((res) => res.json())
    .then((data) => console.log(data));
});

// lesson -3
document.getElementById("lesson-3").addEventListener("click", function () {
  document.getElementById("child-learn").style.display = "none";
  document.getElementById("lesson0").style.display = "grid";
});

// lesson 7
document.getElementById("lesson-7").addEventListener("click", function () {
  document.getElementById("child-learn").style.display = "none";
  document.getElementById("lesson0").style.display = "grid";
});

// learn btn

document.getElementById("btn-learn").addEventListener("click", function () {
  document
    .getElementById("learnSection")
    .scrollIntoView({ behavior: "smooth" });
});

// faq btn

document.getElementById("btn-faq").addEventListener("click", function () {
  document.getElementById("faqSection").scrollIntoView({ behavior: "smooth" });
});

// btn active

function btnActive(click) {
  document.querySelectorAll(".click-btn").forEach((button) => {
    button.classList.remove("btn-primary");
    button.classList.add("btn-outline");
  });

  click.classList.add("btn-primary");
  click.classList.remove("btn-outline");
}
