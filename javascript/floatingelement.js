
export function floatingElement() {
    const element = document.getElementById("floating-element")
    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight
    let resetTimeout

    let left = 0
    let top = 0
    let direction = { X: 1, Y: 1 }
    var speed = 2

    function moveElement() {
        var currentX = left + element.offsetWidth
        var currentY = top + element.offsetWidth

        // X axis collision
        if (currentX >= windowWidth) {
            direction.X = -1
        } else if (left <= 0) {
            direction.X = 1
        }
        // Y axis collision
        if (currentY >= windowHeight) {
            direction.Y = -1
        } else if (top <= 0) {
            direction.Y = 1
        }

        // Movement
        left += speed * direction.X
        top += Math.sqrt(speed * speed) * direction.Y

        element.style.left = left + "px";
        element.style.top = top + "px";
        element.style.transform = "scaleX(" + direction.X + ")" + "scaleY(" + direction.Y + ")"

        requestAnimationFrame(moveElement)
    }

    moveElement()

    window.addEventListener("resize", () => {
        windowWidth = window.innerWidth
        windowHeight = window.innerHeight
    });

    element.addEventListener("mouseenter", () => {
        speed += Math.random() * 10 // increase speed on hover
        clearTimeout(resetTimeout)
    });

    element.addEventListener("mouseleave", () => {
        clearTimeout(resetTimeout)
        resetTimeout = setTimeout(() => {
            speed = 2
        }, 1000 + Math.random() * 500)
    });
}