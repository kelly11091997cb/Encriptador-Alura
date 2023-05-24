const caja_texto = document.querySelector('.caja_texto');
const texto_resultado = document.querySelector('.texto_resultado');
const mensaje_no_encontrado = document.querySelector('.mensaje_no_encontrado');
const btn_encriptar = document.querySelector('.btn_encriptar');
const btn_desencriptar = document.querySelector('.btn_desencriptar');
const btn_copiar = document.querySelector('.btn_copiar');
const contenedor_dibujo = document.querySelector('.contenedor_dibujo');
const contenedor_parrafo = document.querySelector('.contenedor_parrafo');

// Crear las funciones
function encriptar() {
    let texto = String(caja_texto.value)
    if (texto.trim() === '') {

    } else {
        mensaje_no_encontrado.classList.add('ocultar')
        contenedor_dibujo.classList.add('ocultar')
        contenedor_parrafo.classList.add('opacidad')
        let texto_encriptado = ''
        let obj_letters = { a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat',
        }
        texto_encriptado = texto.replace(/a|e|i|o|u/g, function (letters) {
            return obj_letters[letters]
        })
        console.log(texto_encriptado)
        texto_resultado.textContent = texto_encriptado
    }
}

function desencriptar() {
    let texto1 = String(caja_texto.value)
    if (texto1.trim() === '') {

    } else {
        mensaje_no_encontrado.classList.add('ocultar')
        contenedor_dibujo.classList.add('ocultar')
        contenedor_parrafo.classList.add('opacidad')

        let texto_desencriptado = ''
        let obj_letters = { ai: 'a', enter: 'e', imes: 'i', ober: 'o',
            ufat: 'u',
        }
        texto_desencriptado = texto1.replace(/ai|enter|imes|ober|ufat/g, function (letters) {
            return obj_letters[letters];
        });
        console.log(texto_desencriptado);
        texto_resultado.textContent = texto_desencriptado;
    }
}

function copiar_palabra_encriptada() {
    let copiartext = texto_resultado.textContent
    if (copiartext.trim() === '') {

    } else {
        navigator.clipboard.writeText(copiartext)
        caja_texto.select()
        caja_texto.focus()
    }
}

//solo introducir letras minúsculas y sin acentos
caja_texto.addEventListener('input', function () {
    let textinput = caja_texto.value;
    textinput = textinput.toLowerCase().replace(/[^a-zñ\s]/g, '')
    caja_texto.value = textinput
});

btn_encriptar.addEventListener('click', encriptar)
btn_desencriptar.addEventListener('click', desencriptar)
btn_copiar.addEventListener('click', copiar_palabra_encriptada)
caja_texto.addEventListener('input', () => {
    caja_texto.style.height = 'auto'
    caja_texto.style.height = `${caja_texto.scrollHeight}px`;
});


