<template>
    <div class="reg-cont">
        <h1>Register</h1>
        <form @submit.prevent="createUser">
        <label for="name">Name</label>
        <input type="text" v-model="user.name" required />
        <br />
        <label for="email">Email</label>
        <input type="email" v-model="user.email" required />
        <br />
        <label for="password">Password</label>
        <input type="password" v-model="user.password" required />
        <br />
        <button type="submit">Submit</button>
        </form>
        <div v-if="message">{{ message }}</div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const user = ref({
name: '',
email: '',
password: '',
isAdmin: false
});

const message = ref('');

const createUser = async () => {
try {
    const response = await axios.post('http://localhost:3000/users', user.value);
    message.value = `User created successfully! ID: ${response.data.id}`;
    resetForm();
} catch (error) {
    console.error("There was an error creating the user:", error);
    message.value = 'Error creating user.';
}
};

const resetForm = () => {
user.value.name = '';
user.value.email = '';
user.value.password = '';
};
</script>

<style scoped>
.reg-cont {
    max-width: 400px;
    margin: 20px auto;
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

.user-form {
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

.message {
    margin-top: 20px;
    text-align: center;
    color: #28a745;
}
</style>
  