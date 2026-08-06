const usnClasses = {
    battleships: [
        ['Connecticut', 'Pre-dreadnought battleship'],
        ['Colorado', 'Standard-type battleship'],
        ['Delaware', 'Dreadnought battleship'],
        ['Florida', 'Dreadnought battleship'],
        ['Iowa', 'Fast battleship'],
        ['Kearsarge', 'Pre-dreadnought battleship'],
        ['Nevada', 'Standard-type battleship'],
        ['New Mexico', 'Standard-type battleship'],
        ['New York', 'Dreadnought battleship'],
        ['North Carolina', 'Fast battleship'],
        ['Pennsylvania', 'Standard-type battleship'],
        ['South Carolina', 'Dreadnought battleship'],
        ['South Dakota', 'Fast battleship'],
        ['Tennessee', 'Standard-type battleship'],
        ['Virginia', 'Pre-dreadnought battleship'],
        ['Wyoming', 'Dreadnought battleship']
    ],
    carriers: [
        ['Essex', 'Fleet aircraft carrier'],
        ['Forrestal', 'Supercarrier'],
        ['Independence', 'Light aircraft carrier'],
        ['Langley', 'Aircraft carrier'],
        ['Lexington', 'Fleet aircraft carrier'],
        ['Midway', 'Fleet aircraft carrier'],
        ['Ranger', 'Fleet aircraft carrier'],
        ['Saipan', 'Light aircraft carrier'],
        ['Wasp', 'Fleet aircraft carrier'],
        ['Yorktown', 'Fleet aircraft carrier']
    ],
    heavyCruisers: [
        ['Baltimore', 'Heavy cruiser'],
        ['Des Moines', 'Heavy cruiser'],
        ['New Orleans', 'Heavy cruiser'],
        ['Northampton', 'Heavy cruiser'],
        ['Oregon City', 'Heavy cruiser'],
        ['Pensacola', 'Heavy cruiser'],
        ['Portland', 'Heavy cruiser'],
        ['Wichita', 'Heavy cruiser']
    ],
    lightCruisers: [
        ['Atlanta', 'Light anti-aircraft cruiser'],
        ['Brooklyn', 'Light cruiser'],
        ['Chester', 'Light cruiser'],
        ['Cleveland', 'Light cruiser'],
        ['Omaha', 'Light cruiser']
    ],
    largeCruisers: [
        ['Alaska', 'Large cruiser']
    ],
    destroyers: [
        ['Allen M. Sumner', 'Destroyer'],
        ['Bagley', 'Destroyer'],
        ['Benham', 'Destroyer'],
        ['Benson and Gleaves', 'Destroyer'],
        ['Caldwell', 'Destroyer'],
        ['Charles F. Adams', 'Guided-missile destroyer'],
        ['Clemson', 'Destroyer'],
        ['Farragut', 'Destroyer'],
        ['Fletcher', 'Destroyer'],
        ['Forrest Sherman', 'Destroyer'],
        ['Gearing', 'Destroyer'],
        ['Gridley', 'Destroyer'],
        ['Mahan', 'Destroyer'],
        ['Mitscher', 'Destroyer'],
        ['Porter', 'Destroyer'],
        ['Sims', 'Destroyer'],
        ['Wickes', 'Destroyer']
    ]
};

function renderUsnClasses(gridId, classes) {
    const grid = document.querySelector(`#${gridId}`);

    classes
        .sort((first, second) => first[0].localeCompare(second[0], 'en', { sensitivity: 'base' }))
        .forEach(([className, description]) => {
            const card = document.createElement('a');
            card.className = 'ship-card';
            card.href = '#';

            const name = document.createElement('span');
            name.className = 'ship-name';
            name.textContent = `${className}-class`;

            const details = document.createElement('span');
            details.className = 'ship-description';
            details.textContent = description;

            card.append(name, details);
            grid.appendChild(card);
        });
}

renderUsnClasses('usn-battleship-grid', usnClasses.battleships);
renderUsnClasses('usn-carrier-grid', usnClasses.carriers);
renderUsnClasses('usn-ca-grid', usnClasses.heavyCruisers);
renderUsnClasses('usn-cl-grid', usnClasses.lightCruisers);
renderUsnClasses('usn-cb-grid', usnClasses.largeCruisers);
renderUsnClasses('usn-destroyer-grid', usnClasses.destroyers);

const specialGrid = document.querySelector('#usn-special-grid');
const prizeCard = document.createElement('a');
prizeCard.className = 'ship-card';
prizeCard.href = '#';

const prizeName = document.createElement('span');
prizeName.className = 'ship-name';
prizeName.textContent = 'Prinz Eugen';

const prizeDescription = document.createElement('span');
prizeDescription.className = 'ship-description';
prizeDescription.textContent = 'German heavy cruiser · US war prize';

prizeCard.append(prizeName, prizeDescription);
specialGrid.appendChild(prizeCard);
