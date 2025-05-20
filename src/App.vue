<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo">Mon Portfolio</div>
      <ul class="nav-links">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/about">À propos</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false
    }
  }
}
</script>

<style>
:root {
  --main-color: #ff7f50;
  --accent-color: #f7cac9;
  --bg-light: #f5f8fa;
  --card-bg: #ffffff;
  --text-dark: #2c3e50;
  --text-light: #555;
  --skill-bg: #ffe5dd;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.07);
}

.logo {
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--main-color);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: inline-block;
  position: relative;
}

.nav-links a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a.router-link-exact-active,
.nav-links a:hover,
.dropdown-toggle:hover {
  color: var(--main-color);
}

.dropdown-menu {
  display: block;
  position: absolute;
  top: 35px;
  left: 0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.07);
  border-radius: 8px;
  min-width: 220px;
  z-index: 100;
  padding: 10px 0;
}

.dropdown-menu li {
  display: block;
  padding: 0;
}

.dropdown-menu a {
  display: block;
  padding: 10px 24px;
  color: #2c3e50;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.dropdown-menu a:hover {
  background: #f0f0f0;
  color: #42b983;
}
</style>