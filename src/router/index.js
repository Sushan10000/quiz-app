import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "@/veiws/QuizesView.vue";
import QuizView from "@/veiws/QuizView.vue";
import NotFoundView from "@/veiws/NotFoundView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'quizes',
            component: QuizesView
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/quiz/:id',
            name: 'quiz',
            component: QuizView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound', 
            component: NotFoundView
        },
        {
            path: '/login'
        }
    ]
})

export default router