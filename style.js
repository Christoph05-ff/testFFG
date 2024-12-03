function greeting_person(dienstgrad, name) {
    return `Guten Tag, ${dienstgrad} ${name}!`;
}

// Beispielaufruf
console.log(greeting("Herr", "Müller")); // Ausgabe: Guten Tag, Herr Müller!
console.log(greeting("Frau", "Schneider")); // Ausgabe: Guten Tag, Frau Schneider!
