import EntryComponent from "./entryComponent.js"
const EntriesDOM = {

     renderJournalEntries : (entries, selectedMood) => {
         if(selectedMood!=undefined)
         {
            entries = entries.filter(function(entry){
                return entry.mood == selectedMood;
            })
         }
        document.querySelector(".journalList").innerHTML = "";
        entries.forEach(item => {
        let dailyJournal = EntryComponent.createJournalHTML(item)
        document.querySelector(".journalList").innerHTML += dailyJournal
    
    })
    },

    getJournalFromAddForm: () =>
    {
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
        return dailyJournal;
    },

    getJournalFromEditForm: () =>
    {
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
        return dailyJournal;
    },

    loadEditJournalForm: (journal)=>
    {
        document.querySelector("#journalEntryEdit").value = journal.entry;
        document.querySelector("#journalDateEdit").value = journal.date;
        document.querySelector("#conceptCoveredEdit").value = journal.concept;
        document.querySelector("#moodOfTheDayEdit").value = journal.mood;
        document.querySelector("#journalEntryId").value = journal.id;
    }
}


export default EntriesDOM


