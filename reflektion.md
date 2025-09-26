### Known bugs
The RegExp in removeNonLetters() might not be comprehensive.

### Testning
Testningen har skett främst med manuella tester av enheter och komponenter men även med automatiska enhetstester. Jag ville "testa mycket och testa tidigt" så som vi lärt oss och därför skrev jag automatiska enhetstester till funktioner jag gjort. Testerna gick igenom och jag kände mig nöjd. Problem uppstod dock efter att jag placerat dessa lösa funktioner in i en klass och gjorde dem privata. De gick inte längre att komma åt från testramverket. En del av detta löstes när jag skapade en Helper-klass och lade en del modulgemensamma publika metoder där. Då kunde de enhetstestas i alla fall.

### Skiss-anteckningar
Väldigt mycket vägande fram och tillbaka. Vad blir mest lättförståeligt - de korta utbrutna funktionerna eller en lite större sammanhängande? T ex fallet .map()

Göra instanssvariabler i klasserna för att slippa skicka med argument i MostCommonLetterFinder. Gör att jag slapp en del argument in till funktioner men skapar samtidigt lite med svårläst kod ioma jag behöver ha med `this` överallt där variabeln används.

Min strategi för versionsnumrering fungerade inget vidare. Den gick ut på att inför varje commit ändra versionsnumret i package.json och börja varje commit-meddelande med v0.0.X. Detta var väldigt lätt att glömma av och

### Namngivning

Jag bryter mot bokens regel kring att inte ha med typbeskrivningar i variabelnamn. Exempelvis i namn som splittedWordsArray. I löst typade språk som JavaScript tycker jag att det underlättar att ibland skriva ut variablers typer i namnet så som i exemplet ovan. Annars behöver man veta att String.prototype.split() returnerar en array. Då tycker jag att förståelsen ökar genom att skriva ut typen i namnet.

Bytte namn på argument i PhraseCounter från char till phrase eftersom jag gjorde om funktionen till att kunna hantera både ett tecken och en hel fras bestående av många tecken.

Jag tänker mer aktivt på vad olika variabler heter efter ha läst boken och tittat på föreläsningar.
sortedLetters --> countedLetters --> countedCharacters

### Kommentarer
Jag jobbade en del med att i klartext skriva vad jag skulle koda.

  ```javascript
  mostCommonLetter(string) {
    /*
    - Kolla så att param är en sträng.
    - Gå igenom varje tecken i strängen och lägg dem (eller deras teckenkod?) i array1.
    - Skapa ett tomt objekt som ska innehålla keys med tecken
    - Gå igenom array1 och om bokstaven på indexet INTE finns som key, lägg till den som key och sätt värdet till 1
    -   Om key redan finns --> key++
    - Sortera objektet efter storlek på värdena
    - Returnera det eller de nyckel/värdepar med högst värde
    */
  }
  ```