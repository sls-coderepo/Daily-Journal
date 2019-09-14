const EntryComponent = {
    createJournalHTML: function (journalObj) {
        return `
    <section class="journal_entry">
         <h3>Title: ${journalObj.concept}</h3>
         <p>Entry: ${journalObj.entry}</p>
         <p>Mood: ${journalObj.mood}</p>
         <p>Date: ${journalObj.date}</p>
         <button type="button" class="deleteButton" id="deleteDonut--${journalObj.id}">Delete</button>
         <button type="button" class="editButton" id="editDonut--${journalObj.id}">Edit</button>
         <hr>
        
    </section>
    `
    }
}

