const destroyerGrid = document.querySelector('#destroyer-grid');

const destroyerClasses = [
    ['Wakatake', ['Wakatake', 'Kuretake', 'Sanae', 'Yunagi', 'Namatake', 'Kaba', 'Tsubaki', 'Asagao']],
    ['Minekaze', ['Minekaze', 'Okikaze', 'Hakaze', 'Akikaze', 'Yakaze', 'Nadakaze', 'Hokaze', 'Tachikaze', 'Nokaze', 'Namikaze', 'Numakaze', 'Shiokaze', 'Yukaze', 'Sawakaze', 'Shimakaze']],
    ['Isokaze', ['Isokaze', 'Hamakaze', 'Amatsukaze', 'Tokitsukaze']],
    ['Kamikaze', ['Kamikaze', 'Asakaze', 'Harukaze', 'Matsukaze', 'Hatakaze', 'Oite', 'Hayate', 'Asanagi', 'Yunagi']],
    ['Mutsuki', ['Mutsuki', 'Kisaragi', 'Yayoi', 'Uzuki', 'Satsuki', 'Minazuki', 'Fumizuki', 'Nagatsuki', 'Kikuzuki', 'Mikazuki', 'Mochizuki', 'Yūzuki']],
    ['Fubuki', ['Fubuki', 'Shirayuki', 'Hatsuyuki', 'Miyuki', 'Murakumo', 'Shinonome', 'Usugumo', 'Shirakumo', 'Isonami', 'Uranami', 'Ayanami', 'Shikinami', 'Asagiri', 'Yūgiri', 'Akebono', 'Oboro', 'Sazanami', 'Ushio', 'Amagiri', 'Sagiri']],
    ['Hatsuharu', ['Hatsuharu', 'Nenohi', 'Wakaba', 'Hatsushimo', 'Ariake', 'Yūgure']],
    ['Akatsuki', ['Akatsuki', 'Hibiki', 'Ikazuchi', 'Inazuma']],
    ['Shiratsuyu', ['Shiratsuyu', 'Shigure', 'Murasame', 'Yūdachi', 'Harusame', 'Samidare', 'Yamakaze', 'Umikaze', 'Kawakaze', 'Suzukaze']],
    ['Akizuki', ['Akizuki', 'Teruzuki', 'Suzutsuki', 'Hatsuzuki', 'Niizuki', 'Wakatsuki', 'Shimotsuki', 'Fuyutsuki', 'Harutsuki', 'Yoizuki', 'Hanazuki', 'Natsuzuki']],
    ['Kagerō', ['Kagerō', 'Shiranui', 'Kuroshio', 'Oyashio', 'Hayashio', 'Natsushio', 'Hatsukaze', 'Yukikaze', 'Amatsukaze', 'Tokitsukaze', 'Urakaze', 'Isokaze', 'Hamakaze', 'Tanikaze', 'Nowaki', 'Arashi', 'Hagikaze', 'Maikaze', 'Akigumo']],
    ['Asashio', ['Asashio', 'Ōshio', 'Michishio', 'Arashio', 'Asagumo', 'Yamagumo', 'Natsugumo', 'Minegumo', 'Arare', 'Kasumi']],
    ['Yūgumo', ['Yūgumo', 'Makigumo', 'Kazagumo', 'Naganami', 'Makinami', 'Takanami', 'Ōnami', 'Kiyonami', 'Tamanami', 'Suzunami', 'Fujinami', 'Hayanami', 'Asashimo', 'Hayashimo', 'Akishimo', 'Kiyoshimo', 'Okinami', 'Kishinami', 'Yamanami']],
    ['Minegumo', ['Minegumo', 'Natsugumo', 'Asagumo']],
    ['Shimakaze', ['Shimakaze']]
];

const shipPage = {
    Kagerō: '../ship%20pages/IJN/kagerou.html'
};

for (const [shipClass, ships] of destroyerClasses) {
    for (const shipName of ships) {
        const card = document.createElement('a');
        card.className = 'ship-card';
        card.href = shipPage[shipName] || '#';

        const name = document.createElement('span');
        name.className = 'ship-name';
        name.textContent = shipName;

        const description = document.createElement('span');
        description.className = 'ship-description';
        description.textContent = `${shipClass}-class destroyer`;

        card.append(name, description);
        destroyerGrid.appendChild(card);
    }
}
