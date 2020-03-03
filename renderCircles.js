function renderCircles(circles) {
    function drawCircle(circles) {
        return `
        <div style=
            "width: ${circles.radius}px; 
            height: ${circles.height}px;
            background-color: ${circles.color};
            border-radius: ${circles.radius}px">
        </div>
        `
    }
    return `
    ${circles.map(drawCircle).join("")}
    `
}

    

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}