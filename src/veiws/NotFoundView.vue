
<template>
    <div class="fullscreen-image">
      <img src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" alt="404 Page Not Found">
    </div>
  </template>
  
  <style scoped>
  html {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  .fullscreen-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  
  .fullscreen-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>