import VueRouter from 'vue-router'
import Vue from 'vue'

import Pie from './component/pie/pie.vue'

Vue.use(VueRouter);

const router:VueRouter = new VueRouter(
    {
        routes:[
            {
                path:"/",
                component: Pie
            }
        ]
    }
)

export default router;

