import homePage from './pages/home-page.cmp.js';
import bookApp from './pages/book-app.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    }
    // {
    //     path: '/car/edit/:carId?',
    //     component: carEdit
    // },
    // {
    //     path: '/car/:carId',
    //     component: carDetails
    // },
];

export const router = new VueRouter({ routes });