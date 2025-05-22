<template>
  <div class="ue-page">
    <h1>UE4.6 – Collaborer au sein d’une équipe informatique</h1>
    <nav class="sommaire">
      <h2>Sommaire</h2>
      <ul>
        <li><a href="#analyse">Analyse réflexive</a></li>
        <li><a href="#recul">Prise de recul et progression</a></li>
        <li><a href="#traces">Traces associées</a></li>
      </ul>
    </nav>
    <section id="analyse">
      <h2>🌟 Analyse réflexive</h2>
      <p>
        Mon intégration dans une équipe de développeurs professionnels m’a permis de développer mes compétences de collaboration en contexte réel. J’ai participé à :
      </p>
      <ul>
        <li>Des réunions techniques régulières (ex. avec Axel Jacquey ou Tabelec) pour ajuster les fonctionnalités en fonction des retours clients.</li>
        <li>La rédaction, modification et validation de logigrammes, MCD, cahiers de recette, en co-construction avec l’équipe (voir figure 7).</li>
        <li>Des tests utilisateurs en tant que testeur externe pour détecter bugs et points d’amélioration sur une autre application interne.</li>
        <li>La réunion de validation finale avec Tabelec, où j’ai présenté les applications Affaires, Numérisation des Contrôles et Suivi des Heures. Le retour a été globalement positif, à l’exception de quelques correctifs nécessaires (voir figure 8).</li>
        <li>La participation à la résolution de bugs bloquants (ex. problème d’impression Power Apps, erreurs d’expression régulière, récupération d’identifiants utilisateurs, etc.) dans des projets non initiés par moi.</li>
      </ul>
    </section>
    <section id="recul">
      <h2>📌 Prise de recul et progression</h2>
      <p>
        J’ai compris que la communication technique claire (via diagrammes, tableaux, figures) est essentielle pour aligner les attentes et éviter les malentendus.
      </p>
      <p>
        J’ai appris à prendre en compte les retours utilisateurs sans les considérer comme des critiques, mais comme des leviers d’amélioration.
      </p>
      <p>
        Je souhaite à l’avenir mieux anticiper les erreurs en intégrant plus tôt des phases de test, même en cours de développement.
      </p>
    </section>
    <section id="traces">
      <h2>✅ Traces associées</h2>
      <ul>
        <li>Figure 7 : Extrait de MCD modifié en réunion d’équipe.</li>
        <li>Figure 8 : Capture d’écran de la présentation aux clients (Tabelec).</li>
        <li>Figure 9 : Extrait du cahier de recette pour l’application Suivi des Heures.</li>
        <li>Figure 10 : Compte-rendu de réunion avec corrections à intégrer.</li>
      </ul>
    </section>
    <section>
      <h2>🎯 Conclusion et objectifs</h2>
      <p>
        Ce stage m’a permis de mettre en œuvre mes compétences techniques en développement tout en apprenant à travailler efficacement dans une équipe professionnelle. Grâce à des tâches concrètes et des projets en production, j’ai progressé à la fois en autonomie technique et en capacité à m’adapter à un environnement collectif.
      </p>
      <p>
        Pour aller plus loin, je souhaite :
        <ul>
          <li>Continuer à développer mes compétences en gestion de projet agile, en utilisant des outils de planification comme Trello ou Azure DevOps.</li>
          <li>M’améliorer dans la gestion des tests utilisateurs, pour intégrer plus tôt leurs retours dans les cycles de développement.</li>
        </ul>
      </p>
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