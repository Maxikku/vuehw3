import Home from '@/components/Home';
import Contacts from '@/components/Contacts';
import MyProject from '@/components/MyProject'




export const routes = [
    {
        path: '', component: Home
    },
    {
        path: '/contacts', component: Contacts
    },
    {
        path: '/myproj', component: MyProject
    }
]