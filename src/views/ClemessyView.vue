<template>
  <div class="clemessy">
    <h1>Stage chez Clemessy</h1>
    <section class="context">
      <h2>Contexte du stage</h2>
      <p>
        J'ai effectué mon stage de 12 semaines au sein de Eiffage Énergie Systèmes - Clemessy, dans le service Innovation, basé à Mulhouse. L’entreprise est spécialisée dans les installations électriques, l’automatisation industrielle et le génie mécanique. Mon rôle a été de participer à la digitalisation de processus internes, notamment via le développement d'applications métier avec Power Apps, Power Automate, SharePoint, ainsi que du travail sur des applications existantes développées en Java/Angular.
      </p>
      <p>
        Sous la supervision de Florence Baratta (Responsable d’activité) et Axel Jacquey (Pilote d'études techniques), j’ai collaboré avec plusieurs développeurs pour concevoir, améliorer et finaliser des applications destinées à faciliter le travail des équipes terrain : gestion des heures, numérisation des fiches de contrôle, gestion des affaires et des équipements...
      </p>
    </section>
    <p class="subtitle">Choisissez une compétence à explorer :</p>
    <div class="competence-cards">
      <router-link to="/stages/clemessy/ue41" class="competence-card">
        <img src="https://cdn-icons-png.flaticon.com/128/1218/1218411.png" alt="Développement d'application" />
        <span>
          <span class="comp-title">UE4.1</span>
          <br>
          <span class="comp-desc">Réaliser un développement d’application</span>
        </span>
      </router-link>
      <router-link to="/stages/clemessy/ue46" class="competence-card">
        <img src="https://cdn-icons-png.flaticon.com/128/8024/8024046.png" alt="Collaborer en équipe informatique" />
        <span>
          <span class="comp-title">UE4.6</span>
          <br>
          <span class="comp-desc">Collaborer au sein d’une équipe informatique</span>
        </span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.clemessy {
  max-width: 950px;
  margin: 40px auto;
  text-align: center;
  background: var(--bg-light);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(41, 134, 204, 0.07);
  padding: 32px 16px 40px 16px;
}
.context {
  text-align: justify;
  margin-bottom: 32px;
  background: var(--card-bg);
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(41, 134, 204, 0.08);
  padding: 24px 28px;
}
.clemessy h1 {
  color: var(--main-color);
  font-size: 2.1rem;
  margin-bottom: 10px;
  letter-spacing: 1px;
  font-weight: bold;
}
.context h2 {
  color: var(--main-color);
  font-size: 1.25rem;
  margin-bottom: 10px;
  text-align: left;
}
.subtitle {
  color: var(--text-dark);
  font-size: 1.13rem;
  margin-bottom: 28px;
}
.competence-cards {
  display: flex;
  justify-content: center;
  gap: 36px;
  margin-top: 24px;
  flex-wrap: wrap;
}
.competence-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  background: var(--card-bg);
  border-radius: 14px;
  padding: 32px 38px;
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s, background 0.2s;
  box-shadow: 0 6px 24px rgba(41, 134, 204, 0.13);
  min-width: 270px;
  max-width: 270px;
  min-height: 270px;
  max-height: 270px;
  border: 2px solid var(--main-color);
  cursor: pointer;
  box-sizing: border-box;
}
.competence-card:hover {
  box-shadow: 0 10px 32px rgba(255, 127, 80, 0.18);
  transform: translateY(-4px) scale(1.04);
  border-color: var(--accent-color);
  background: var(--skill-bg);
}
.competence-card img {
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  object-fit: contain;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(41, 134, 204, 0.10);
  padding: 6px;
  transition: background 0.2s, box-shadow 0.2s;
}
.competence-card span {
  font-size: 1.08rem;
  color: var(--main-color);
  font-weight: bold;
  text-align: center;
  line-height: 1.35;
  transition: color 0.2s;
  display: block;
  width: 100%;
}
.comp-title {
  font-size: 1.25rem;
  color: var(--accent-color);
  font-weight: bold;
  letter-spacing: 1px;
}
.comp-desc {
  font-size: 1.08rem;
  color: var(--main-color);
  font-weight: normal;
}
@media (max-width: 700px) {
  .competence-cards {
    flex-direction: column;
    gap: 22px;
    align-items: center;
  }
  .competence-card {
    min-width: 180px;
    max-width: 100%;
    width: 100%;
    min-height: unset;
    max-height: unset;
  }
}
</style>