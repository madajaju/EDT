// This function loads JSON data using XMLHttpRequest
const myIndex = lunr.Index.load(lobjects.index);

// Perform the search based on input
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (!searchTerm) {
        return; // Don't search if input is empty
    }

    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (myIndex && lobjects.documents) {
        const results = myIndex.search(searchTerm); // Search using Lunr.js
        console.log('Search results:', results);

        if (results.length === 0) {
            resultsContainer.innerHTML = '<li>No results found</li>';
            return;
        }
      

        const sortedResults = results.sort((a, b) => {
            const docA = lobjects.documents[a.ref];
            const docB = lobjects.documents[b.ref];

            const extractNumber = (title) => {
                const match = title.match(/#(\d+)/);
                return match ? parseInt(match[1], 10) : null;
            };

            const numA = extractNumber(docA.title);
            const numB = extractNumber(docB.title);

            if (numA !== null && numB !== null) {
                return numB - numA; // If both have numbers, sort by number
            } else if (numA !== null) {
                return -1; // If only A has a number, A comes first
            } else if (numB !== null) {
                return 1; // If only B has a number, B comes first
            } else {
                return docA.title.localeCompare(docB.title); // Fallback to alphabetical if no number
            }
        });

        // Loop through results and display them
        sortedResults.forEach(result => {
            const doc = lobjects.documents[result.ref];
            if (doc) {
                const listItem = document.createElement('li');
                listItem.style.listStyleType = 'none';
                listItem.style.padding = '10px';

                listItem.innerHTML = `
                    <a href = "${doc.link}" style = "display: flex; align-items: center; text-decoration: none; gap: 10px;" >
                    <img src = "${doc.image}" alt = "${doc.title}" style = "width: 75px; height: auto; flex-shrink: 0;" >
                    <div> 
                        <strong> ${doc.title}</strong> - ${ doc.type }
                        <br>
                        ${doc.summary.substring(0, 100)}${doc.summary.length > 100 ? '...' : ''}
                    </div>
                    </a>`;
                resultsContainer.appendChild(listItem);
            }
        });
    } else {
        console.error('Index or document data is not loaded yet.');
    }
}

// Add event listener to the input for live search on Enter key
document.getElementById('searchInput').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    // Get the "query" parameter from the URL
    const queryValue = getQueryParam('query');

    // If a query is present, populate the search input field
    if (queryValue) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = queryValue;
            performSearch();
        }
    }
});