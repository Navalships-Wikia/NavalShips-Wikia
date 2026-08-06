const cruiserGrid = document.querySelector('#cruiser-class-grid');

const cruiserClasses = [
    ['Furutaka', 'furutaka'],
    ['Aoba', 'aoba'],
    ['Myōkō', 'myoko'],
    ['Takao', 'takao'],
    ['Mogami', 'mogami'],
    ['Tone', 'tone'],
    ['Tenryū', 'tenryu'],
    ['Kuma', 'kuma'],
    ['Nagara', 'nagara'],
    ['Sendai', 'sendai'],
    ['Yūbari', 'yubari'],
    ['Katori', 'katori'],
    ['Agano', 'agano'],
    ['Ōyodo', 'oyodo'],
    ['Ning Hai', 'ning-hai']
];

for (const [className, slug] of cruiserClasses.sort((first, second) => first[0].localeCompare(second[0], 'en', { sensitivity: 'base' }))) {
    const card = document.createElement('a');
    card.className = 'ship-card';
    const nationFolder = slug === 'ning-hai' ? 'ROC' : 'IJN';
    card.href = `../ship pages/${nationFolder}/classes/${slug}.html`;

    const name = document.createElement('span');
    name.className = 'ship-name';
    name.textContent = `${className}-class`;

    const description = document.createElement('span');
    description.className = 'ship-description';
    description.textContent = 'View class ships';

    card.append(name, description);
    cruiserGrid.appendChild(card);
}
