import "./views/landing-page";
import "./views/profile-page";
import "./views/guitar-page";
import "./views/song-page";

export default [
    {
        path: "/app/profile/:userid",
        component: "profile-page"
    },
    {
        path: "/app",
        component: "landing-page"
    },
    {
        path: "/app/song/from-the-start",
        component: "song-page"
    },
    {
        path: "/app/guitar",
        component: "guitar-page"
    },
    
];