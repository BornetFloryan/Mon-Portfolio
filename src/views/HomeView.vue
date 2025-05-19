<template>
  <div class="home">
    <h1>Bienvenue sur mon portfolio</h1>
    <p>
      Je m'appelle Floryan Bornet, étudiant en 2<sup>e</sup> année de BUT Informatique. Découvrez ci-dessous deux compétences majeures acquises durant mon parcours.
    </p>
    <div class="competence-choices">
      <router-link to="/competences#dev" class="competence-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png" alt="Développement d'applications" />
        <span>Développement d'applications</span>
      </router-link>
      <router-link to="/competences#bdd" class="competence-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721304.png" alt="Gestion de bases de données" />
        <span>Gestion de bases de données</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
}

.competence-choices {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
}

.competence-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  background: #f8f8f8;
  border-radius: 12px;
  padding: 24px 32px;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.07);
}

.competence-card:hover {
  box-shadow: 0 4px 16px rgba(66, 185, 131, 0.15);
}

.competence-card img {
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
}

.competence-card span {
  font-size: 1.1rem;
  color: #2c3e50;
  font-weight: bold;
}
</style>