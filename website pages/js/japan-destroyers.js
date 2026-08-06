const destroyerGrid = document.querySelector('#destroyer-grid');

const destroyerClasses = [
    ['Wakatake', 'wakatake'],
    ['Minekaze', 'minekaze'],
    ['Isokaze', 'isokaze'],
    ['Kamikaze', 'kamikaze'],
    ['Mutsuki', 'mutsuki'],
    ['Fubuki', 'fubuki'],
    ['Hatsuharu', 'hatsuharu'],
    ['Akatsuki', 'akatsuki'],
    ['Shiratsuyu', 'shiratsuyu'],
    ['Akizuki', 'akizuki'],
    ['Kagerō', 'kagero'],
    ['Asashio', 'asashio'],
    ['Yūgumo', 'yugumo'],
    ['Minegumo', 'minegumo'],
    ['Shimakaze', 'shimakaze']
];

for (const [className, slug] of destroyerClasses.sort((first, second) => first[0].localeCompare(second[0], 'en', { sensitivity: 'base' }))) {
    const card = document.createElement('a');
    card.className = 'ship-card';
    card.href = `../ship pages/IJN/classes/${slug}.html`;

    const name = document.createElement('span');
    name.className = 'ship-name';
    name.textContent = `${className}-class`;

    const description = document.createElement('span');
    description.className = 'ship-description';
    description.textContent = 'View class ships';

    card.append(name, description);
    destroyerGrid.appendChild(card);
}
