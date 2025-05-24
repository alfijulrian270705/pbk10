<template>
  <div class="pasien-list">
    <h2>Daftar Pasien</h2>
    <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Jenis Kelamin</th>
          <th>Kontak</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pasien, index) in pasienData" :key="index">
          <td>{{ pasien.nama }}</td>
          <td>{{ pasien.umur }}</td>
          <td>{{ pasien.jenisKelamin }}</td>
          <td>{{ pasien.kontak }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pasienData: [
        { nama: 'Budi Santoso', umur: 30, jenisKelamin: 'Laki-laki', kontak: '08123456789' },
        { nama: 'Siti Aminah', umur: 25, jenisKelamin: 'Perempuan', kontak: '08198765432' },
        { nama: 'Andi Wijaya', umur: 40, jenisKelamin: 'Laki-laki', kontak: '08234567890' },
      ],
    }
  },
}
</script>

<style scoped>
.pasien-list {
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
}
th, td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}
th {
  background-color: #007BFF;
  color: white;
}
tbody tr:hover {
  background-color: #f1faff;
}
</style>
