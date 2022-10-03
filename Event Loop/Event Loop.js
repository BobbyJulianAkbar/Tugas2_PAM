const detik = new Date().getTime() / 1000;

setTimeout(() => {
  console.log(`Output keluar setelah ${new Date().getTime() / 1000 - detik} detik`);
}, 500)

while (true) {
  if (new Date().getTime() / 1000 - detik >= 2) {
    console.log("Loop selama 2 detik");
    break;
  }
}