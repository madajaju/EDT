let index = {};
let docs = {};
fetch('assets/js/lunr-index-en.json')
    .then(response => response.json())
    .then(data => {
        index = lunr.Index.load(data);
        fetch(`assets/js/docs-en.json`)
            .then(response => response.json())
            .then(data => {
                docs = data;
            })
            .catch(e => console.error("Docs Error:", e))
    })
    .catch(error => console.error("Error:", error))

// Function to perform search and display results
function performSearch() {
    var searchTerm = document.getElementById('searchInput').value;
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    var results = index.search(searchTerm);
    results.forEach(function (result) {
        var doc = docs[result.ref];
        var listItem = document.createElement('li');
        listItem.innerHTML =
            `<div style="display: flex;" class="entry"><p class="episode"><img class="thumbnail" src="${doc.image}" width="100"><a href="${doc.link}">${doc.type} - ${doc.title}</a><br>${doc.summary}</p></div>`;
        resultsContainer.appendChild(listItem);
    });
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', performSearch);
