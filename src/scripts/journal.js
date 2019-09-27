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
    const dailyJournal = EntriesDOM.getJournalFromAddForm()
    API.saveEntry(dailyJournal).then(() => {
        API.loadEntries();
    })
    closeAddModal();
})

document.querySelector("#btn-save-changes").addEventListener("click", (event) => {
    const dailyJournal = EntriesDOM.getJournalFromEditForm()
    API.updateEntry(dailyJournal).then(() => {
        API.loadEntries();
    })
    closeEditModal();
});

document.querySelector(".journalList").addEventListener("click", (event) => {
    if(event.target.id.startsWith("deleteJournal--")){
        
        
        API.deleteEntry(event.target.id.split("--")[1])
            .then(response => {
                document.querySelector(".journalList").innerHTML = " ";
                API.loadEntries()
            })
    }
})

document.querySelector(".journalList").addEventListener("click", (event) => {
    if(event.target.id.startsWith("editJournal--")){

        API.getJournalEntryById(event.target.id.split("--")[1])
            .then(response => {
                EntriesDOM.loadEditJournalForm(response)
                openEditModal();
                console.log(response)
            })
    }
})

document.querySelector("#filerByMood").addEventListener("click", (event) => {
    if (event.target.name.startsWith("mood")) {
        const selectedMood = document.querySelector('input[name="mood"]:checked').value;
        const searchTerm = event.target.value
        API.loadEntries(selectedMood,searchTerm);
    }
})

document.querySelector("#conceptCovered, conceptCoveredEdit").addEventListener("keyup", (event) => {
    if (event.target.value.length > 50){
        alert("Too many characters in concept")
    }
   })

   document.querySelector("#search-field").addEventListener("keyup", event => {
       if(event.keyCode === 13) {
           const searchTerm = event.target.value
           let selectedMood = undefined;
           if(document.querySelector('input[name="mood"]:checked'))
           {
             selectedMood = document.querySelector('input[name="mood"]:checked').value;
           }
           
           console.log(searchTerm)
           API.loadEntries(selectedMood, searchTerm)
       }
   })

API.loadEntries();