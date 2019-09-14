

    var modal = document.querySelector("#addJournalModal")
    var modalBtn = document.querySelector("#btn-addJournal")
    var closeBtn = document.querySelector(".closeBtn")
    openModal = () => {
        modal.style.display = "block";
    }
    closeModal = () => {
        modal.style.display = "none";
    }
    
    
    modalBtn.addEventListener("click", openModal); 
    closeBtn.addEventListener("click", closeModal);
    






   
