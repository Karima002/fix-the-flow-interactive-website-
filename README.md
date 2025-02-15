# Redpers interactive website
Voor Redpers ben ik aan de slag gegaan met het maken van een interactieve website. Allereerst loop ik de feedback van de opdrachtgever door, vervolgens benoem ik de interacties en tot slot laat ik ook stukjes codes zien. 

Live link: https://karima002.github.io/fix-the-flow-interactive-website-/


## Feedback
De opdrachtgever gaf aan dat ik het verschil tussen artikelpagina en homepagina beter naar voren moest brengen, maar dat de homepagina wel in dezelfde huisstijl moet blijven. Ik heb de verandering in de nieuwe pagina ingezet om de tekst in het midden uit te lijnen en de auteur te verwijderen. De inspiratie heb ik gehaald uit de https://www.newyorker.com/

### Homepagina (before)
![image](https://github.com/user-attachments/assets/4715359d-ec95-4f52-a843-f36d9217f478)

### Artikelpagina
![image](https://github.com/user-attachments/assets/b0ac1757-7cbd-4fdb-b550-8ceb330c5ad6)

### Homepagina (verbeterde versie a.d.h.v. feedback)
![image](https://github.com/user-attachments/assets/d78a38ee-aff4-44b4-9108-c39e79e1ce67)


## Interacties
### Menubalk
De eerste interactie is het openen en sluiten van de menubalk. Dit heb ik gedaan met Javascript. Hierin heb ik feedforward toegepast door gebruik te maken van labels bij de hamburger menu. 

https://github.com/user-attachments/assets/0ed6b300-b8a2-417b-bca8-95e38cff6912



### Zoekfunctie
Vervolgens ben ik aan de slag gegaan met het maken van een interactie in vorm van een zoekfunctie. Ook heb ik feedforward toegepast door gebruik te maken van labels. Ook staat er bij de input dat de gebruiker een zoekterm moet invoeren. Met de 'terug' en 'zoek' button krijgt de gebruiker feedback over wat de gebruiker kan doen na het invoeren van de zoekterm.

https://github.com/user-attachments/assets/095bb259-68a5-4999-8a7f-d58cf8c6a53a


### View transition
De laatste interactie is het toepassen van de view transition tussen de homepagina en de contactpagina. Er wordt dan een screenshot gemaakt van de homepagina en bewaard. Vervolgens wordt die screenshot getoond terwijl de contactpagina ook wordt getoond. 

https://github.com/user-attachments/assets/6684ed02-6789-498f-ab66-c694ac416a4e

## Ontwerpkeuzes
Mijn eerste ontwerpkeuze was het maken van een zoekfunctie in een nieuwe pagina (dan de homepagina). Dit ontwerp heb ik niet doorgevoerd omdat je hiervoor geen javascript nodig is: https://github.com/Karima002/fix-the-flow-interactive-website-/issues/19#issuecomment-2583726060. Vervolgens heb ik een nieuw ontwerp gemaakt waarbij de zoekfunctie verschijnt op de homepagina met een translate: https://github.com/Karima002/fix-the-flow-interactive-website-/blob/854c41868c93b4673ad64a72528e181c1a6c3004/styles/style.css#L89

Ook heb ik de zoekfunctie zo ontworpen dat de gebruiker terug kan gaan naar de pagina of het trefwoord kan zoeken middels buttons: https://github.com/Karima002/fix-the-flow-interactive-website-/issues/19#issue-2736939125

### Straatnaambordjes en wegbewijzering
**Logo**  
![image](https://github.com/user-attachments/assets/9d31ec3d-6c0a-4b6d-8642-a23c28f837c7)  
De logo is een straatnaambord. De logo vertelt je _waar_ je bent.

**Titel**
![image](https://github.com/user-attachments/assets/6d92952e-66ad-4551-8ac0-8a19e8e4787f)  
De titel van de contactpagina is ook een straatnaambord. Ook de titel van de contactpagina vertelt op welke pagina je bent.


**Bewegwijzering**
![image](https://github.com/user-attachments/assets/fd257a2c-972f-45df-a96f-1d8c75a2385b)
De eerste en tweede menubalken zijn bewegwijzering. De menu-items vertellen je _naar_ waar je kan surfen.

### Feedback en feedforward
_________________________________________________________________________________________________________

**Interactie menu**

https://github.com/user-attachments/assets/eb51f9a7-3d28-4a19-b133-ef37694b34fa

**Feedforward**: Door de label en de cursor kan de gebruiker verwachten dat er een menu openspringt. De volgende stap is het klikken op een categorie in de menubalk of het sluiten van de menubalk.  
**Feedback**: De interactie heeft gewerkt: menu is open. 

_________________________________________________________________________________________________________

**Interactie zoekbalk**

https://github.com/user-attachments/assets/94ce3f5f-3db0-45a9-a362-f62c149f42c1

**Feedforward**: Met 'zoek trefwoord' in de inputveld krijgt de gebruiker een feedforward over waar de zoekterm moet worden ingevoerd. Door de knoppen 'terug' en 'zoeken' weet de gebruiker wat de volgende stap na het toetsen van het trefwoord.  
**Feedback**: Na het klikken op 'zoeken' krijgt de gebruiker feedback dat de zoekbalk scherm is geopend


## Kenmerken

### Menubalk
De belangrijkste code voor het openen en sluiten van de menubalk is de code in javascript. 

https://github.com/Karima002/fix-the-flow-interactive-website-/blob/35a3d1bdc40568e214f3fff9a1139088f5684a85/scripts/index.js#L1-L21

1. Het zoeken van de menu-button en opslaan in een variabele
2. Laat de menu-button luisteren naar kliks en voer dan een functie uit
3.  In de functie wordt er een class toegevoegd aan het HTML element. Zo kan je de interactie verder bewerken via CSS:

https://github.com/Karima002/fix-the-flow-interactive-website-/blob/35a3d1bdc40568e214f3fff9a1139088f5684a85/styles/style.css#L39-L53
https://github.com/Karima002/fix-the-flow-interactive-website-/blob/35a3d1bdc40568e214f3fff9a1139088f5684a85/styles/style.css#L257-L260


### Zoekfunctie
De zoekfunctie heb ik op dezelfde manier gemaakt middel het 3-stappenplan van javascript.

https://github.com/Karima002/fix-the-flow-interactive-website-/blob/35a3d1bdc40568e214f3fff9a1139088f5684a85/scripts/index.js#L24-L43

Het zoekscherm heb ik verder gestyled in CSS:
https://github.com/Karima002/fix-the-flow-interactive-website-/blob/35a3d1bdc40568e214f3fff9a1139088f5684a85/styles/style.css#L73-L96

### View transition
Voor een view transition heb je een klein stukje code nodig in CSS op beide pagina's. Het is wel belangrijk dat beide pagina's op dezelfde domeinnaam staan.
https://github.com/Karima002/fix-the-flow-interactive-website-/blob/35a3d1bdc40568e214f3fff9a1139088f5684a85/styles/style.css#L530-L564

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

