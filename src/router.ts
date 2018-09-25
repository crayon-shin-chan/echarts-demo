import VueRouter from 'vue-router'
import Vue from 'vue'

/** 
 * 懒加载语法，目前还不清楚，这里的懒加载是哪一种情况：
 * 1.直接分割代码，等到需要Pie组件时，再从后台加载Pie组件的代码，但是build后并没有发现Pie组件单独的代码块
 * 2.不分割代码，但是在未运行到pie路由时，并不会导入这段代码，这样由效果吗 
 * 编译结果为：
 * var Pie = function () { 
 *      return Promise.resolve().then(function () { 
 *              return __webpack_require__(/ webpackChunkName: "Pie" / /! ./component/pie/pie.vue / "./component/pie/pie.vue"); 
 *      }); 
 * };
 * 说明最后组件代码并未分割，但是使用__webpack_require__获取代码块的时机向后延迟了
 */
const Pie = () => import(/* webpackChunkName: "Pie" */ './component/pie/pie.vue')

Vue.use(VueRouter);

const router:VueRouter = new VueRouter(
    {
        routes:[
            {
                path:"/pie",
                component: Pie
            }
        ]
    }
)

export default router;

