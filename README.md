# Atelier — Recherche GitHub

Bonne nouvelle, vous venez d'être embauché chez GitHub ! :tada:

Et re-bonne nouvelle, pour votre premier jour, on vous confie une mission _plutôt simple_ : **réécrire de zéro la recherche sur le site, en React** :see_no_evil: :ok_hand:

## Objectif

On se calme ! On. Se. Caaââl-meuh :cow2:

_Évidemment_, on ne vous demande _pas_ de remplacer le module de recherche existant, sur le site en production, d'ici ce soir :relieved:

Non, il s'agit plus modestement de réaliser un prototype, sans trop se prendre la tête coté UI, mais qui utiliserait la [toute nouvelle API de recherche](https://developer.github.com/v3/search/) :muscle: Une sorte de [refacto](https://fr.wikipedia.org/wiki/R%C3%A9usinage_de_code) fonctionnelle, en mode exploratoire, pour défricher un peu le sujet (et voir ce que vous avez dans l'ventre, faut bien l'avouer).

**L'idée, c'est d'utiliser le [endpoint pour les repos](https://developer.github.com/v3/search/#search-repositories)** :

> https://api.github.com/search/repositories?q=RECHERCHE

Un graphiste a imaginé ce que ça pourrait donner :

![resultat](./resultat.png)

Bon, apparemment, vous êtes libre de changer le style graphique et, surtout, de dynamiser tout ça à volonté ! Il va falloir faire preuve de créativité :thinking: pour faire une recherche en mode [SPA](https://fr.wikipedia.org/wiki/Application_web_monopage) avec une [UX](https://fr.wikipedia.org/wiki/Exp%C3%A9rience_utilisateur) bien pensée.

## Specs du projet

Oui, alors, c'est un prototype exploratoire, du coup le chef d'équipe n'a pas _trop trop_ précisé les choses :sweat_smile: Voilà en résumé ce qu'on sait :

### UI

On parle bien d'implémenter un prototype. Le but est surtout de valider que l'API fonctionne, et de tester différentes UI/UX. Il faut donc coder vite et bien, et pouvoir modifier l'agencement et les styles rapidement. On verra plus tard pour faire du jolibeau sur-mesure !

Du coup, pour gagner du temps sur la mise en forme, le chef d'équipe nous a demandé d'utiliser une bibliothèque graphique, [Semantic UI](https://semantic-ui.com/). Il paraît que c'est comme Bootstrap, mais en mieux. Ouais, bon, pourquoi pas !

Ah, mais le truc cool, c'est qu'il y a un _binding_ pour React ! Tous les composants graphiques de la librairie sont disponibles sous forme de composants React. Il suffit d'installer [Semantic UI React](https://react.semantic-ui.com/) et hop, c'est parti !

### UX

L'idée de la refactorisation fonctionnelle, c'est d'améliorer la recherche actuelle, qui est un peu « classique » : un champ de recherche, la liste des résultats au rechargement de la page, point barre.

Avec la nouvelle API (et toutes ses fonctionnalités) & React pour le coté dynamique, on devrait pouvoir faire un truc plutôt fluide et intuitif. Et gérer facilement les petits détails qui font les grands sites…

### Code

L'UI et son UX vont vraiment se baser sur l'asynchrone, avec des requêtes AJAX pour consommer l'API de recherche. Le chef a demandé à ce que le prototype utilise [axios](https://github.com/axios/axios), parce que c'est ce qui est déjà utilisé un peu partout chez GitHub.

### Délai de réalisation

Pas bien clair. Ce qu'on sait, c'est que le chef voudrait une petite démo et une présentation du code, d'ici à… ce soir. Rien que ça ! Non mais, en vrai, ça doit être faisable. On parle bien d'un prototype, on va aller à l'essentiel ^^

---
---
---

## Conseils et indices pour réaliser cet atelier :)

### Résumé de l'atelier

> Lorsque je `"submit"` le formulaire de recherche en appuyant sur [Entrée], une requête est faite auprès de l'API de recherche GitHub pour récupérer des résultats. S'il y en a, ils s'affichent sous la barre de recherche. Qu'il y ait des résultats ou pas, l'utilisateur doit avoir un _feedback_ (un message). Le reste, c'est bonus… :muscle:

### Procéder avec méthode

1. Je fais un découpage de l'UI avec des composants statiques de présentation (sans props) :
    - la barre de recherche ;
    - la zone de message de _feedback_ à propos de la recherche effectuée ;
    - la zone de résultats ;
    - tout ça avec des composants React Semantic UI.
2. Je crée de fausses données qui ressemblent aux résultats qu'on obtiendrait de l'API et j'alimente, depuis le composant racine, les composants de présentation en données (_via_ des props ; qui dit props, dit validation de props avec prop-types).
3. Je transforme mon composant racine en composant _stateful_, pour utiliser le `state`. Je mets mes fausses données dans le `state`, et je les passe aux composants de présentation.
4. Je crée, dans le composant racine, une méthode pour gérer la soumission du formulaire (champ) de recherche. Je la branche dans le composant de présentation [idoine](https://fr.wiktionary.org/wiki/idoine).
5. J'utilise axios pour déclencher la requête AJAX nécessaire pour obtenir les résultats de recherche, et je place les résultats (ou la partie des résultats qui m'intéresse) dans le `state`. D'ailleurs, je n'ai peut-être pas besoin de tout conserver dans le state, d'après la maquette on n'affiche pas tant de chose que ça…
6. Je gère l'affichage des résultats. Et prend mon 6ème café-bien-mérité.

### Composants React Semantic UI intéressants

- [Segment](https://react.semantic-ui.com/elements/segment/) et [Input](https:/-react.semantic-ui.com/elements/input/) pour la barre de recherche (indice : variation `inverted`)
- [Message](https://react.semantic-ui.com/collections/message/) pour le _feedback_ utilisateur sur la recherche effectuée
- [Grid](https://react.semantic-ui.com/collections/grid/) et [Card](https://-eact.semantic-ui.com/views/card/) (indice : [Card.Group](https://-eact.semantic-ui.com/views/card/#types-groups) intéressant) pour les résultats de recherche
- Et bien d'autres : [Loader](https://react.semantic-ui.com/elements/loader/), [Placeholder](https://react.semantic-ui.com/elements/placeholder/), [Icon](https://react.semantic-ui.com/elements/icon/), [Breadcrumb](https://react.semantic-ui.com/collections/breadcrumb/), [Item](https://react.semantic-ui.com/views/item/), …

## BONUS

### Niveau 1

- Icône de chargement des résultats dans la barre de recherche (indice : Semantic UI gère déjà tout)
- Deux modes d'affichage des résultats : grille & liste (indice : système de vues)

### Niveau 2

- Affichage du contenu d'un repo (indice : /contents)
- Retour vers les résultats sans avoir à refaire la recherche (indice : toujours le système de vues)
- Recherche par défaut au chargement de la page (indice : méthode du [cycle de vie](https://fr.reactjs.org/docs/state-and-lifecycle.html) nommée [componentDidMount](https://fr.reactjs.org/docs/react-component.html#componentdidmount))

### Niveau 3

- Rechercher parmi les résultats (indice : _filtrage_ des résultats par second champ de recherche)
- Affiner la recherche avec les [_qualifiers_ de l'API de recherche](https://help.github.com/en/articles/searching-for-repositories)
- Navigation _dans_ les dossiers d'un repo (avec les dossiers affichés avant les fichiers à tous les niveaux hiérarchiques)
- Prévisualisation des fichiers d'un repo (attention, base64)
- Navigation _au clavier_ : focus du champ de recherche par lettre `F`, navigation dans les résultats par flèches directionnelles, affichage des détails du repo sélectionnée avec `Enter`, et soyons fous, carrément dans les dossiers d'un repo !
