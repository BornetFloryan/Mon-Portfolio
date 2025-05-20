<template>
  <div class="clemessy">
    <h1>Stage chez Clemessy</h1>
    <p>Choisissez une compétence à explorer :</p>
    <div class="competence-cards">
      <router-link to="/stages/clemessy/ue41" class="competence-card">
        <img src="https://cdn-icons-png.flaticon.com/128/1218/1218411.png" alt="Développement d'application" />
        <span>Compétence UE4.1<br>Réaliser un développement d’application</span>
      </router-link>
      <router-link to="/stages/clemessy/ue46" class="competence-card">
        <img src="https://cdn-icons-png.flaticon.com/128/8024/8024046.png" alt="Collaborer en équipe informatique" />
        <span>Compétence UE4.6<br>Collaborer au sein d’une équipe informatique</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClemessyView'
}
</script>

<style scoped>
.clemessy {
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
}
.competence-cards {
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
  background: #f8f8f8;
  border-radius: 12px;
  padding: 28px 36px;
  transition: box-shadow 0.2s, transform 0.2s;
  box-shadow: 0 6px 24px rgba(44, 62, 80, 0.15);
  min-width: 220px;
}
.competence-card:hover {
  box-shadow: 0 10px 32px rgba(66, 185, 131, 0.22);
  transform: translateY(-4px) scale(1.04);
}
.competence-card img {
  width: 90px;
  height: 90px;
  margin-bottom: 18px;
  object-fit: contain;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.10);
}
.competence-card span {
  font-size: 1.08rem;
  color: #2c3e50;
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
}
</style>