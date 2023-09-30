import React, { lazy, Suspense } from 'react';
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
// import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import Grocery from './components/Grosery';

// code spliting
// dynamic import
// differential bundling
// chunking
// lazy loading
/*
 the syntex is for lazy loading so, we won't import it normally, to achive that we'll import using lazy functions &
 it will load the component with suspense
*/
const Grocery = lazy(() => import('./components/Grosery'));
const Contact = lazy(() => import('./components/Contact'));

export const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

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
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Contact />
                    </Suspense>
                )
            },
            {
                path: 'grocery',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                )
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
root.render(<RouterProvider router={appRouter} />)