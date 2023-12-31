import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

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