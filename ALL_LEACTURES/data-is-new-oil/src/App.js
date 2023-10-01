import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
// import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
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


    const [userName, setUserName] = useState()
    // authentication
    useEffect(() => {
        //make an api call to fetch the user details we are getting result.
        // now here's how the value of UserContext will be updated. using UserContext.provider(which we've creted)
        (async () => {
            const data = await fetch("https://api.github.com/users/ashwanizsktm");
            const json = await data.json();
            // let's suppose user is getting logged in a sec bcz api is taking some time
            setUserName(json.name);
        })();
    }, []);

    // we can even send the different values for header we want to then we only have to wrap the header inside the UserContext.

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className='app'>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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