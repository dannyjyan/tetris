import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Object(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
}

Object.prototype.draw = function() {
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.beginPath()
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}

Object.prototype.update = function() {
    this.draw()
}

// Implementation
let objects
function init() {
    objects = []

    for(let i = 0; i < 100; i ++) {
        let radius = 20 + (Math.random()*20);
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 8;
        let y =  Math.random() * (canvas.height -radius * 2) + radius;
        let dy = (Math.random() - 0.5) * 8;    
        let circle = new Circle(x,dx,y,dy, radius);
        c.draw(circle)
        objects.push(circle);
    }

    for (let i = 0; i < 400; i++) {
        // objects.push()
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    objects.forEach(object => {
     object.update()
    })
}

class Circle {
    constructor(x, dx, y , dy, rad){
        this.x = x
        this.dx = dx
        this.y =  y;
        this.dy = dy
        this.radius = rad;
    }
    
}

init()
animate()
