# green-backpack - Der Grüne Rucksack

Ein Projekt beim Drei-Länder-Hack 2021.

Visualisierung/Simulation von aktuellen und künftigen CO2 Emissionen (pro Bahn, pro Geschäftsfeld, usw.) sowie Szenarien und
Maßnahmen zur Reduktion + persönlicher Beitrag der Mitarbeitenden den CO2-Fußabdruck zu reduzieren z.B. durch virtuelle
Besprechung statt Dienstreise oder (klimaneutrales) Essen in der Kantine statt Mittagsessen To-Go in Einweg-Verpackung.

Wir sammeln Ideen und weitere Informationen (z.B. Datenquellen) aktuell im [Wiki](https://github.com/drei-lander-hack/green-backpack/wiki)

Außerdem gibt es noch das [Projekt-Board](https://github.com/drei-lander-hack/green-backpack/projects/1), mit dem wir den Überblick über unsere Aufgaben behalten.

## Lokal entwickeln

### Voraussetzungen

Du brauchst eine IDE (wie z.B. https://code.visualstudio.com/ oder https://www.jetbrains.com/idea/) sowie einen Git-Client (https://git-scm.com/downloads).


Wenn du Windows benutzt, bietet sich die bash des Windows Subsystems for Linux an. Beim Mac ist mit dem Terminal Programm alles da, was du brauchst.

### Installieren und Starten des Frontends
Dann mittels des folgenden Kommandos dieses Repository in ein lokales Verzeichnis klonen:

```
git clone https://github.com/drei-lander-hack/green-backpack.git
```

Dies legt ein Unterverzeichnis "green-backpack" auf deinem Rechner an, in das du mit

```
cd green-backpack
```

wechseln kannst.

Dort dann die verwendeten Bibliotheken installieren und das Frontend starten:

```
npm install
npm run dev
```

Dann nur noch im Browser deiner Wahl (es ist hoffentlich nicht gerade der Internet Explorer!) die URL http://localhost:3000/green-backpack/ aufrufen.
