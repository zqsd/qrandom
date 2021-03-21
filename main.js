(() => {

    const CHAMPIONS = [
        {name: 'Anarki', image: 'images/champions/anarki.png'},
        {name: 'Slash', image: 'images/champions/slash.png'},
        {name: 'Clutch', image: 'images/champions/clutch.png'},
        {name: 'Strogg & Peeker', image: 'images/champions/strogg.png'},
        {name: 'Sorlag', image: 'images/champions/sorlag.png'},
        {name: 'Athena', image: 'images/champions/athena.png'},
    ];

    const championElement = document.getElementById('button');
    championElement.addEventListener('click', pickAndDisplayRandomChampion);

    function pickRandomChampion() {
        return CHAMPIONS[CHAMPIONS.length * Math.random() | 0];
    }

    function displayChampion(champion) {
        championElement.style['background-image'] = `url("${champion.image}")`;
    }

    function pickAndDisplayRandomChampion() {
        const champion = pickRandomChampion();
        displayChampion(champion);
    }
    pickAndDisplayRandomChampion();
})();