<template>
  <div class="stages">
    <h1>Mes stages</h1>
    <div class="stages-list">
      <router-link to="/stages/clemessy" class="stage-card">
        <div class="stage-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_Clemessy.png"
            alt="Logo Clemessy"
            class="stage-logo"
          />
          <div class="stage-title-block">
            <div class="stage-title">Clemessy</div>
            <span class="stage-subtitle">Eiffage Énergie Systèmes</span>
          </div>
        </div>
        <div class="stage-info">
          <span class="stage-location">Mulhouse</span>
          <span class="stage-date">Avril - Juin 2025</span>
        </div>
        <div class="stage-desc">
          Stage de 12 semaines au service Innovation : digitalisation de processus internes, développement Power Apps, Power Automate, SharePoint, Java/Angular.
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StagesView'
}
</script>

<style scoped>
.stages {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 16px 32px 16px;
}
.stages h1 {
  color: var(--main-color);
  font-size: 2rem;
  margin-bottom: 28px;
  text-align: center;
}
.stages-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
}
.stage-card {
  display: block;
  width: 100%;
  max-width: 600px;
  background: #fff8f3;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(255,127,80,0.13);
  padding: 28px 36px;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s, background 0.2s;
  border: 2.5px solid #e2001a;
  position: relative;
}
.stage-card:hover {
  box-shadow: 0 10px 32px rgba(41,134,204,0.18);
  transform: translateY(-4px) scale(1.03);
  border-color: #ff7f50;
  background: #fff3e6;
}
.stage-header {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 8px;
  justify-content: flex-start;
}
.stage-logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(41,134,204,0.10);
  padding: 6px;
  border: 1.5px solid #e2001a;
  flex-shrink: 0;
}
.stage-title-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 8px;
}
.stage-title {
  font-size: 1.35rem;
  font-weight: bold;
  color: #e2001a;
  line-height: 1.1;
  text-align: left;
}
.stage-subtitle {
  font-size: 1rem;
  color: #2c3e50;
  font-weight: normal;
  letter-spacing: 0.5px;
  text-align: left;
}
.stage-info {
  font-size: 1rem;
  color: #ff7f50;
  margin-bottom: 10px;
  display: flex;
  gap: 18px;
}
.stage-desc {
  color: #2c3e50;
  font-size: 1.08rem;
  text-align: justify;
}
</style>