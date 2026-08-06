const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const classDataPath = path.join(root, 'website pages/js/class-data.js');
const classDataSource = fs.readFileSync(classDataPath, 'utf8') + '\nthis.__classData = classData;';
const classDataContext = {};
vm.createContext(classDataContext);
vm.runInContext(classDataSource, classDataContext, { filename: classDataPath });

const errors = [];

function walk(directory) {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const entryPath = path.join(directory, entry.name);
        return entry.isDirectory() ? walk(entryPath) : [entryPath];
    });
}

function localTarget(fromFile, href) {
    if (!href || href.startsWith('#') || /^[a-z]+:/i.test(href) || href.startsWith('//')) {
        return null;
    }

    const withoutHash = href.split('#', 1)[0];
    if (!withoutHash || !withoutHash.endsWith('.html')) {
        return null;
    }

    return path.resolve(path.dirname(fromFile), decodeURIComponent(withoutHash));
}

for (const file of walk(root).filter((entry) => {
    return entry.endsWith('.html') && !entry.startsWith(path.join(root, 'Templates'));
})) {
    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(/href\s*=\s*["']([^"']+)["']/gi)) {
        const target = localTarget(file, match[1]);
        if (target && !fs.existsSync(target)) {
            errors.push(`${path.relative(root, file)} -> ${match[1]}`);
        }
    }
}

const slugOverrides = { 'Kagerō': 'kagerou', 'Myōkō': 'myoko' };
const slugify = (ship) => slugOverrides[ship] || ship
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const expectedShips = new Map();
for (const classInfo of Object.values(classDataContext.__classData)) {
    for (const ship of classInfo.ships) {
        const folder = ship === 'Ioshima' || ship === 'Yasoshima' ? 'ROC' : 'IJN';
        expectedShips.set(`${folder}/${slugify(ship)}.html`, ship);
    }
}

for (const [relativePath, ship] of expectedShips) {
    if (!fs.existsSync(path.join(root, 'ship pages', relativePath))) {
        errors.push(`Missing profile for ${ship}: ship pages/${relativePath}`);
    }
}

if (errors.length) {
    console.error(`Found ${errors.length} broken local link(s):`);
    errors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
} else {
    console.log(`Validated ${expectedShips.size} class ship profiles and local HTML links.`);
}
