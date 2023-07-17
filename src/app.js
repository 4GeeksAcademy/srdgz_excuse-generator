window.onload = function() {
  document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector("#excusa").innerHTML = generador();
  });
  console.log("");
};
let generador = function() {
  let pronombre = ["el", "un"];
  let sujeto = ["policía", "zorro", "perro", "conductor", "cómico", "ladrón"];
  let verbo = ["cogió mi", "quitó mi", "robó mi", "se llevó mi"];
  let objeto = ["coche", "zapato", "ordenador", "bolso"];
  let donde = ["en mi casa", "en la calle", "en el parque", "en el súper"];

  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let verboIndex = Math.floor(Math.random() * verbo.length);
  let objetoIndex = Math.floor(Math.random() * objeto.length);
  let dondeIndex = Math.floor(Math.random() * donde.length);

  return (
    pronombre[pronombreIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    verbo[verboIndex] +
    " " +
    objeto[objetoIndex] +
    " " +
    donde[dondeIndex]
  );
};
