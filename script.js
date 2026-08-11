const feedbacks = document.querySelectorAll(".feedback-card");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close");

feedbacks.forEach(feedback => {

    const img = feedback.querySelector("img");

    feedback.addEventListener("click", () => {

        modalImg.src = img.src;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


function fecharModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

    modalImg.src = "";

}


closeModal.addEventListener("click", fecharModal);


modal.addEventListener("click", event => {

    if (event.target === modal) {
        fecharModal();
    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        fecharModal();
    }

});
