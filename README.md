# **Frontend Puzzle**

### **1. Klona projektet & installera dependencies**

```bash
git clone https://github.com/JonathanZeray/frontend-puzzle.git
cd frontend-puzzle
npm install
```

### **2. Starta servern**

```bash
npm run dev
```

### **4. Kör testerna**

```bash
npm test
```

## **Anpassa antalet rader och kolumner**

För att justera antalet rader och kolumner:

1. **Gå till filen:** `src/utils/boardUtils.ts`
2. **Ändra värdena** på dessa:
   ```typescript
   export const ROWS = 3; // Antalet rader
   export const COLUMNS = 5; // Antalet kolumner
   ```

## **Justera svårighetsgraden**

Svårighetsgraden på pusslet kan justeras genom att ändra hur många slumpmässiga drag som görs för att blanda brickorna.

1. **Öppna filen:** `src/utils/boardUtils.ts`
2. **Hitta funktionen:** `getRandomBoard`
3. **Ändra det andra uttrycket i for-loopen:**
   ```
   for (let i = 0; i < 20; i++) { // Ändra "20" till ett lägre eller högre värde. Ju lägre värde desto lättare pussel.
   ```
