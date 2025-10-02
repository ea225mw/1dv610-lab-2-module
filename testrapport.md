# Testrapport

### Testning
Testningen har skett främst med manuella tester av enheter och komponenter men även med automatiska enhetstester. Jag ville "testa mycket och testa tidigt" så som vi lärt oss och därför skrev jag automatiska enhetstester till funktioner jag gjort. Testerna gick igenom och jag kände mig nöjd. Problem uppstod dock efter att jag placerat dessa lösa funktioner in i en klass och gjorde dem privata. De gick inte längre att komma åt från testramverket. En del av detta löstes när jag skapade en Helper-klass och lade en del modulgemensamma publika metoder där. Då kunde de enhetstestas i alla fall.

## Rapport 2025-09-30

Tester har genomförts på alla publika metoder på två sätt. Dels genom automatiska enhetstester med Jest