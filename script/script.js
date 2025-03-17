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

//data load
document.getElementById("loading-speaner").style.display = "none";

function loadData(apiNumber) {
  const apiUrl = `https://openapi.programming-hero.com/api/level/${apiNumber}`;
  const parent = document.getElementById("parent");
  const loader = document.getElementById("loading-speaner");
  loader.style.display = "block";
  parent.innerHTML = "";

  fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = response.data;

      loader.style.display = "none";

      if (!data || data.length === 0) {
        parent.classList.remove("grid");
        parent.innerHTML = `
          <div id="lesson0" class="grid gap-3 text-center p-10">
            <img class="mx-auto" src="../assets/alert-error.png" alt="Alert-Image" />
            <p class="hind-siliguri-medium text-gray-500">
              এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </p>
            <h1 class="font-bold text-3xl hind-siliguri-medium">
              নেক্সট Lesson এ যান
            </h1>
          </div>
        `;
        return;
      }

      data.forEach((item) => {
        parent.classList.add("grid");
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="border-1 border-gray-300 bg-white text-center grid gap-4 p-8 rounded-lg shadow-md card">
        <h1 class="text-2xl font-bold word-title">${item["word"]}</h1>
        <h5 class="text-gray-400">Meaning / Pronunciation</h5>
        <h3 class="hind-siliguri-bold">${
          item["meaning"] ? item["meaning"] : "অর্থ নেই"
        } / ${item["pronunciation"]}</h3>
        <div class="flex justify-between ">

        <button class="btn details-btn" onclick="my_modal_1.showModal()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
        </button>
        <button  class="btn speak-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        </button>
        </div>

        </div>
        `;
        parent.appendChild(div);
      });
    });
}

// lesson -1
document.getElementById("lesson-1").addEventListener("click", function () {
  loadData(1);
});

// lesson -2
document.getElementById("lesson-2").addEventListener("click", function () {
  loadData(2);
});
// lesson -3
document.getElementById("lesson-3").addEventListener("click", function () {
  loadData(3);
});
// lesson -4
document.getElementById("lesson-4").addEventListener("click", function () {
  loadData(4);
});
// lesson -5
document.getElementById("lesson-5").addEventListener("click", function () {
  loadData(5);
});
// lesson -6
document.getElementById("lesson-6").addEventListener("click", function () {
  loadData(6);
});

// lesson 7
document.getElementById("lesson-7").addEventListener("click", function () {
  loadData(7);
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
    button.classList.add("btn-outline");
  });

  click.classList.add("btn-primary");
  click.classList.remove("btn-outline");
}

// Read Title click speaker btn
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN";
  window.speechSynthesis.speak(utterance);
}

document.addEventListener("click", function (event) {
  if (event.target.closest(".speak-btn")) {
    const button = event.target.closest(".speak-btn");
    const card = button.closest(".card");
    const title = card.querySelector(".word-title").innerText;
    pronounceWord(title);
  }
});

// Modal POP up


