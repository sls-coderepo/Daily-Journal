const EntryComponent = {
    createJournalHTML: function (journalObj) {
        return `
    <section class="journal_entry">
         <h3>${journalObj.concept}</h3>
         <p>${journalObj.entry}</p>
         <div class="flex-container-entry">
            <p class="flex-item-entry">Mood: ${journalObj.mood}</p>
            <p class="flex-item-entry">Posted On: ${journalObj.date}</p>
         </div>
         <button type="button" class="btn" id="deleteDonut--${journalObj.id}">Delete</button>
         <button type="button" class="btn" id="editDonut--${journalObj.id}">Edit</button>
         <hr>
        
    </section>
    `
    },
}


export default EntryComponent

    
       
        
    
    
