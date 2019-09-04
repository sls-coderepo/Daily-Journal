
let entriesAPI_URL = "http://localhost:3000/entries"

function createJournalHTML(journalObj) {
    return `
    <section class="journal_entry">
         <h2>${journalObj.concept}</h2>
         <p>${journalObj.entry}</p>
         <p>${journalObj.mood}</p>
         <p>${journalObj.date}</p>
    </section>
    `
}

document.querySelector("#submit").addEventListener("click", (event) => {
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
   fetch(entriesAPI_URL, {
      method: 'POST',
      body: JSON.stringify(dailyJournal),
      headers: {
          'Content-Type': 'application/json'
      } 
   }).then (res => res.json()) 
     .then(response => console.log('Success:', JSON.stringify(response)))
     .catch(error => console.log('Error:', error));
     loadEntries();
    
});
 const loadEntries = () => {
    fetch(entriesAPI_URL)
    .then(data => data.json())
    .then(parsedData => {
        renderJournalEntries(parsedData);
    })
 }

const renderJournalEntries = (entries) => {
         entries.forEach(item => {
         let dailyJournal = createJournalHTML(item)
         document.querySelector(".journalList").innerHTML += dailyJournal
    
    })
}

loadEntries();







