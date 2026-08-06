const classKey = document.body.dataset.class;
const currentClass = classData[classKey];
const className = document.querySelector('#class-name');
const classType = document.querySelector('#class-type');
const shipGrid = document.querySelector('#class-ships');
const shipPages = {
    'Myōkō': '../../ship%20pages/IJN/myoko.html',
    'Kagerō': '../../ship%20pages/IJN/kagerou.html'
};

if (currentClass) {
    document.title = `NavalShips Wikia - ${currentClass.name}-class`;
    className.textContent = `${currentClass.name}-class`;
    classType.textContent = currentClass.type;

    currentClass.ships.forEach((ship) => {
        const card = document.createElement('a');
        card.className = 'ship-card';
        card.href = shipPages[ship] || '#';

        const name = document.createElement('span');
        name.className = 'ship-name';
        name.textContent = ship;

        const description = document.createElement('span');
        description.className = 'ship-description';
        description.textContent = `${currentClass.name}-class ${currentClass.type.slice(0, -1).toLowerCase()}`;

        card.append(name, description);
        shipGrid.appendChild(card);
    });
} else {
    className.textContent = 'Class not found';
}
