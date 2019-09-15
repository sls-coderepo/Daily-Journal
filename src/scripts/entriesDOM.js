
document.querySelector("#btn-save").addEventListener("click", (event) => {
    const journalDate = document.querySelector("#journalDate").value
    const concept = document.querySelector("#conceptCovered").value
    const entry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#moodOfTheDay").value

    const dailyJournal = {
        date: journalDate,
        concept: concept,
        entry: entry,
        mood: mood
    }
     API.saveEntry(dailyJournal).then(()=>{
        API.loadEntries();
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

const renderJournalEntries = (entries) => {
    document.querySelector(".journalList").innerHTML = "";
    entries.forEach(item => {
    let dailyJournal = EntryComponent.createJournalHTML(item)
    document.querySelector(".journalList").innerHTML += dailyJournal

})
}
 
API.loadEntries();


