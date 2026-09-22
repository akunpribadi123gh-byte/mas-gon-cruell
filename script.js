const CONTACTS = {
  joki: {
    number: "6285863221803",
    message: "Halo Masgoncruell, Saya ingin memesan layanan : joki game"
  },
  stock: {
    number: "6283182784205",
    message: "Halo mas gon cruell, saya ingin membeli akun ff"
  },
  jp: {
    number: "6283182784382",
    message: "Halo mas gon cruell, saya ingin jasa post akun saya"
  }
};

function openWA(type){
  const data = CONTACTS[type];
  if(!data) return;
  const url = `https://wa.me/${data.number}?text=${encodeURIComponent(data.message)}`;
  window.open(url, "_blank");
}

function showInfo(text){
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}
