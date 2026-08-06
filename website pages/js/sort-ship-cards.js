document.querySelectorAll('.ship-grid').forEach((grid) => {
    const cards = [...grid.querySelectorAll('.ship-card')];

    cards.sort((first, second) => {
        const firstName = first.querySelector('.ship-name')?.textContent.trim() || '';
        const secondName = second.querySelector('.ship-name')?.textContent.trim() || '';
        return firstName.localeCompare(secondName, 'en', { sensitivity: 'base' });
    });

    cards.forEach((card) => grid.appendChild(card));
});
