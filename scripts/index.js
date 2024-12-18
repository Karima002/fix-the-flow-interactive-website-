// MARK: MENU
// stap 1: zoek de menu-button op en sla die op in een variabele
let openButton = document.querySelector('header > .button--menu-open') //hiermee wordt de de button menu opgezocht. //In JavaScript wordt const gebruikt om een variabele te declareren die niet hernoemd of opnieuw toegewezen kan worden.
let NavSearch = document.querySelector('nav')
let sluitButton = document.querySelector('header nav .button--menu-sluit')  //sluitbutton in de navigatiebar wordt opgezocht

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.addEventListener('click', openMenu) // Zo ga je een event (actie) toevoegen. We moeten nog wel zeggen wat de click gaat doen:

// stap 3: voeg in de functie een class toe aan de nav
function openMenu (){
    NavSearch.classList.toggle('toonMenu')
}

sluitButton.addEventListener('click', sluitMenu)

// stap 4 - in de functie verwijder de class van de nav
function sluitMenu() {
    NavSearch.classList.remove('toonMenu')
}



//MARK: SEARCH
//Stap 1: selecteren geschikt element
const openSearchButton = document.querySelector('.search-button')
const theSearch = document.querySelector('.zoeken')
const closeSearchMenu = document.querySelector('.back--keyword-button')

//Stap 2: voeg event en functie toe
openSearchButton.addEventListener('click', openSearch)
closeSearchMenu.addEventListener('click', closeSearch)

function openSearch(){
    theSearch.classList.add('toonSearch')
}

function closeSearch() {
    theSearch.classList.remove('toonSearch') //voor het verwijderen van de search balk zodra je op 'terug' klikt
}

//Stap 3: feedback aan de gebruiker --> CSS




/* experiment met andere javascript voor menubalk
//Stap 1: selecteren geschikt element
let openButton = document.querySelector('header button--menu-open');
let naviGation = document.querySelector('nav');

//Stap 2: voeg event en functie toe
openButton.addEventListener('click', openMenu);

function openMenu() {
    naviGation.classList.add('toonMenu');
}
*/
