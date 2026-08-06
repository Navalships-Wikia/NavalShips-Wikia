const searchInput = document.querySelector('#ship-search-input');
const recentGrid = document.querySelector('#recent-grid');
const searchStatus = document.querySelector('#search-status');
const noResults = document.querySelector('#no-results');

const recentShips = [
    { name: 'Kongō', type: 'Battlecruiser · Japan', href: 'ship%20pages/IJN/kongo.html', search: 'kongo kongō battlecruiser japan', description: 'Explore the Kongō-class battlecruiser profile.' },
    { name: 'Nagato', type: 'Battleship · Japan', href: 'ship%20pages/IJN/nagato.html', search: 'nagato battleship japan', description: 'Read about Nagato’s history, armament, and specifications.' },
    { name: 'Kagerō', type: 'Destroyer · Japan', href: 'ship%20pages/IJN/kagerou.html', search: 'kagero kagerō destroyer japan', description: 'Explore one of the Imperial Japanese Navy’s destroyers.' },
    { name: 'Akagi', type: 'Aircraft carrier · Japan', href: 'ship%20pages/IJN/akagi.html', search: 'akagi aircraft carrier japan', description: 'Explore the Akagi aircraft carrier profile.' },
    { name: 'Kaga', type: 'Aircraft carrier · Japan', href: 'ship%20pages/IJN/kaga.html', search: 'kaga aircraft carrier japan', description: 'Explore the Kaga aircraft carrier profile.' },
    { name: 'Hōshō', type: 'Aircraft carrier · Japan', href: 'ship%20pages/IJN/hosho.html', search: 'hosho hōshō aircraft carrier japan', description: 'Explore the Hōshō aircraft carrier profile.' },
    { name: 'Shōkaku', type: 'Aircraft carrier · Japan', href: 'ship%20pages/IJN/shokaku.html', search: 'shokaku aircraft carrier japan', description: 'Explore the Shōkaku aircraft carrier profile.' },
    { name: 'Zuikaku', type: 'Aircraft carrier · Japan', href: 'ship%20pages/IJN/zuikaku.html', search: 'zuikaku aircraft carrier japan', description: 'Explore the Zuikaku aircraft carrier profile.' },
    { name: 'Furutaka', type: 'Heavy cruiser · Japan', href: 'ship%20pages/IJN/furutaka.html', search: 'furutaka heavy cruiser japan', description: 'Explore the Furutaka heavy cruiser profile.' },
    { name: 'Shirayuki', type: 'Destroyer · Japan', href: 'ship%20pages/IJN/shirayuki.html', search: 'shirayuki destroyer japan', description: 'Explore the Shirayuki destroyer profile.' },
    { name: 'Shiranui', type: 'Destroyer · Japan', href: 'ship%20pages/IJN/shiranui.html', search: 'shiranui destroyer japan', description: 'Explore the Shiranui destroyer profile.' },
    { name: 'Shinano', type: 'Aircraft carrier · Japan', href: 'ship%20pages/IJN/shinano.html', search: 'shinano aircraft carrier japan', description: 'Explore the Shinano aircraft carrier profile.' }
];

let recentOffset = 0;

function renderRecentShips() {
    recentGrid.replaceChildren();

    for (let index = 0; index < 3; index += 1) {
        const ship = recentShips[(recentOffset + index) % recentShips.length];
        const card = document.createElement('a');
        card.className = 'recent-card';
        card.href = ship.href;
        card.dataset.searchable = ship.search;

        const type = document.createElement('span');
        type.className = 'recent-type';
        type.textContent = ship.type;

        const name = document.createElement('strong');
        name.textContent = ship.name;

        const description = document.createElement('span');
        description.textContent = ship.description;

        card.append(type, name, description);
        recentGrid.appendChild(card);
    }
}

renderRecentShips();

const searchableItems = () => [...document.querySelectorAll('[data-searchable]')];

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    searchableItems().forEach((item) => {
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

window.setInterval(() => {
    if (!searchInput.value.trim()) {
        recentGrid.classList.remove('is-sliding');
        void recentGrid.offsetWidth;
        recentOffset = (recentOffset + 3) % recentShips.length;
        renderRecentShips();
        recentGrid.classList.add('is-sliding');
    }
}, 10000);
