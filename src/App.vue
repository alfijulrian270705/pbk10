<template>
  <div id="app">
    <header>
      <h1>Sistem Manajemen Klinik Medis</h1>
      <nav>
        <router-link to="/" exact-active-class="active-link">Dashboard</router-link>
        <router-link to="/pasien" exact-active-class="active-link">Pasien</router-link>
        <router-link to="/pasien/tambah" exact-active-class="active-link">Tambah Pasien</router-link>
        <router-link to="/jadwal-dokter" exact-active-class="active-link">Jadwal Dokter</router-link>
        <router-link to="/rekam-medis" exact-active-class="active-link">Rekam Medis</router-link>
        <router-link to="/pembayaran" exact-active-class="active-link">Pembayaran</router-link>
        <router-link to="/laporan" exact-active-class="active-link">Laporan</router-link>
        <router-link to="/profil" exact-active-class="active-link">Profil</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2025 Klinik Medis</p>
    </footer>
  </div>
</template>

<style scoped>
#app {
  max-width: 900px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  color: #222;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  text-align: center;
  margin-bottom: 15px;
}
nav {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}
nav a {
  color: #555;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
nav a:hover {
  background-color: #007BFF;
  color: white;
}
.active-link {
  background-color: #0056b3;
  color: white;
  font-weight: bold;
}
main {
  flex-grow: 1;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
footer {
  text-align: center;
  margin-top: 20px;
  padding: 10px 0;
  font-size: 0.9rem;
  color: #888;
}
</style>
