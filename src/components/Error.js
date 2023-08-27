/**
    * React router gives a hook called useRouterError == > gives a better error msgs whether it's a n/w fails it's give a specific msg
    * identify hooks whenever any import from react and react router starts with use word it's a hook
 */
import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    // returns an object with much specific error info. which can be added to error page.
  return (
    <div>
        <h1> Opps something went wrong!!! </h1>
        <h2> Page not found!!! </h2>
        <h3> {error.status} - {error.statusText}</h3>
    </div>
  )
}

export default Error