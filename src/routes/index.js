import HomePage from "../containers/home/HomePage"
import AboutPage from "../containers/home/AboutPage"
import ListMoviePage from "../containers/home/ListMoviePage"

const routeHome = [
    {
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        exact: false,
        path: "/about",
        component: AboutPage
    },
    {
        exact: false,
        path: "/list-movie",
        component: ListMoviePage
    }
]

export { routeHome }