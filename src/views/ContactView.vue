<template>
  <div class="contact">
    <h1>Contact</h1>
    <p>N'hésitez pas à me contacter via l'un de ces moyens :</p>
    <div class="contact-cards">
      <a class="contact-card" href="mailto:floryan.bornet@gmail.com">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
        <span>floryan.bornet@gmail.com</span>
      </a>
      <a class="contact-card" href="https://www.linkedin.com/in/floryan-bornet-2b08bb2a7/" target="_blank" rel="noopener">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        <span>LinkedIn</span>
      </a>
      <a class="contact-card" href="https://github.com/BornetFloryan" target="_blank" rel="noopener">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
        <span>GitHub</span>
      </a>
      <a class="contact-card" href="https://export-download.canva.com/Jp6sM/DAF9aPJp6sM/178/0-2261273211421675276.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250520%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250520T092849Z&X-Amz-Expires=34459&X-Amz-Signature=a18dc128947c8a534630e81e8acae6b79663ddb99d1b060b8943cc38d61f1529&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27curriculum_vitae.pdf&response-expires=Tue%2C%2020%20May%202025%2019%3A03%3A08%20GMT" download>
        <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="CV" />
        <span>Télécharger mon CV</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
.contact {
  max-width: 700px;
  margin: 40px auto;
  text-align: center;
  font-size: 1.15rem;
  background: var(--bg-light);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(41, 134, 204, 0.07);
  padding: 32px 16px 40px 16px;
}

.contact h1 {
  color: var(--main-color);
  margin-bottom: 24px;
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: bold;
}

.contact p {
  color: var(--text-dark);
  margin-bottom: 32px;
  font-size: 1.1rem;
}

.contact-cards {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--card-bg);
  border-radius: 14px;
  padding: 28px 36px;
  text-decoration: none;
  color: var(--text-dark);
  box-shadow: 0 6px 24px rgba(41, 134, 204, 0.13);
  min-width: 200px;
  border: 1.5px solid var(--main-color);
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s, background 0.2s;
}

.contact-card:hover {
  box-shadow: 0 8px 32px rgba(255, 127, 80, 0.18);
  transform: translateY(-4px) scale(1.04);
  border-color: var(--accent-color);
  background: var(--skill-bg);
}

.contact-card img {
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  object-fit: contain;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(41, 134, 204, 0.10);
  padding: 6px;
  transition: background 0.2s, box-shadow 0.2s;
}

.contact-card:hover img {
  background: var(--accent-color);
  box-shadow: 0 4px 16px rgba(255, 127, 80, 0.13);
}

.contact-card span {
  font-size: 1.08rem;
  font-weight: bold;
  color: var(--main-color);
  word-break: break-all;
  margin-top: 8px;
  transition: color 0.2s;
}

.contact-card:hover span {
  color: var(--text-dark);
}
</style>