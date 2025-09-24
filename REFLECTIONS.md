### Known bugs
The RegExp in removeNonLetters() might not be comprehensive.

### Testning
Testningen har skett främst med manuella tester av enheter och komponenter men även med automatiska enhetstester. Jag ville "testa mycket och testa tidigt" så som vi lärt oss och därför skrev jag automatiska enhetstester till funktioner jag gjort. Testerna gick igenom och jag kände mig nöjd. Problem uppstod dock efter att jag placerat dessa lösa funktioner in i en klass och gjorde dem privata. De gick inte längre att komma åt från testramverket. En del av detta löstes när jag skapade en Helper-klass och lade en del modulgemensamma publika metoder där. Då kunde de enhetstestas i alla fall.

### Skiss-anteckningar
Väldigt mycket vägande fram och tillbaka. Vad blir mest lättförståeligt - de korta utbrutna funktionerna eller en lite större sammanhängande? T ex fallet .map()

### Namngivning

Jag bryter mot bokens regel kring att inte ha med typbeskrivningar i variabelnamn. Exempelvis i namn som splittedWordsArray. I löst typade språk som JavaScript tycker jag att det underlättar att ibland skriva ut variablers typer i namnet så som i exemplet ovan. Annars behöver man veta att String.prototype.split() returnerar en array. Då tycker jag att förståelsen ökar genom att skriva ut typen i namnet.

Bytte namn på argument i PhraseCounter från char till phrase eftersom jag gjorde om funktionen till att kunna hantera både ett tecken och en hel fras bestående av många tecken.

