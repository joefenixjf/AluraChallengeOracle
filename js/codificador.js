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

const encriptador = (e) => {
  let text = textCode.value;
  let classe = e.target.getAttribute("class");
  for (prop in code) {
    if (classe == "incrip") {
      let reg = new RegExp(`\\${prop}`, "g");
      text = text.replace(reg, code[prop]);
    } else {
      let reg = new RegExp(`\\${code[prop]}`, "g");
      text = text.replace(reg, prop);
    }
  }
  mostraResultado(text);
};

const copyText = (i) => {
  alert("texto copiado");
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

btnCrip.addEventListener("click", encriptador);
btnDecrip.addEventListener("click", encriptador);
btnCopy.addEventListener("click", copyText);
