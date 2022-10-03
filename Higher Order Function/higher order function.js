const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function Genap(angka) {
  const Modulo = [];
  for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 == 0) {
      Modulo.push(angka[i]);
    }
  }
  return Modulo;
}
console.log(Genap(angka));