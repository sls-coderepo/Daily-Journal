
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
                document.querySelector("#journalEntry").value = response.entry;
                openModal();
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


