<script setup>
import { useQuizStore } from '@/store/quizStore';
import { useRouter } from 'vue-router';

const quizStore = useQuizStore();
const router = useRouter();

const editQuiz = (quiz) => {
    // Implement edit functionality
    console.log('Editing quiz:', quiz);
};

const logout = () => {
    quizStore.setAdminStatus(false);
    router.push('/');
};
haha
</script>

<template>
    <div>
        <h2>Admin Panel</h2>
        <button @click="logout">Logout</button>
        <div v-for="quiz in quizStore.quizzes" :key="quiz.id">
        <h3>{{ quiz.name }}</h3>
        <button @click="editQuiz(quiz)">Edit</button>
        </div>
        <!-- Add form for editing quizzes -->
    </div>
</template>
  