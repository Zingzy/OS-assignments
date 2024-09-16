const shapes = [
    "quad-circle-1",
    "quad-circle-2",
    "quad-circle-3",
    "quad-circle-4",
    "triangle-1",
    "triangle-2",
    "triangle-3",
    "triangle-4",
    "circle",
    "hexagon",
    "leaf",
    "leaf-2",
];
const colors = ["#c73195", "#93278c", "#a1a1f3", "#4c207f",];
const boxes = document.querySelectorAll(".container div");
function generatePattern() {
    boxes.forEach((box) => {
        box.className = "";
        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length);
        box.classList.add(shapes[i]);
        box.style.backgroundColor = colors[j];
    });
};
generatePattern();