function extractPatterns(letter = "F", type = "FYF") {
  // Dynamically build the regex pattern
  const pattern = new RegExp(`${letter}\\/\\d+\\/${type}\\/2024`, "g");

  // Select all elements with class names containing 'label14'
  const elements = document.querySelectorAll('[id$="_test"]')
  // Array to store matches
  const matches = [];

  // Iterate over elements
  elements.forEach((element) => {
    const text = element.textContent || element.innerText; // Get the text content
    const found = text.match(pattern); // Find matches
    if (found) {
      matches.push(...found); // Add matches to the array
    }
  });

  // List the matches
  console.log("Matches:", matches);
}

// Call the function with your desired letter and type
extractPatterns("F", "FYF"); // Default: F and FYF
extractPatterns("G", "GRD"); // Example: G and GRD
/*
      Other thing !!!
*/
// Original array with duplicates
const originalArray = ["F/123/FYF/2024", "F/123/FYF/2024", "G/456/GRD/2024"];

// Create a unique array
const uniqueArray = [...new Set(originalArray)];

// Log both arrays
console.log("Original Array:", originalArray);
console.log("Unique Array:", uniqueArray);



Voici une proposition structurée qui décrit une méthode complète pour la gestion des courriers dans un bureau d’ordre, en intégrant des contrôles tant à la réception qu’au dispatch.


---

1. Réception et Enregistrement

a. Réception Physique et Numérisation

Point de collecte unique : Instaurer un point de dépôt centralisé pour tous les courriers entrants.

Numérisation immédiate : Pour chaque courrier reçu, procéder à sa numérisation (par exemple, via un scanner) afin de créer une copie numérique à archiver.


b. Enregistrement dans un Système Informatique

Création d’un registre électronique : À réception, enregistrer chaque courrier avec des informations clés (date, expéditeur, objet, et numéro de suivi unique).

Classification initiale : Attribuer une première catégorie qui déterminera son chemin de traitement (urgent, à traiter, informationnel, etc.).


c. Vérification à la Réception

Contrôle de complétude : Vérifier que tous les éléments (annexes, signatures éventuelles, etc.) sont présents.

Double validation : Mettre en place une procédure de validation par un second agent pour assurer l’exactitude de l’enregistrement.



---

2. Traitement et Affectation

a. Analyse et Tri

Lecture et interprétation : Désigner un responsable qui analyse le contenu du courrier pour identifier le service ou la personne concernée.

Taggage et annotations : Ajouter des annotations dans le système pour préciser la nature de la demande ou de l’information transmise.


b. Affectation aux Destinataires

Distribution informatisée : Utiliser le système pour dispatcher électroniquement les copies aux destinataires concernés (via messagerie interne ou ERP).

Liste de distribution dynamique : Maintenir à jour une liste des contacts et des services pour accélérer l’affectation.


c. Vérification en Cours de Traitement

Suivi de l’avancement : Chaque courrier se voit attribuer un statut (en attente, en cours, traité) qui est mis à jour par le responsable de traitement.

Contrôle croisé : Mettre en place des audits périodiques pour vérifier que le tri et l’affectation ont été réalisés correctement.



---

3. Dispatch et Confirmation

a. Validation Finale

Point de validation : Avant l’envoi définitif, un agent dédié vérifie que le courrier a bien été affecté au bon service.

Notification au destinataire : Envoyer un accusé de réception au destinataire interne afin de confirmer la prise en charge.


b. Archivage et Historique

Archivage centralisé : Une fois dispatché, le courrier (version numérique et/ou papier) est archivé dans un système central pour le suivi et les audits.

Traçabilité : Chaque action (réception, tri, affectation, dispatch) est horodatée et consignée dans l’historique du courrier.


c. Contrôle de Qualité du Dispatch

Tableau de bord : Mettre en place un tableau de bord de suivi qui recense les délais de traitement et les écarts éventuels par rapport aux procédures standards.

Feedback des destinataires : Recueillir périodiquement les retours des destinataires afin d’identifier d’éventuels dysfonctionnements dans le processus.



---

4. Méthodologie de Vérification et Amélioration Continue

a. Audit Interne Régulier

Audits programmés : Organiser des audits internes mensuels ou trimestriels pour vérifier la conformité du processus à la procédure définie.

Revues de procédure : Mettre à jour la procédure en fonction des retours d’expérience et des audits.


b. Indicateurs de Performance (KPIs)

Délais de traitement : Mesurer le temps écoulé entre la réception et le dispatch pour identifier les goulets d’étranglement.

Taux de conformité : Suivre le pourcentage de courriers correctement enregistrés et dispatchés.


c. Formation et Sensibilisation

Sessions de formation : Organiser régulièrement des formations pour les agents afin d’assurer une bonne maîtrise de la procédure et du système informatique.

Documentation accessible : Mettre à disposition des guides et des procédures détaillées dans un manuel accessible à tous les collaborateurs.



---

Conclusion

Cette proposition offre une méthode complète pour la gestion des courriers dans un bureau d’ordre. Elle se base sur un enregistrement rigoureux dès la réception, un traitement structuré avec un tri précis et une affectation contrôlée, ainsi qu’un dispatch final vérifié par un contrôle qualité. L’intégration d’audits réguliers et d’indicateurs de performance permettra également une amélioration continue du processus, garantissant ainsi une traçabilité et une fiabilité optimales.
