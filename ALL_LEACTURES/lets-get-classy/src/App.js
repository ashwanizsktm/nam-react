import React from 'react';
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

/**
   * This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL
     and manage the history stack.
   * It also enables the v6.4 data APIs like loaders, actions, fetchers and more.
 * 
 */
export const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
             { 
             /* right now when the about, contact route loads, then we loose our header component
             * so in that case we use children routes.
              if path is / ==> home(body)
              if path is /about ===> about page
              if path is /contact ===> contact page

              outlet gives the power we are wsitching the route from one to other. whenever the route changes
              the Outlet will be replaced with the children paths & component
             */
             }
           <Outlet />
        </div>
    )
}
/**
 * Create routing configuration with createBrowserRouter,
 * Register or provide with(RouterProvider) the appRouter variable to the render mthd so it'll reflect on web page.
 */
/* 
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'contact',
        element: <Contact />
    }
])

*/

/* right now when the about, contact route loads, then we loose our header component
    * so in that case we use children routes.
*/

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'restaurant/:id',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])


const root = ReactDom.createRoot(document.getElementById("root"));

/**
    * Earlier we were rendering the <AppLayout /> directly ==> root.render(<AppLayout />)
    * now we'll use the RouterProvider ==> root.render(<RouterProvider router={appRouter}/>)
 */

root.render(<RouterProvider router={appRouter}/>)
