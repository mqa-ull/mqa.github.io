let nombre = "Mónica Quintana Ansaldo"; //String
let edad = 25; //Number
let programacion = true; //Boolean

const persona = { //Objeto
    name: nombre,
    age: edad,
    likes_programming: programacion
};

const intereses = ["Cycling", "Gardening", "Reading"]; //Array
                  //Montar en bici, Jardinería, Leer

persona.hobbies = intereses;

function mostrarInfo() {
    return persona;
}

console.log("person: ", mostrarInfo());

let universidad = "Universidad de La Laguna";
let master = true;
let finalizacion = 2026;

const estudios = ["Physics", "Astrophysics"];

const titulos = {
    degrees: estudios,
    master: master,
    university: universidad,
    finished_year: finalizacion
};

function mostrarEstudios(){
    return titulos;
}

console.log(mostrarEstudios());