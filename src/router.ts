import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const router:VueRouter = new VueRouter(
    {
        routes:[
            {
                path:"/",
                component: null as any
            }
        ]
    }
)

export default router;

