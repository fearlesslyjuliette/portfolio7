const audiovisuales =
[
    {
        nombre: "Se busca a Robin",
        año: 2022,
        rol: ["producción"],
        poster: "fotosaudiovisuales/SeBuscaaRobinPoster.jpg",
        video: "https://youtu.be/MKOUvVoLiXk",
        descripcion: "Cortometraje rodado en el marco del 48hs Film Project Punta del Este. ",

    },

    {
        nombre: "La Cotidiana",
        año: 2022,
        rol: ["guión","producción"],
        poster: "fotosaudiovisuales/LaCotidianaPoster.jpeg",
        video: "https://youtu.be/bfxEk-F5n74",
        descripcion: "Cortometraje rodado en el marco del Desafío: Terror en 1 toma presentado por el Festival Detour. ",
    },

    {
        nombre: "Lo Verde del Bosque",
        año: 2020,
        rol: ["guión"],
        poster: "fotosaudiovisuales/LoVerdedelBosquePoster.jpg",
        video: "https://www.youtube.com/watch?v=swHmh8vbdJQ&t=4s",
        descripcion: "Cortometraje rodado en el marco del 48hs Film Project Punta del Este. ",
    },
]

let texto1 = "";

for (let i = 0; i<audiovisuales.length; i++)
{
    texto1 +=
    `<div class="col-lg-3 col-md-6 col-sm-12 p-1"> 
        <div class="card">
            <img src=${audiovisuales[i].poster} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${audiovisuales[i].nombre}</h5>
                <p class="card-text">${audiovisuales[i].descripcion}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${audiovisuales[i].año}</li>
                <li class="list-group-item">${audiovisuales[i].rol}</li>
            </ul>
            <div class="card-body">
                <a class="btn btn-dark" href=${audiovisuales[i].video} role="button" target=_blank>
                    Link
                </a>
            </div>
        </div>
    </div>
    `
}

console.log("a"+texto1);

document.getElementById('listatrabajos1').innerHTML =texto1;
