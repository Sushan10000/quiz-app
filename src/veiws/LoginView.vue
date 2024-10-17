<template>
    <div>
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

<style>
/* Add your styles here if needed */
</style>
