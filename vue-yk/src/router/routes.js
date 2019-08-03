export const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:() => import('@/views/home'),
        children:[
            {
                path:'/home',
                redirect:'/home/send',
            },
            {
                path:'/home/send',
                component:() => import('@/views/send')
            },
            {
                path:'/home/classify',
                component:() => import('@/views/classify')
            },
            {
                path:'/home/vip',
                component:() => import('@/views/vip')
            },
            {
                path:'/home/car',
                component:() => import('@/views/car')
            },
            {
                path:'/home/my',
                component:() => import('@/views/my')
            }
        ]
    },
    {
        path:'/list',
        component:() => import('@/views/list')
    },
    {
        path:'/add',
        component:() => import('@/views/add')
    },
    {
        path:'*',
        component:() => import('@/views/404')
    }
]