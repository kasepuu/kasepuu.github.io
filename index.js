import { floatingElement } from "./javascript/floatingelement.js"

function setupBackground(){
  let userDetails = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i
  let isOnMobile = regexp.test(userDetails)
  console.log(isOnMobile ? "Welcome, Mobile user!": "Welcome!")
  document.body.background = isOnMobile ? "background_smallres.jpg" : "background.jpg" // "background_huvitav.jpg"
  document.body.className = isOnMobile ? "mobile": "pc"
}

setupBackground()
floatingElement()

document.addEventListener("DOMContentLoaded", () => {
  const buttons = [
    document.getElementById("btn-countdown"),
    document.getElementById("btn-snake"),
    document.getElementById("btn-leksikas")
  ];
  const padding = 20;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  buttons.forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      const href = btn.getAttribute('data-href');
      if (href) window.location.href = href;
    });
    btn.style.visibility = 'hidden';
    btn.style.left = '0px';
    btn.style.top = '0px';
    document.body.appendChild(btn);
    const rect = btn.getBoundingClientRect();
    const btnWidth = rect.width;
    const btnHeight = rect.height;
    const maxLeft = Math.max(0, vw - btnWidth - padding);
    const maxTop = Math.max(0, vh - btnHeight - padding);
    const left = Math.random() * (maxLeft - padding) + padding;
    const top = Math.random() * (maxTop - padding) + padding;
    btn.style.left = `${left}px`;
    btn.style.top = `${top}px`;
    btn.style.visibility = '';
  });
});