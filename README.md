# 🚂 Kalkulator Czasu Pracy Maszynisty (v1.4)

Prosta, szybka i dostępna aplikacja webowa typu PWA służąca do obliczania czasu jazdy maszynisty. Narzędzie automatycznie wylicza czas pracy na podstawie godziny rozpoczęcia, zakończenia oraz czasu postoju, uwzględniając przejście przez północ.

Aplikacja została zaprojektowana zgodnie z wytycznymi **EAA (European Accessibility Act)** oraz **WCAG**, co czyni ją przyjazną dla osób słabowidzących oraz do pracy w warunkach nocnych.

## ✨ Główne funkcjonalności

### ⏱️ Obliczenia i Czas
* **Automatyczne przeliczanie:** Wynik aktualizuje się natychmiast po zmianie dowolnej wartości.
* **Przycisk "Teraz":** Szybkie wstawianie aktualnej godziny dla rozpoczęcia lub zakończenia jazdy.
* **Obsługa północy:** Poprawnie oblicza czas, gdy służba zaczyna się jednego dnia, a kończy kolejnego (np. 22:00 -> 02:00).
* **Sterowanie postojem:** Wygodne przyciski `+` / `-` oraz ręczne wpisywanie.

### 🌓 Dostępność i Wygląd (WCAG & EAA)
* **Tryb Ciemny / Jasny:** Przełącznik motywu z pamięcią wyboru użytkownika (idealne do jazdy nocnej).
* **Skalowanie tekstu:** Przyciski `A+` / `A-` pozwalają powiększać interfejs dla lepszej czytelności.
* **Wysoki kontrast:** Kolory dobrane tak, aby spełniać rygorystyczne normy widoczności.
* **Wsparcie dla czytników:** Pełna obsługa atrybutów ARIA i nawigacji klawiaturą (Focus ring).

### 💾 Historia i Pamięć
* **Inteligentna historia:** Trasy zapisują się automatycznie po 5 sekundach bezczynności (brak konieczności klikania "Zapisz").
* **Wczytywanie tras:** Kliknięcie w wpis na liście historii przywraca dane do formularza (presety).
* **Local Storage:** Aplikacja pamięta wpisane godziny, historię oraz ustawienia wyglądu nawet po odświeżeniu strony lub zamknięciu przeglądarki.

## 🚀 Jak używać?

1.  **Wpisz godziny:** Uzupełnij pole "Rozpoczęcie" i "Zakończenie" (lub użyj przycisku "Teraz").
2.  **Ustaw postój:** Jeśli wystąpił postój, wpisz liczbę minut lub użyj przycisków plus/minus.
3.  **Odczytaj wynik:** Czas jazdy (w minutach) wyświetli się automatycznie w niebieskiej ramce.
4.  **Historia:** Twoja trasa zapisze się sama na liście poniżej po kilku sekundach.
5.  **Dostosuj widok:** Użyj ikonek w prawym górnym rogu, aby zmienić tryb na ciemny lub powiększyć czcionkę.

## 🛠️ Technologie

* HTML5
* CSS3 (Variables, Flexbox)
* JavaScript (ES6+, LocalStorage, Debouncing)
* Google Tag Manager (Analytics)

## 👥 Autorzy

* **Piotr M 🚂** - *Pomysł i koncepcja*
* **Gemini** - *Implementacja kodu i rozwój*

---

### 🔗 Wersja online
Aplikacja jest dostępna pod adresem:
[https://piotrrgw.github.io/wykaz_maszynisty/](https://piotrrgw.github.io/wykaz_maszynisty/)