const display = document.getElementById("display");
const btn = document.querySelectorAll(".btn");
// const stopwatch = () => {
let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let timeoutid;
btn.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (element.textContent == "Start") {
      timeoutid = setInterval(starttimer, 10);
      btn1.disabled = true;
      btn2.disabled = false;
    } else if (element.textContent == "Stop") {
      stoptimer();
      btn1.disabled = false;
      btn2.disabled = true;
    } else if (element.textContent == "Reset") {
      resettimer();
      display.textContent = "00:00:00";
      btn1.disabled = false;
      btn2.disabled = false;
    }
  });
});
const starttimer = () => {
  ms++;
  console.log(ms);
  if (ms > 99) {
    ms = 0;
    s++;

    if (s > 59) {
      s = 0;
      m++;
    }
    if (m > 59) {
      m = 0;
      h++;
    }
  }
  let fh = h < 10 ? "0" + h : h;
  let fm = m < 10 ? "0" + m : m;
  let fs = s < 10 ? "0" + s : s;
  let fms = ms < 10 ? "0" + ms : ms;
  display.textContent = `${fh}:${fm}:${fs}.${fms}`;
};
const stoptimer = () => {
  clearInterval(timeoutid);
};
const resettimer = () => {
  clearInterval(timeoutid);
  h = m = s = ms = 0;
};
