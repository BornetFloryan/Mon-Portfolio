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
}
.contact h1 {
  color: var(--main-color);
  margin-bottom: 24px;
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
  background: #f8f8f8;
  border-radius: 12px;
  padding: 24px 32px;
  text-decoration: none;
  color: #2c3e50;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.10);
  transition: box-shadow 0.2s, transform 0.2s;
  min-width: 180px;
}
.contact-card:hover {
  box-shadow: 0 6px 24px rgba(66, 185, 131, 0.18);
  transform: translateY(-4px) scale(1.04);
}
.contact-card img {
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  object-fit: contain;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(44, 62, 80, 0.08);
}
.contact-card span {
  font-size: 1.08rem;
  font-weight: bold;
  color: #2c3e50;
  word-break: break-all;
}
</style>