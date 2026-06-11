const imagens = document.querySelectorAll(".feedbacks img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

imagens.forEach(img=>{
    img.addEventListener("click",()=>{
        modal.style.display="flex";
        modalImg.src = img.src;
    });
});

modal.addEventListener("click",()=>{
    modal.style.display="none";
});

function openTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  const tabs = document.querySelectorAll(".tab");

  contents.forEach(c => c.classList.remove("active"));
  tabs.forEach(t => t.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}
