// place files you want to import through the `$lib` alias in this folder.
import '$lib/styles.css';

/**
 * Formate une chaîne de date en format `YYYY-MM-DD`.
 * @param {string} dateString - La chaîne de date à formater.
 * @returns {string} - La date formatée.
 */
export function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('fr-CA', options);
}
