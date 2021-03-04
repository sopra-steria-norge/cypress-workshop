# 🧪 Cypress

## Velkommen til workshop 24.03.2021!
Gjennom dette faggruppemøtet ønkser vi i Frontend og Quality faggruppen å vise hvordan man enkelt kan lage funksjonelle tester ved bruk av rammeverket Cypress.

Dette møtet vil bestå av en workshop hvor man benytter seg av dette prosjektet samt en gjennomgang av hvordan Cypress blir brukt til å teste Worktime. Workshopen vil være for alle, men det kan være greit å ha basis forståelse for programmering for å gjennomføre workshopen.

### For å kunne bruke mest mulig tid på selve implementasjonen, ber vi deg om å verifisere at du har en datamaskin satt opp for denne workshopen. 
Vi ønsker at alle har gjennomført/verifisert følgende punkter før workshopen:

1. [Node](#node)
2. [Git](#git)

## Node

Workshop delen av faggruppemøtet krever at vi har installert JavaScript runtime-systemet **Nodejs** og pakkebehandleren **npm** (Node Package Manager) som følger med Node.
Vi må dermed sørge for å ha disse tilgjengelige før vi kan begynne arbeidet.

### Dersom du *IKKE HAR* Nodejs installert på maskinen:

Følg oppskriften som gjelder for ditt operativsystem:

#### Windows:

* Last ned LTS-versjon av Nodejs til Windows fra https://nodejs.org/.
* Åpne installasjonsprogrammet og følg standard installasjonsflyt.
* Når installasjonsveilederen er ferdig, åpne kommandolinjen i Windows og skriv `node --version`. Dersom den returnerer versjonsnummeret er du klar. Hvis ikke, forsøk installasjon på nytt.

#### Ubuntu / WSL

* Åpne et terminalvindu.
* Sjekk at du har `curl` installert. Hvis ikke, installer med `sudo apt-get install curl`.
* Installer Node Version Manager med kommandoen `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
* Kjør kommandoen `command -v nvm`. Dersom den returnerer strengen `nvm` var installasjonen vellykket. Hvis ikke, lukk terminalvinduet, åpne et nytt et og forsøk installasjonen igjen.
* Installer LTS versjon av node med kommandoen `nvm install node --lts`
* Kjør kommandoen `node --version` for å bekrefte installasjonen av node.
* Kjør kommandoen `npm --version` for å bekrefte installasjonen av npm.

#### Mac

* Last ned LTS-versjon av Nodejs til Mac fra https://nodejs.org/.
* Åpne installasjonsprogrammet og følg standard installasjonsflyt.
* Når installasjonen er ferdig, åpne et terminalvindu og skriv `node --version`. Dersom kommandoen returnerer et versjonsnummer er du klar. Hvis ikke, forsøk installasjon på nytt.


## Git
- Last ned nyeste versjon av Git dersom du ikke har dette installert på maskinen: https://git-scm.com/downloads
- Clone ned dette repoet

Etter å ha gjort alle stegene over er du klar til Workshop!