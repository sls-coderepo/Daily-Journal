let journalEntry = {
   
}

let journalEntries = [];


function addJournal(){
    journalEntry.journalDate = document.getElementById("journalDate").value;
    journalEntry.conceptCovered = document.getElementById("conceptCovered").value;
    journalEntry.journalEntry = document.getElementById("journalEntry").value;
    journalEntry.moodOfTheDay = document.getElementById("moodOfTheDay").value;

    journalEntries.push(journalEntry);
    console.log(journalEntries)
}