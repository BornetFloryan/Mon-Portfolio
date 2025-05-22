<template>
  <div class="home">
    <div class="hero">
      <img class="profile-pic" src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Photo de profil" />
      <div>
        <h1>Bienvenue sur mon portfolio</h1>
        <h2>Floryan Bornet</h2>
        <p class="subtitle">
          Étudiant en 2<sup>e</sup> année de BUT Informatique à l'IUT Nord Franche-Comté.<br>
          Passionné par le développement logiciel, le web et l'innovation.
        </p>
        <div class="links">
          <a href="mailto:floryan.bornet@gmail.com" title="Mail"><img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Mail" /></a>
          <a href="https://www.linkedin.com/in/floryan-bornet/" target="_blank" title="LinkedIn"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
          <a href="https://github.com/BornetFloryan" target="_blank" title="GitHub"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" /></a>
          <a href="https://export-download.canva.com/Jp6sM/DAF9aPJp6sM/178/0-2261273211421675276.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250520%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250520T092849Z&X-Amz-Expires=34459&X-Amz-Signature=a18dc128947c8a534630e81e8acae6b79663ddb99d1b060b8943cc38d61f1529&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27curriculum_vitae.pdf&response-expires=Tue%2C%2020%20May%202025%2019%3A03%3A08%20GMT" download title="Télécharger mon CV"><img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="CV" /></a>
        </div>
      </div>
    </div>
    <div class="about-bloc">
      <h3>À propos de moi</h3>
      <p>
        Je suis passionné par l'informatique, la programmation et l'innovation technique. J'aime relever des défis, apprendre de nouvelles technologies et travailler en équipe sur des projets concrets. 
      </p>
      <ul class="quick-skills">
        <li>Java</li>
        <li>Python</li>
        <li>Vue.js</li>
        <li>SQL</li>
        <li>Arduino</li>
        <li>Gestion de projet</li>
      </ul>
    </div>
    <h3 class="stage-title">Mes stages</h3>
    <hr class="stage-separator" />
    <div class="competence-choices">
      <router-link to="/stages/clemessy" class="competence-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_Clemessy.png" alt="Stage chez Clemessy" />
        <span class="card-title">Stage chez Clemessy</span>
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
body {
  background: var(--bg-light);
}

.home {
  max-width: 1100px;
  margin: 40px auto;
  text-align: center;
  background: var(--bg-light);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(41, 134, 204, 0.07);
  padding-bottom: 32px;
}

.hero {
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: center;
  margin-bottom: 18px;
  background: linear-gradient(90deg, var(--main-color) 0%, #ffb385 100%);
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(255, 127, 80, 0.10);
  color: #2c3e50;
  padding: 32px 24px;
}

.hero h1,
.hero h2,
.subtitle {
  color: #2c3e50;
  text-shadow: none;
}

.profile-pic {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  background: #fff;
  box-shadow: 0 2px 8px rgba(41, 134, 204, 0.10);
}

.hero h1 {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 2.1rem;
  letter-spacing: 1px;
}

.hero h2 {
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 8px;
}

.links {
  margin: 14px 0 0 0;
  display: flex;
  gap: 18px;
  justify-content: center;
}
.links img {
  width: 32px;
  height: 32px;
  transition: transform 0.2s, filter 0.2s;
  filter: grayscale(30%);
  background: #fff;
  border-radius: 8px;
  padding: 3px;
}
.links img:hover {
  transform: scale(1.15);
  filter: none;
  background: var(--accent-color);
}

.about-bloc {
  background: var(--card-bg);
  border-radius: 14px;
  margin: 32px auto 24px auto;
  padding: 28px 36px;
  box-shadow: 0 2px 12px rgba(41, 134, 204, 0.08);
  max-width: 700px;
}
.about-bloc h3 {
  color: var(--main-color);
  margin-bottom: 10px;
  text-align: left;
}
.about-bloc p {
  margin-bottom: 12px;
  color: var(--text-dark);
  text-align: justify;
  justify-content: center;
}
.quick-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
}
.quick-skills li {
  background: var(--skill-bg);
  color: var(--main-color);
  border-radius: 8px;
  padding: 6px 16px;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid var(--main-color);
  box-shadow: 0 1px 4px rgba(41, 134, 204, 0.06);
}

.stage-title {
  color: var(--main-color);
  margin-bottom: 12px;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
}

.stage-separator {
  width: 120px;
  margin: 0 auto 24px auto;
  border: none;
  border-top: 2.5px solid var(--main-color);
  opacity: 0.7;
}

.competence-choices {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.competence-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  background: var(--card-bg);
  border-radius: 14px;
  padding: 28px 36px 18px 36px;
  transition: box-shadow 0.2s, transform 0.2s;
  box-shadow: 0 6px 24px rgba(41, 134, 204, 0.13);
  min-height: 200px;
  min-width: 100px;
  border: 1.5px solid var(--main-color);
}
.competence-card:hover {
  box-shadow: 0 8px 32px rgba(160, 132, 232, 0.18);
  transform: translateY(-4px) scale(1.04);
  border-color: var(--accent-color);
}

.competence-card img {
  width: 170px;
  height: 100px;
  margin-bottom: 18px;
  object-fit: contain;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(41, 134, 204, 0.10); 
}

.card-title {
  font-size: 1.13rem;
  color: var(--main-color);
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
  width: 100%;
  display: block;
  margin-top: 0;
  letter-spacing: 0.5px;
}
</style>