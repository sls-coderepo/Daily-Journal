

    const addModal = document.querySelector("#addJournalModal")
    const addModalBtn = document.querySelector("#btn-addJournal")
    const closeAddModalBtn = document.querySelector(".closeBtn")
    openAddModal = () => {
        addModal.style.display = "block"; 
    }
    closeAddModal = () => {
        addModal.style.display = "none";
    }
    
    
    addModalBtn.addEventListener("click", openAddModal); 
    closeAddModalBtn.addEventListener("click", closeAddModal); 
    
    const editModal = document.querySelector("#editJournalModal")
    const closeEditModalBtn = document.querySelector(".closeEditBtn")
    openEditModal = () => {
        editModal.style.display = "block"; 
    }
    closeEditModal = () => {
        editModal.style.display = "none";
    }
    closeEditModalBtn.addEventListener("click", closeEditModal); 





   
