let clickCount = 0;

function handleDownloadClick() {
    clickCount++;

    if (clickCount === 1 || clickCount === 2) {
        // Redirect to Google Ads on the first two clicks
        window.open('https://www.google.com', '_blank');
    } else if (clickCount === 3) {
        // Proceed to download the movie on the third click
        downloadMovie();
    }
}

function downloadMovie() {
    // Replace this with the actual download URL for the movie
    const downloadUrl = 'path_to_movie_file.mp4';
    window.location.href = downloadUrl;
}









// Array of movies and TV series available on the site (excluding 18+ section)
const movieDatabase = [
    { title: "Movie Title 1", category: "Hollywood", link: "hollywood.html" },
    { title: "Movie Title 2", category: "Bollywood", link: "bollywood.html" },
    { title: "TV Series Title 1", category: "TV Series", link: "tvseries.html" },
    { title: "Movie Title 3", category: "Nollywood", link: "nollywood.html" },
    { title: "Movie Title 4", category: "Hollywood", link: "hollywood.html" },
    { title: "TV Series Title 2", category: "TV Series", link: "tvseries.html" },
    { title: "Movie Title 5", category: "Genre", link: "genre.html" },
    // More movies and series...
];

function performSearch() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = '';  // Clear previous results

    if (query === '') {
        resultsContainer.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }

    // Filter through the movieDatabase to match the query (excluding 18+ section)
    const filteredResults = movieDatabase.filter(movie =>
        movie.title.toLowerCase().includes(query)
    );

    if (filteredResults.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    // Display the filtered results
    filteredResults.forEach(movie => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");

        const resultLink = document.createElement("a");
        resultLink.href = movie.link;
        resultLink.textContent = `${movie.title} (${movie.category})`;

        resultItem.appendChild(resultLink);
        resultsContainer.appendChild(resultItem);
    });
}









<script>
  const movies = [
    { title: "Shoshana", releaseDate: "2024" },
    { title: "DIE HART 2", releaseDate: "2024" },
    { title: "TAROT", releaseDate: "2024" },
    { title: "BAD COMMENT", releaseDate: "2024" },
    { title: "Kesari Nollywood", releaseDate: "2024" },
    { title: "not-another-church 6", releaseDate: "2024" },
    { title: "Furiosa-A-Mad-Max-Saga-3", releaseDate: "2024" },
    { title: "His Dark Material S03", releaseDate: "2021" },
    // Add more movies if needed
  ];

  function handleSearch() {
    // Get the search input value
    const searchQuery = document.getElementById("search-input").value.toLowerCase();

    // Filter movies (excluding the 18+ section)
    const filteredMovies = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchQuery)
    );

    // Display search results (or show message if no results found)
    if (filteredMovies.length > 0) {
      alert(`Movies found: \n${filteredMovies.map(movie => movie.title).join("\n")}`);
    } else {
      alert("No movies found!");
    }

    // Prevent form submission (stay on the same page)
    return false;
  }
</script>








