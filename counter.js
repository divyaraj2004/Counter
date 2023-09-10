const mainTitle = document.querySelector("#counter");
const btnDec = document.querySelector("#dec");
const btnreset = document.querySelector("#reset");
const btninc = document.querySelector("#inc");
let curVal = 0;

btninc.addEventListener("click", () => {
    curVal++;
    mainTitle.textContent = curVal;
});
btnDec.addEventListener("click", () => {
    curVal--;
    mainTitle.textContent = curVal;
});
btnreset.addEventListener("click", () => {
    curVal = 0;
    mainTitle.textContent = curVal;

});


