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

### Inspiratie 
![image](https://github.com/user-attachments/assets/e50fdd20-3364-49d3-933b-bd5d029b4104)

Verder vond de opdrachtgever de dark versie heel tof en mooier dan de light version. Opdrachtgever waardeerde ook de subtielheid van de carousel.

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

