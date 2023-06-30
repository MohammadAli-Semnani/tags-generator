let tags = ["Sabzlearn", "JS"];
let inputBox = document.getElementById("input-box");
let btnElem = document.querySelector("button");
let ulElem = document.querySelector("ul");
let spanElem = document.querySelector(".counter");

let counterValue = +spanElem.innerHTML;

inputBox.addEventListener("keyup", (event) => {
    
  let inputValue = event.target.value;

  if (event.code === "Enter") {
    if (inputValue.trim() === "") {
      alert("value invalid !");
    } else if (counterValue > 0) {
      counterValue--;
      spanElem.innerHTML = counterValue;

      tagGenerator(inputValue);
    } else {
      alert("Oops! tags is compelete");
    }
  }
});

let tagGenerator = (value) => {
  let liElem = `
        <li>
            ${value}
            <i class="uit uit-multiply" onclick="remove(this)"></i>
        </li>
        `;
  ulElem.insertAdjacentHTML("afterbegin", liElem);

  inputBox.value = "";
};
btnElem.addEventListener("click", () => {
  let allLi = document.querySelectorAll("li");
  for (const li of allLi) {
    li.remove();
    counterValue = 10;
    spanElem.innerHTML = counterValue;
  }
});

let remove = (event) => {
  event.parentElement.remove();
  counterValue++;
  spanElem.innerHTML = counterValue;
};
