import {createRouter, createWebHashHistory} from 'vue-router'
import MaHome from '@/views/MaHome.vue'
import PageDeux from '@/views/PageDeux.vue'
import PageDynamique from '@/views/PageDynamique.vue'



const router = createRouter({

    history : createWebHashHistory(),
     routes: [
        {
            name : 'home',
            path: '/',
            component : MaHome
        }, 
        {
            name : 'deux',
            path : '/deux',
            component : PageDeux
        }, 
        {
            name : "dd",
            path : '/dynamique/:id',
            component : PageDynamique,
            props : true
        }
     ]
})


export default router;