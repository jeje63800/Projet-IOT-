# Tests pour le Programme d'Agenda

- **Ajout d'un événement valide**  
  _Réponse : Événement ajouté avec succès._

- **Ajout d'un événement avec une date invalide**  
  _Réponse : "Erreur : Format de date incorrect."_

- **Ajout d'un événement avec une heure invalide**  
  _Réponse : "Erreur : Format d'heure incorrect."_

- **Ajout d'un événement avec un commentaire vide**  
  _Réponse : Événement ajouté avec succès (commentaire vide)._

- **Ajout de multiples événements**  
  _Réponse : Tous les événements ajoutés avec succès, triés correctement._

- **Ajout d'un événement avec la même date et heure**  
  _Réponse : Événement ajouté avec succès, placé après l'événement existant avec la même date et heure._

- **Suppression d'un événement existant**  
  _Réponse : "evenement supprime avec succes."_

- **Suppression d'un événement non existant**  
  _Réponse : "Aucun evenement trouve a la date et heure specifiees."_

- **Suppression avec une date invalide**  
  _Réponse : "Erreur : Format de date incorrect."_

- **Suppression avec une heure invalide**  
  _Réponse : "Erreur : Format d'heure incorrect."_

- **Affichage de l'agenda après ajout d'événements**  
  _Réponse : Affiche tous les événements ajoutés._

- **Affichage de l'agenda vide**  
  _Réponse : Affiche un agenda vide (pas d'événements)._

- **Sauvegarde de l'agenda avec des événements**  
  _Réponse : "Agenda sauvegardé avec succès dans le fichier agenda.txt."_

- **Sauvegarde de l'agenda vide**  
  _Réponse : "Agenda sauvegardé avec succès dans le fichier agenda.txt."_

- **Chargement d'un agenda depuis un fichier**  
  _Réponse : "Agenda chargé avec succès depuis le fichier agenda.txt."_

- **Chargement d'un fichier d'agenda non existant**  
  _Réponse : "Erreur : Impossible d'ouvrir le fichier pour chargement."_

- **Affichage après chargement de l'agenda**  
  _Réponse : Affiche tous les événements chargés du fichier._

- **Ajouter un événement après chargement de l'agenda**  
  _Réponse : Événement ajouté avec succès._

- **Supprimer un événement après chargement de l'agenda**  
  _Réponse : "evenement supprime avec succes."_

- **Sauvegarde après modification de l'agenda chargé**  
  _Réponse : "Agenda sauvegardé avec succès dans le fichier agenda.txt."_

- **Essayer de supprimer un événement dans un agenda vide**  
  _Réponse : "Aucun evenement trouve a la date et heure specifiees."_

- **Ajout d'un événement avec une date extrême**  
  _Réponse : Événement ajouté avec succès._

- **Ajout d'un événement avec une heure extrême**  
  _Réponse : Événement ajouté avec succès._

- **Affichage avec des commentaires très longs**  
  _Réponse : Affiche l'événement avec le commentaire tronqué si nécessaire._

- **Affichage avec des commentaires contenant des caractères spéciaux**  
  _Réponse : Affiche l'événement avec le commentaire incluant les caractères spéciaux._

- **Ajout d'événements avec différentes années**  
  _Réponse : Tous les événements ajoutés et triés par année._

- **Ajout d'événements avec différentes heures dans la même journée**  
  _Réponse : Tous les événements ajoutés et triés par heure._

- **Test de la mémoire après de multiples ajouts et suppressions**  
  _Réponse : Pas de fuite de mémoire détectée._

- **Test de l'option par défaut dans le menu**  
  _Réponse : "Option non valide. Veuillez réessayer."_

- **Quitter le programme avec l'option de menu**  
  _Réponse
