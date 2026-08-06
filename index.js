const searchInput = document.querySelector('#ship-search-input');
const searchableItems = [...document.querySelectorAll('[data-searchable]')];
const searchStatus = document.querySelector('#search-status');
const noResults = document.querySelector('#no-results');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    searchableItems.forEach((item) => {
        const matches = !query || item.dataset.searchable.includes(query);
        item.hidden = !matches;
        if (matches) {
            visibleCount += 1;
        }
    });

    noResults.hidden = !query || visibleCount > 0;
    searchStatus.textContent = query
        ? `${visibleCount} matching result${visibleCount === 1 ? '' : 's'} found.`
        : 'Search the featured and recently added ships below.';
});
