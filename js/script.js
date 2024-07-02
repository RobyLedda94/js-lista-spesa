// ARRAY CON LA LISTA DEGLI INGREDIENTI

const ingredienti = ['pomodori', 'peperoni', 'melanzane', 'pane', 'uova'];

// RECUPERO L'ELEMENTO LISTA SPESA DAL DOM

const lista_spesa = document.getElementById('lista-spesa');

// CREO LA VARABILE PER SCORRERE GLI INGREDIENTI

let i = 0;

// CREO IL CICLO WHILE

while (i < ingredienti.length) {
    // CREO UN ELEMENTO LI PER OGNI INGREDIENTE
    const elementoLista = document.createElement('li')
    // INSERISCO IL TESTO NELL'ELEMENTO LI
    elementoLista.innerHTML = ingredienti[i];
    // APPENDO I LIST ITEM ALL'INTERNO DELLA LISTA SPESA
    lista_spesa.append(elementoLista);
    // CONTATORE INCREMENTO
    i++;  
}

