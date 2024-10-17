<template>
    <div>
      <h1>Create User</h1>
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
  
  <style>
  /* Add your styles here if needed */
  </style>
  