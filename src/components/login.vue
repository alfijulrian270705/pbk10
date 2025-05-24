<template>
  <div class="login-container">
    <h2>Login Klinik Medis</h2>
    <form @submit.prevent="loginUser" class="login-form" autocomplete="off">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Masukkan username"
          required
          autofocus
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Masukkan password"
          required
        />
      </div>
      <button type="submit" class="btn-login">Login</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

function loginUser() {
  if (username.value === 'alfijulrian' && password.value === '27072005') {
    localStorage.setItem('isLoggedIn', 'true')
    errorMessage.value = ''
    router.push({ name: 'Dashboard' })
  } else {
    errorMessage.value = 'Username atau password salah!'
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 30px 25px;
  border-radius: 10px;
  background-color: #f8f9fa;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  margin-bottom: 25px;
  color: #2c3e50;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  font-weight: 600;
  margin-bottom: 6px;
  color: #34495e;
}

input[type='text'],
input[type='password'] {
  padding: 10px 12px;
  font-size: 16px;
  border: 2px solid #ced4da;
  border-radius: 6px;
  transition: border-color 0.3s ease;
}

input[type='text']:focus,
input[type='password']:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 6px rgba(0, 123, 255, 0.4);
}

.btn-login {
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

.btn-login:hover {
  background-color: #0056b3;
}

.error-message {
  margin-top: 15px;
  color: #e74c3c;
  font-weight: 600;
  user-select: none;
}
</style>
