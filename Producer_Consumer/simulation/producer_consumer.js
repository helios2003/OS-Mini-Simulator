const numInput = document.getElementById("numInput");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("bufInputForm");
const buffer = document.querySelector(".buffer");
const produceConsumeButtons = document.querySelector(".buttons-container");
const produceBtn = document.getElementById("produce-btn");
const consumeBtn = document.getElementById("consume-btn");

buffer.style.display = "none";
produceConsumeButtons.style.display = "none";

numInput.addEventListener("input", () => {
  let bufferSize = parseInt(numInput.value);

  if (isNaN(bufferSize) || bufferSize <= 0) {
    alert("Input a valid number.");
    bufferSize = 1;
    numInput.value = bufferSize;
  }
});

submitBtn.addEventListener("click", () => {
  const bufferSize = parseInt(numInput.value);

  if (isNaN(bufferSize) || bufferSize <= 0) {
    alert("Input a valid number.");
    return;
  }

  buffer.innerHTML = "";

  for (let i = 1; i <= bufferSize; i++) {
    buffer.innerHTML += `<div class="buffer-item"></div>`;
  }

  buffer.style.display = "flex";
  form.style.display = "none";
  numInput.value = "";

  produceConsumeButtons.style.display = "flex";
});

produceBtn.addEventListener("click", () => {
  const emptyBufList = buffer.children;
  let changed = false;

  for (let i = 0; i < emptyBufList.length; i++) {
    if (!emptyBufList[i].classList.contains("buffer-item-produced")) {
      emptyBufList[i].classList.add("buffer-item-produced");
      changed = true;
      break;
    }
  }

  if (!changed) {
    alert("You cannot produce new items as the buffer is full.");
  }
});

consumeBtn.addEventListener("click", () => {
  const fullBufList = buffer.children;
  let removed = false;

  for (let i = fullBufList.length - 1; i >= 0; i--) {
    if (fullBufList[i].classList.contains("buffer-item-produced")) {
      fullBufList[i].classList.remove("buffer-item-produced");
      removed = true;
      break;
    }
  }

  if (!removed) {
    alert("You cannot remove items from an empty buffer.");
  }
});
