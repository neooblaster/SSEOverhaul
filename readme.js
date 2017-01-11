/**



	SSE()

	• Description : 
		- Methode associée au constructeur "SSE". Démarrage de l'"EventSource" par la création de l'objet Server-Sent Events par le constructeur natif "new EventSource();"

	• Détail Fonctionnelle :
		1. Vérification de la définition de pathFile
			1.1. Si non défini	:	Renvoie d'une erreur indiquant que la cible du script serveur est non définie.
			1.2. Si défini		:	Poursuite du script
		2. Vérification de la définition de defaultCallback
			2.1. Si non définie	:	Renvoie d'une erreur indiquant que la fonction de traitemenr par défaut est non définie
			2.2. Si définie		:	Poursuite du script
		3. "Sinon", vérification validées :
			3.1. Vérification si la connexion est déjà établie
				3.1.1.	Si connexion déjà établie (!= null), alors renvois d'un warning information (non-bloquant);
				3.1.2.	Si pas de connexion, alors établir la connexion :
					3.1.2.1. Création d'un nouveau EventSource (new EventSource)
					3.1.2.2. Affection de defaultCallback à l'EventSource (EventSource.onmessage)
					3.1.2.3. Intégration de la liste d'évenement à l'"EventSource" (methode appendEvents(); )
					
					
					
					
	addEvent()
	
	• Description : 
		- Ajoute dans la liste "eventsToAppend" le couple nomEvent-functionDeTraitement pour sont intégration lors de la méthode start() par la méthode appendEvents();

	• Détail Fonctionnelle :
		1. Vérifier s'il n'existe pas déjà un évenemenent du même nom
			1.1. Si existe			:: Le mettre à jour, mettre à jour le flag exist pour terminer la fonction	
			1.2. Si n'existe pas	:: Créer une entrée avec les deux paramètrs fourni en entrée
					
					
					
	appendEvents()
	
	• Description : 
		- Affectation de la liste des évenements à l'EventSource (core) par le biais de la methode native EventSource.addEventListener();

	• Détail Fonctionnelle :
		1. Parcourir l'ensemble des évenements enregistré dans la liste et les ajouter à l'aide d'une boucle
		   A chaque itération, il ajoute à l'EventSource (core) le gestionnaire d'évenement (eventName) et lui assigne la fonction associé (eventFunction)
		   Par le biais de la fonction native EventSource.addEventListener('name', function);
					
					
					
	consoleOn ()
	
	• Description :
		- Activation des sorties "console"

	• Détail Fonctionnelle :
		1. Modification de l'indicateur consoleActivated permettant ou non les sorties consoles.
					
					
					
	consoleOn ()
	
	• Description :
		- Désactivation des sorties "console"

	• Détail Fonctionnelle :
		1. Modification de l'indicateur consoleActivated permettant ou non les sorties consoles.
					
					
					
	getFunctionName()
	
	• Description :
		- Obtention du nom au format "string" d'une fonction passée en paramètre.

	• Détail Fonctionnelle :
		1. Convertion de la fonction en chaine de caractères
		2. Suppression du déclarateur "function "
		3. Trouver la première parenthése
		4. Découpage final et affectation
		5. Retour du nom	
					
					

	removeEvent()
					
	• Description : 
		- Supprime de la liste l'évenement spécifier en paramètres

	• Détail Fonctionnelle :
		1. Vérifier que l'évenement est présente dans la liste
			1.1. S'il est présent		::	Mettre à jour le flag indicateur à vrai (existe)
			1.2. S'il n'est pas présent	::	Renvois un warning comme quoi l'event n'existe pas. Pas de suppression effectuée
	
		2. Lorsqu'il existe :
			2.1. Retranscript de la liste avec l'évent à supprimer en moins
			2.2. Mise à jour de la liste des evenements.
					
					
					
	sendError()
	
	• Description : 				
		- Envoie d'une sortie console Error.
		- Permet des lignes code plus clair sans ternaire

	• Détail Fonctionnelle :
		1. Emission systèmatique des sortie "Error".	
					
					
					
	sendLog()
	
	• Description :
		- Envoie d'une sortie console log.
		- Permet des lignes code plus clair sans ternaire

	• Détail Fonctionnelle :
		1. Vérification que les sorties console sont activé
			1.1. Si activé, émettre la sortie "log".	
					
					
					
	sendWarn()
	
	• Description :	
		- Envoie d'une sortie console warn.
		- Permet des lignes code plus clair sans ternaire

	• Détail Fonctionnelle :
		1. Vérification que les sorties console sont activé
			1.1. Si activé, émettre la sortie "warn".	
					
					
					
	stop()
	
	• Description : 
		- Methode associée au constructeur "SSE". Arret de l'"EventSource" par la méthode native de "EventSource.close()";
		
	• Détail Fonctionnelle :
		1. Vérification qu'une connexion existe par la définition de la propriete "core"
			1.1. Si non défini	::	Renvoie d'un warning (non bloquant) informant qu'aucune connexion est à fermer
			1.2. Si défini		::  Fermeture de la connexion avec la méthode native EventSource.close();
									RAZ de la propriété "core"



**/