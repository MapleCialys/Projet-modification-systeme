// place files you want to import through the `$lib` alias in this folder.
import '$lib/styles.css';

// Fonction pour modifier le format de date à AAAA MM DD
export function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('fr-CA', options);
}