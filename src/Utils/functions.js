export function areAllTilesClicked(tiles) {
    let count = 0;

    tiles.forEach(function (item) {
        if (item !== null) count++;
    })
    if (count === 9) {
        return true;
    }

    return false;
}

export function isWinnerCombinations(tiles) {
    const rows = [
        [0, 1, 2], // horizontal haut
        [3, 4, 5], // horizontal milieu
        [6, 7, 8], // horizontal bas
        [0, 3, 6], // verticale gauche
        [1, 4, 7], // Verticale milieu
        [2, 5, 8], // vetivale droite
        [0, 4, 8], // diagonale de gauche vers droite
        [2, 4, 6]  // diganole de droite vers gauche
    ];

    
    // Iterate over array with winning combinations
    for (let i = 0; i < rows.length; i++) {
        const [a, b, c] = rows[i];

        // check Combinaison gagnante
        if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
            return tiles[a];
        }
    }
    return null
}