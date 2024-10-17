import { defineStore } from "pinia";
import quizzes from '../data/quizes.json'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    quizzes: quizzes,
    isAdmin: false,
    search: "",
  }),
  actions: {
    setAdminStatus(status) {
      this.isAdmin = status
    },
    setSearch(value) {
      this.search = value
    },
    updateQuiz(updatedQuiz) {
      const index = this.quizzes.findIndex(quiz => quiz.id === updatedQuiz.id)
      if (index !== -1) {
        this.quizzes[index] = updatedQuiz
      }
    },
  },
  getters: {
    filteredQuizzes: (state) => {
      return state.quizzes.filter(quiz =>
        quiz.name.toLowerCase().includes(state.search.toLowerCase())
      )
    }
  }
})