# 🚆 Kalkulator Czasu Pracy Maszynisty (v2.1)

Prosta, szybka i nowoczesna aplikacja webowa typu PWA służąca do obliczania czasu jazdy maszynisty. Narzędzie automatycznie wylicza czas pracy na podstawie godziny rozpoczęcia, zakończenia oraz czasu postoju. 

W najnowszej wersji aplikacja zyskała **Uniwersalny Kalkulator Czasu**, interfejs w stylu *Glassmorphism* oraz przyciski szybkiego wprowadzania godzin. Aplikacja została zaprojektowana ściśle według wytycznych **EAA (European Accessibility Act)** oraz **WCAG**, co czyni ją przyjazną dla osób słabowidzących i idealnie dostosowaną do pracy w warunkach nocnych.

---

## 🛠 Główne funkcjonalności

### ⏱ Obliczenia Tras (Główny moduł)
* **Przyciski Szybkiego Wprowadzania:** Szybka korekta czasu dzięki przyciskom `-1h`, `-15m`, `+15m`, `+1h`.
* **Przycisk "Teraz":** Błyskawiczne wstawianie aktualnej godziny dla rozpoczęcia lub zakończenia jazdy.
* **Automatyczne przeliczanie:** Wynik aktualizuje się natychmiast po zmianie dowolnej wartości.
* **Inteligentne łamanie doby:** Poprawnie oblicza czas, gdy służba zaczyna się jednego dnia, a kończy kolejnego (np. 22:00 -> 06:00).
* **Sterowanie postojem:** Wygodne przyciski `+` / `-` oraz ręczne wpisywanie w minutach.

### 🧮 Uniwersalny Kalkulator Czasowy (Nowość!)
* Niezależny moduł pozwalający na wykonywanie operacji matematycznych na czasie.
* **Dodawanie i odejmowanie** dwóch wartości czasowych (wraz z obsługą łamania doby).
* **Mnożenie i dzielenie** czasu przez zwykłe liczby (np. 02:30 × 2).
* Wynik podawany jednocześnie w formacie `HH:MM` oraz całkowitej liczbie minut.

### 👁 Dostępność i Wygląd (WCAG & EAA)
* **Glassmorphism & Material Symbols:** Nowoczesny, przejrzysty design z wykorzystaniem profesjonalnych ikon Google Material.
* **Tryb Ciemny / Jasny:** Przełącznik motywu z pamięcią wyboru (tryb ciemny redukuje zmęczenie oczu podczas jazd nocnych).
* **Skalowanie tekstu:** Przyciski `A+` / `A-` pozwalają powiększać interfejs dla lepszej czytelności na małych ekranach.
* **Wysoki kontrast i nawigacja:** Zgodność z minimalnymi obszarami klikalnymi (44px), atrybuty ARIA i wyraźny *Focus ring* przy nawigacji klawiaturą.

### 💾 Historia i Pamięć
* **Inteligentna historia:** Trasy zapisują się automatycznie po 5 sekundach bezczynności (brak konieczności klikania "Zapisz").
* **Presety:** Kliknięcie we wpis na liście historii błyskawicznie przywraca dane do formularza.
* **Local Storage:** Aplikacja pamięta wpisane godziny, historię oraz ustawienia wyglądu nawet po odświeżeniu strony czy zamknięciu przeglądarki.
* **Czyszczenie pamięci:** Możliwość usunięcia całej historii jednym kliknięciem.

---

## 📖 Jak używać?

1. **Wpisz godziny trasy:** Uzupełnij pole "Rozpoczęcie" i "Zakończenie" (użyj przycisku "Teraz" lub przycisków modyfikacji np. `+15m`).
2. **Ustaw postój:** Jeśli wystąpił postój, wpisz liczbę minut lub użyj przycisków plus/minus.
3. **Odczytaj wynik:** Czas jazdy (w minutach) wyświetli się automatycznie na dole karty.
4. **Obliczenia niestandardowe:** Jeśli potrzebujesz zsumować różne czasy, skorzystaj z karty "Uniwersalny Kalkulator Czasu".
5. **Historia:** Twoja trasa zapisze się sama na liście na samym dole po kilku sekundach braku aktywności.

---

## 💻 Technologie

* HTML5 (Semantyczny i dostępny)
* CSS3 (Variables, Flexbox, CSS Grid, Glassmorphism)
* JavaScript (ES6+, LocalStorage, Debouncing)
* Google Material Symbols (Piktogramy UI)
* PWA (Service Worker, Manifest) - możliwość instalacji na ekranie głównym (Android/iOS/Windows).
* Google Tag Manager (Analytics)

---

## 👨‍💻 Autorzy

* **Piotr M 🚂** - *Pomysł i koncepcja*
* **Gemini** - *Implementacja kodu i rozwój*
* **Thundo** - *Współpraca i testy*

---

## 🔗 Wersja online

Aplikacja jest dostępna pod adresem:
[https://piotrrgw.github.io/wykaz_maszynisty/](https://piotrrgw.github.io/wykaz_maszynisty/)