function pepperSpawn () {
    let pepper = document.createElement('span');
    pepper.classList.add('pepper');
    pepper.innerHTML = 'PEPPERS!';
    pepper.style.color = randomColor();
    pepper.style.fontSize = randomFontSize();
    pepper.style.top = randomTopPosition();
    pepper.style.left = randomLeftPosition();
    document.body.appendChild(pepper);
}

function randomColor () {
    let color = [
        '#A0EE20', '#FF3333', '#FFB833',
        '#FFE856'
    ];

    rColorGen = color[Math.floor(Math.random() * color.length)];

    return rColorGen;
}

function randomFontSize () {
    let size = [
        '10px', '100px', '60px',
        '50px', '80px', '20px',
        '30px', '90px'
    ];

    rSizeGen = size[Math.floor(Math.random() * size.length)];
    
    return rSizeGen;

}

function randomTopPosition () {
    let topPos = [
        '90px', '100px', '50px',
        '40px', '30px', '150px',
        '130px', '400px', '300px',
        '230px', '250px', '500px',
        '430px', '480px', '560px'
    ];

    topGen = topPos[Math.floor(Math.random() * topPos.length)];
    
    return topGen;
}

function randomLeftPosition () {
    let leftPos = [
        '250px', '100px', '300px',
        '40px', '80px', '150px',
        '130px', '230px', '350px',
        '400px', '450px', '500px',
        '430px', '10px', '600px',
        '630px', '650px', '740px',
        '700px', '810px', '850px',
        '880px', '930px', '980px',
        '1000px', '1050px', '1300px'
    ];
    
    leftGen = leftPos[Math.floor(Math.random() * leftPos.length)];
    
    return leftGen;
}



document.getElementById('habanero').addEventListener('click', pepperSpawn);