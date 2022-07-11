const listaSpesa = ['pomodori',
                    'uova',
                    'latte',
                    'carne',
                    'formaggio',
                    'salmone',
                    'avocado',
                    'cereali',
                    'scottex',
                    'olive'
]

const listaspesaDom = document.getElementById ('listaspesa')

let i = 0;

while (i < listaSpesa.length ) {

    listaspesaDom.innerHTML += `<li>${listaSpesa[i]}</li>`;


    i++;
}