import API from "./data.js"
import EntryComponent from "./entryComponent.js"
import EntriesDOM from "./entriesDOM.js"

    const addModal = document.querySelector("#addJournalModal")
    const addModalBtn = document.querySelector("#btn-addJournal")
    const closeAddModalBtn = document.querySelector(".closeBtn")
    const openAddModal = () => {
        addModal.style.display = "block"; 
    }
   const closeAddModal = () => {
        addModal.style.display = "none";
    }
    
    
    addModalBtn.addEventListener("click", openAddModal); 
    closeAddModalBtn.addEventListener("click", closeAddModal); 
    
    const editModal = document.querySelector("#editJournalModal")
    const closeEditModalBtn = document.querySelector(".closeEditBtn")
    const openEditModal = () => {
        editModal.style.display = "block"; 
    }
    const closeEditModal = () => {
        editModal.style.display = "none";
    }
    closeEditModalBtn.addEventListener("click", closeEditModal);  


document.querySelector("#btn-save").addEventListener("click", (event) => {
    
    EntriesDOM.saveNewJournal().then((dailyJournal)=>{
        API.saveEntry(dailyJournal).then(()=>{
            API.loadEntries();
         })
    })
    closeModal();
});

document.querySelector("#btn-save-changes").addEventListener("click", (event) => {
    const journalDate = document.querySelector("#journalDateEdit").value
    const concept = document.querySelector("#conceptCoveredEdit").value
    const entry = document.querySelector("#journalEntryEdit").value
    const mood = document.querySelector("#moodOfTheDayEdit").value
    const id = document.querySelector("#journalEntryId").value

    const dailyJournal = {
        date: journalDate,
        concept: concept,
        entry: entry,
        mood: mood,
        id : id
    }
     API.updateEntry(dailyJournal).then(()=>{
        API.loadEntries();
     })
     closeEditModal();
});

document.querySelector(".journalList").addEventListener("click", (event) => {
    if(event.target.id.startsWith("deleteDonut--")){
        
        
        API.deleteEntry(event.target.id.split("--")[1])
           .then(response => {
               document.querySelector(".journalList").innerHTML = " ";
               API.loadEntries()
           })
    }
})

document.querySelector(".journalList").addEventListener("click", (event) => {
    if(event.target.id.startsWith("editDonut--")){

        API.getJournalEntryById(event.target.id.split("--")[1])
            .then(response => {
                document.querySelector("#journalEntryEdit").value = response.entry;
                document.querySelector("#journalDateEdit").value = response.date;
                document.querySelector("#conceptCoveredEdit").value = response.concept;
                document.querySelector("#moodOfTheDayEdit").value = response.mood;
                document.querySelector("#journalEntryId").value = response.id;
                openEditModal();
             console.log(response)
            })
    }
})

 
API.loadEntries();


     





   
