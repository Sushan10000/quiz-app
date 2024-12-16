<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="loginUser">
        <label for="email">Email</label>
        <input type="email" v-model="user.email" required />
        <br />
        <label for="password">Password</label>
        <input type="password" v-model="user.password" required />
        <br />
        <button type="submit">Submit</button>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const user = ref({
email: '',
password: ''
});

const loginUser = async () => {
try {
    const response = await axios.get('http://localhost:3000/users');
    const users = response.data;

    const foundUser = users.find(u => u.email === user.value.email && u.password === user.value.password);
    
    if (foundUser) {
    console.log('Login successful:', foundUser);
    // redirect to home page
    } else {
    console.log('Login failed: Invalid credentials');
    }
} catch (error) {
    console.error('Error fetching users:', error.response ? error.response.data : error.message);
}
};
</script>

<style scoped>
.login-container {
    max-width: 400px; 
    margin: 50px auto; 
    padding: 20px; 
    background-color: #f9f9f9; 
    border: 1px solid #ccc; 
    border-radius: 8px; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
}

h1 {
    text-align: center;
    color: #333;
}

.login-form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px; 
    font-weight: bold; 
    color: #555; 
}

.input-field {
    padding: 10px; 
    margin-bottom: 15px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    transition: border-color 0.3s; 
}

.input-field:focus {
    border-color: #007bff; 
    outline: none; 
}

.submit-button {
    padding: 10px;
    background-color: #007bff; 
    color: white; 
    border: none; 
    border-radius: 4px; 
    cursor: pointer; 
    font-size: 16px; 
    transition: background-color 0.3s; 
}

.submit-button:hover {
    background-color: #0056b3; 
}
</style>
