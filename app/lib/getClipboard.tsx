export const readClipboard = async () => {
  navigator.clipboard
    .readText()
    .then((text) => {
      console.log("Texto del portapapeles:", text);
    })
    .catch((err) => {
      console.error("Error al leer del portapapeles:", err);
    });
};
