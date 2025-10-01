# 🏒 Hockeyallsvenskan Tabell

En interaktiv webbapplikation där du kan laborera med poäng i Hockeyallsvenskans tabell och se hur ställningen skulle förändras.

## Funktioner

- 📊 Visar aktuell tabellställning i Hockeyallsvenskan
- ➕➖ Justera poäng för valfritt lag med +1/-1 knappar
- 🔄 Automatisk omsortering av tabellen baserat på poäng, målskillnad och gjorda mål
- ↩️ Återställ till ursprunglig data när som helst
- 📱 Responsiv design som fungerar på alla enheter

## Hur man använder

1. Öppna `index.html` i en webbläsare
2. Se den aktuella tabellställningen
3. Klicka på **+1** eller **-1** för att justera ett lags poäng
4. Tabellen sorteras automatiskt om efter varje ändring
5. Ändrade lag markeras med gul bakgrund
6. Klicka på **Återställ tabell** för att gå tillbaka till ursprungsdata

## Teknisk information

### Filer
- `index.html` - Huvudsidan med tabellstruktur
- `styles.css` - Stilmall för applikationen
- `app.js` - JavaScript-logik för tabellhantering och sortering

### Sorteringslogik
Tabellen sorteras i följande ordning:
1. Poäng (högst först)
2. Målskillnad (högst först)
3. Gjorda mål (flest först)

### Förkortningar
- **GP** = Spelade matcher (Games Played)
- **W** = Vinster (Wins)
- **OTW** = Övertidsvinster (Overtime Wins)
- **OTL** = Övertidsförluster (Overtime Losses)
- **L** = Förluster (Losses)
- **GF** = Gjorda mål (Goals For)
- **GA** = Insläppta mål (Goals Against)
- **+/-** = Målskillnad (Goal Difference)

## Framtida förbättringar

- [ ] Integration med live API för att hämta aktuell data
- [ ] Möjlighet att ändra fler statistik (matcher, mål, etc.)
- [ ] Spara och dela olika scenarion
- [ ] Jämföra flera olika tabellställningar
- [ ] Historik över ändringar

## Lokal utveckling

För att köra projektet lokalt:

```bash
# Klona repositoryt
git clone https://github.com/perhackarn/hockeyallsvenskan.git
cd hockeyallsvenskan

# Öppna index.html i en webbläsare
# eller använd en lokal server:
python -m http.server 8000
# Navigera sedan till http://localhost:8000
```

## Licens

Detta projekt är öppen källkod och tillgängligt för alla att använda och modifiera.
