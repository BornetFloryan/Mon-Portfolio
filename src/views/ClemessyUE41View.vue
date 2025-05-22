<template>
  <div class="ue-page">
    <h1>UE4.1 – Réaliser un développement d’application</h1>
    <nav class="sommaire">
      <h2>Sommaire</h2>
      <ul>
        <li><a href="#analyse">Analyse réflexive</a></li>
        <li><a href="#problemes">Problèmes rencontrés et adaptations</a></li>
        <li><a href="#traces">Traces associées</a></li>
      </ul>
    </nav>
    <section id="analyse">
      <h2>🌟 Analyse réflexive</h2>
      <p>
        Durant ce stage, j’ai été en charge de plusieurs développements complets d’applications métier, ce qui m’a permis de mobiliser mes apprentissages en conception, modélisation, structuration des données et ergonomie.
      </p>
      <p>
        Par exemple, sur l’application Numérisation des contrôles, j’ai :
        <ul>
          <li>Conçu une interface mobile avec des formulaires dynamiques pour la saisie d'observations, contrôles et reprises (voir figure 1).</li>
          <li>Résolu des problèmes d’affichage conditionnel, en utilisant des popups et des filtres dynamiques (voir figure 2).</li>
          <li>Modifié la base de données pour permettre plusieurs contrôles sur un même ensemble, ce qui m’a demandé d’adapter le MCD ainsi que la logique de navigation de l’application (voir figure 3).</li>
          <li>Intégré un système de signature numérique, avec des contraintes techniques (vérification impossible de l’image vide), ce qui m’a forcé à proposer une solution d’accompagnement utilisateur.</li>
        </ul>
      </p>
      <p>
        J’ai également développé une application de Suivi des heures, comprenant :
        <ul>
          <li>Une navigation complète entre la sélection d’affaires, la création de fiches de vie, et l’affichage de celles-ci en tableau (voir figure 4).</li>
          <li>Un système de validation et modification avec gestion des doublons et de la date automatique (voir figure 5).</li>
        </ul>
      </p>
      <p>
        Enfin, j’ai automatisé le traitement d’un fichier CSV : envoi, lecture, parsing, et injection dans une base de données pour permettre la création d’indicateurs (voir figure 6). Cela m’a permis d’améliorer mes compétences en manipulation de fichiers, et en logique de transformation de données.
      </p>
    </section>
    <section id="problemes">
      <h2>📌 Problèmes rencontrés et adaptations</h2>
      <p>
        Lors de l’ajout de plusieurs contrôles sur un même ensemble, j’ai d’abord tenté d’utiliser la clé étrangère vers l’ID d’ensemble. Cela ne permettait pas de récupérer dynamiquement la bonne fiche. J’ai donc revu entièrement la logique de récupération de données, en m’appuyant sur la dernière fiche créée.
      </p>
      <p>
        Je me suis rendu compte que certaines erreurs d’ergonomie (boutons trop gros, absence de filtres) gênaient les utilisateurs. Avec mon tuteur, nous avons repensé le design pour qu’il soit plus fluide et moderne.
      </p>
    </section>
    <section id="traces">
      <h2>✅ Traces associées</h2>
      <ul>
        <li>Figure 1 : Formulaire d’observation avec popup pour les anomalies.</li>
        <li>Figure 2 : Système de filtres conformes / non conformes.</li>
        <li>Figure 3 : Nouveau MCD intégrant les multiples contrôles.</li>
        <li>Figure 4 : Formulaire de fiche de vie et navigation.</li>
        <li>Figure 5 : Système de validation + date automatique.</li>
        <li>Figure 6 : Script de parsing CSV et import DB.</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.ue-page {
  max-width: 900px;
  margin: 40px auto;
  background: var(--card-bg);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(41, 134, 204, 0.07);
  padding: 32px 24px 40px 24px;
  text-align: justify;
}
.ue-page h1 {
  color: var(--main-color);
  font-size: 2rem;
  margin-bottom: 18px;
  text-align: center;
}
.sommaire {
  background: var(--skill-bg);
  border-radius: 10px;
  padding: 16px 22px;
  margin-bottom: 28px;
  box-shadow: 0 2px 8px rgba(41, 134, 204, 0.08);
}
.sommaire h2 {
  color: var(--main-color);
  font-size: 1.15rem;
  margin-bottom: 8px;
}
.sommaire ul {
  list-style: disc inside;
  padding-left: 0;
  margin: 0;
}
.sommaire li {
  margin-bottom: 4px;
}
.sommaire a {
  color: var(--main-color);
  text-decoration: underline;
  font-weight: bold;
}
section {
  margin-bottom: 28px;
}
section h2 {
  color: var(--main-color);
  font-size: 1.18rem;
  margin-bottom: 10px;
}
ul {
  margin: 0 0 0 18px;
}
</style>