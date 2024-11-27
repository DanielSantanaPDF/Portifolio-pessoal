function nav(){
document.getElementById('home').style.borderBottom='solid white 3px'
}

function Contato(){
document.getElementById('project').style.borderBottom='solid white 0px'
document.getElementById('home').style.borderBottom='solid white 0px'    
document.getElementById('contato').style.borderBottom='solid white 3px' 
document.getElementById('maincontent').style.transform='translateX(-100%)';
document.getElementById('maincontent').style.height='0px';
document.getElementById('bigbox').style.transform='translateY(-400%)';
document.getElementById('projetos').style.transform='translateX(-500%)';
document.getElementById('projetos').style.transform='translatey(200%)';
}
function home(){
document.getElementById('project').style.borderBottom='solid white 0px';     
document.getElementById('home').style.borderBottom='solid white 3px'
document.getElementById('contato').style.borderBottom='solid white 0px'
document.getElementById('maincontent').style.transform='translateX(0%)';
document.getElementById('maincontent').style.height='600px';
document.getElementById('bigbox').style.transform='translateY(400%)';
document.getElementById('projetos').style.transform='translatey(200%)';
}
function project(){
document.getElementById('project').style.borderBottom='solid white 3px';    
document.getElementById('contato').style.borderBottom='solid white 0px';
document.getElementById('home').style.borderBottom='solid white 0px';  
document.getElementById('maincontent').style.transform='translateX(-100%)'; 
document.getElementById('maincontent').style.height='0px';
document.getElementById('bigbox').style.transform='translateY(200%)';
document.getElementById('projetos').style.transform='translatey(-10%)';
}

function voltarsempre(){
    window.scrollTo(0,1);

}
setInterval(voltarsempre, 10);



