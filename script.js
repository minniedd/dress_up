let bodyIndex = 0;
let hairIndex = 0;
let clothesIndex = 0;
let shoesIndex = 0;
let accessoriesIndex = 0;

const bodyImages = ['assets/body1.png', 'assets/body2.png', 'assets/body3.png', 'assets/body4.png'];
const hairImages = ['assets/hair11.png', 'assets/hair12.png', 'assets/hair13.png', 'assets/hair14.png', 'assets/hair21.png', 'assets/hair22.png', 'assets/hair23.png', 'assets/hair24.png', 'assets/hair31.png', 'assets/hair32.png', 'assets/hair33.png', 'assets/hair34.png'];
const clothesImages = ['assets/dress1.png', 'assets/dress2.png', 'assets/dress3.png', 'assets/dress4.png'];
const shoesImages = ['assets/shoe1.png', 'assets/shoe2.png', 'assets/shoe3.png', 'assets/shoe4.png'];
const accessoriesImages = ['assets/necklace1.png', 'assets/necklace2.png', 'assets/necklace3.png'];

function nextbody() {
    bodyIndex = (bodyIndex + 1) % bodyImages.length;
    document.getElementById('man').style.backgroundImage = `url(${bodyImages[bodyIndex]})`;
}

function nexthair() {
    hairIndex = (hairIndex + 1) % hairImages.length;
    document.getElementById('hair').style.backgroundImage = `url(${hairImages[hairIndex]})`;
}

function nextdress() {
    clothesIndex = (clothesIndex + 1) % clothesImages.length;
    document.getElementById('clothes').style.backgroundImage = `url(${clothesImages[clothesIndex]})`;
}

function nextshoe() {
    shoesIndex = (shoesIndex + 1) % shoesImages.length;
    document.getElementById('shoes').style.backgroundImage = `url(${shoesImages[shoesIndex]})`;
}

function nextaccessorie() {
    accessoriesIndex = (accessoriesIndex + 1) % accessoriesImages.length;
    document.getElementById('accessories').style.backgroundImage = `url(${accessoriesImages[accessoriesIndex]})`;
}