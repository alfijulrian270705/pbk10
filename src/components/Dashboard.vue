<template>
  <div class="dashboard">
    <h2>Sistem Manajemen RS R.ERIANI</h2>
    <p>Ringkasan aktivitas rumah sakit hari ini.</p>
    <div class="stats">
      <div class="card">
        <h3>Pasien Hari Ini</h3>
        <p>23</p>
      </div>
      <div class="card">
        <h3>Jadwal Dokter</h3>
        <p>5 Dokter</p>
      </div>
      <div class="card">
        <h3>Transaksi Pembayaran</h3>
        <p>Rp 5.000.000</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  text-align: center;
}
.stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.card {
  background-color: white;
  padding: 15px 25px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  width: 150px;
}
.card h3 {
  margin-bottom: 10px;
  color: #007BFF;
}
.card p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}
</style>
