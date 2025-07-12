
import App from "@/App";
import Tasks from "@/components/pages/Tasks";
import User from "@/components/pages/user";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
    {
        path: '/',
        Component:App,
        children:[
            {
                path:"user",
                Component:User,
            },
            {
                path:"tasks",
                Component:Tasks,
            }
        ]
     
    }
])
export default routes;