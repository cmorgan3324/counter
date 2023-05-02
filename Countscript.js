// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); // selects all buttons w/ class of 'btn'
// console.log(btns);

btns.forEach(function (btn) {
  // .forEach accesses all buttons
  btn.addEventListener("click", function (e) {
    // e = event object
    const styles = e.currentTarget.classList; // checks event object for which button is clicked; when a button is clicked, the classes of its element ('btn', 'increase', etc.) are saved to the variable
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
