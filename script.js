let actualRating = "5";
/*submit();*/
const numbers = document.querySelectorAll(".numbers > div");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    numberSelection(e);
  });
  number.addEventListener("mouseover", e => {
    resetNumbers();
    e.target.style.backgroundColor = "var(--orange)";
    setTimeout(()=>{
      resetNumbers();
    }, 500)
  })
});

const button = document.querySelector(".submit-button");
button.addEventListener("click", submit);


function submit() {
  const thankYou = document.querySelector(".thank-you");
  const rating = document.querySelector(".rating");
  const result = document.querySelector(".result");
  result.innerHTML = actualRating
  rating.style.display = "none";
  thankYou.style.display = "flex";
}


function numberSelection(e) {
  resetNumbers();
  const target = e.target || e.srcElement;
  target.style.backgroundColor = "var(--medium-grey)";
  actualRating = target.innerHTML;
}


function resetNumbers(){
  numbers.forEach((number) => {
    if (number.innerHTML != actualRating){
      number.style.backgroundColor = "var(--light-grey)";
      number.style.color = "var(--white)";
    }
    else {
      number.style.backgroundColor = "var(--medium-grey)"
    }
  });
}