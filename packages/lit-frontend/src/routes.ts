import "./views/landing-page";
import "./views/profile-page";

export default [
    {
        path: "/app/profile/:userid",
        component: "profile-page"
    },
    {
        path: "/app",
        component: "landing-page"
    }
];