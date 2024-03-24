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