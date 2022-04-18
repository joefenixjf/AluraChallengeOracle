const textCode = document.querySelector(".area-code");
const textResult = document.querySelector(".resultado-text");
const btnDecrip = document.querySelector(".descrip");
const btnCrip = document.querySelector(".incrip");
const btnCopy = document.querySelector(".resultado-btnCopy");
const code = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const codificador = () => {
  let text = textCode.value.split("");
  text = text
    .map((i) => {
      return code[i] || i;
    })
    .join("");

  mostraResultado(text);
};

const descodificador = () => {
  let text = textCode.value;
  for (let prop in code) {
    let reg = new RegExp(`\\${code[prop]}`, "g");
    text = text.replace(reg, prop);
  }
  mostraResultado(text);
};

const copyText = (i) => {
  const textoResultado = document
    .querySelector(".textoResultado")
    .getAttribute("placeholder");
  navigator.clipboard.writeText(textoResultado);
};

function mostraResultado(text) {
  textResult.innerHTML = `<textarea
      placeholder="${text}"
      cols="10"
      rows="5"
      class="textoResultado"
      disabled
    ></textarea>`;
}

btnCrip.addEventListener("click", codificador);
btnDecrip.addEventListener("click", descodificador);
btnCopy.addEventListener("click", copyText);
