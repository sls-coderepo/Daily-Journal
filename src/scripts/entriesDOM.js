import EntryComponent from "./entryComponent.js"
const EntriesDOM = {

     renderJournalEntries : (entries) => {
        document.querySelector(".journalList").innerHTML = "";
        entries.forEach(item => {
        let dailyJournal = EntryComponent.createJournalHTML(item)
        document.querySelector(".journalList").innerHTML += dailyJournal
    
    })
    },

    saveNewJournal: () =>
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
    }
}


export default EntriesDOM


