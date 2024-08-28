// place files you want to import through the `$lib` alias in this folder.
import '$lib/styles.css';

// Fonction pour modifier le format de date à JJ Mois AAAA
export function formatDate(dateString) {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}