import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../components/Dashboard.vue'
import JadwalDokter from '../components/JadwalDokter.vue'
import Pembayaran from '../components/Pembayaran.vue'
import Laporan from '../components/Laporan.vue'
import Profil from '../components/Profil.vue'
import RekamMedis from '../components/RekamMedis.vue'

import DaftarPasien from '../components/pasien/DaftarPasien.vue'
import Login from '../components/login.vue'

// Fungsi sederhana cek login pakai localStorage (bisa disesuaikan)
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true'
}

const routes = [
    { path: '/login', name: 'Login', component: Login },

    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/jadwal-dokter', name: 'JadwalDokter', component: JadwalDokter },
    { path: '/pembayaran', name: 'Pembayaran', component: Pembayaran },
    { path: '/laporan', name: 'Laporan', component: Laporan },
    { path: '/profil', name: 'Profil', component: Profil },
    { path: '/rekam-medis', name: 'RekamMedis', component: RekamMedis },

    {
        path: '/pasien',
        name: 'DaftarPasien',
        component: DaftarPasien,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Navigation guard untuk proteksi halaman selain login
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isLoggedIn()) {
        // Jika belum login dan bukan halaman login, redirect ke login
        next({ name: 'Login' })
    } else if (to.name === 'Login' && isLoggedIn()) {
        // Jika sudah login tapi akses halaman login, redirect ke dashboard
        next({ name: 'Dashboard' })
    } else {
        // Lanjutkan navigasi
        next()
    }
})

export default router