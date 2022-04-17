// tenterxtober boberbaiober
// aienterimesoberufat

const textCode = document.querySelector(".area-code");
const textResult = document.querySelector(".resultado-text");
const btnDecrip = document.querySelector(".descrip");
const btnCrip = document.querySelector(".incrip");

const codificador = () => {
  let text = textCode.value;
  text = text.split("");
  text = text
    .map((i) => {
      switch (i) {
        case "a":
          return "ai";
          break;
        case "e":
          return "enter";
          break;
        case "i":
          return "imes";
          break;
        case "o":
          return "ober";
          break;
        case "u":
          return "ufat";
          break;
        default:
          return i;
      }
    })
    .join("");

  mostraResultado(text);
};

const descodificador = () => {
  let text = textCode.value;
  let a = { reg: /\ai/g, text: "a" };
  let e = { reg: /\enter/g, text: "e" };
  let i = { reg: /\imes/g, text: "i" };
  let o = { reg: /\ober/g, text: "o" };
  let u = { reg: /\ufat/g, text: "u" };
  const code = [a, e, i, o, u];
  code.forEach((i) => {
    text = text.replace(i.reg, i.text);
  });
  mostraResultado(text);
};

function mostraResultado(text) {
  console.log(text);
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
