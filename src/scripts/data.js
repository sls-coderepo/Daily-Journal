let entriesAPI_URL = "http://localhost:8088/entries"
const API = {
    loadEntries: function() {
        fetch(entriesAPI_URL)
        .then(data => data.json())
        .then(parsedData => {
            renderJournalEntries(parsedData);
        })
     },

     saveEntry: function(entry) {
        return fetch(entriesAPI_URL, {
            method: 'POST',
            body: JSON.stringify(entry),
            headers: {
                'Content-Type': 'application/json'
            } 
         }).then (res => res.json()) 
          // .then(response => console.log('Success:', JSON.stringify(response)))
           .catch(error => console.log('Error:', error));
    }, 

    deleteEntry: (id) => {
        return fetch(`${entriesAPI_URL}/${id}`, {
            method: 'DELETE',
            
          })
          .then(response => response.json());
        }
}



