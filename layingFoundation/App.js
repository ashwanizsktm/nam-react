import React from "react";
import ReactDOM from "react-dom/client";

// React elements => basically creates the object then it renders to htmlElement
// React.createElement => ReactElement-js Object => HTMLElement(render)
const heading = React.createElement("h1", { className: "heading" }, "Welcome to react");

//   jsx:- it's not the part of react it's the independent thing which makes our lifr easier to 
//  to write html in react.
// this is not html,  this is javascript react.
// we can say it looks like html or xml syntex.
// it is not a js as well so how it works
// JSX (transpiled before it reaches to the js) ==> parcel ==> Babel: -it will trnspile to js to understand by the browser.

// Jsx => React.createElement => ReactElement-js Object => HTMLElement(render)
// babel job is to create React.createElement form jsx.
// attribues would be given to jxs is camelcasing.

// () will be used when your jsx is too much line of code.
const jsxHeading = (<h1 className="heading">This is jsx heading</h1>);


// React components
// 1. class based component => OLD



// 2. functional component => NEW
//   A javascript function which returns a react element or A function which returns some peice of jsx is
//   called functional component.

// what is component composition
// Ans:- when we are using one component inside the other it is called component composition.

// const headingComponent = () => {
//     return (<h1>This is the functional component "the heading"</h1>)
// }

const Title = () => (
    <h1>This is the title</h1>
);
// shorter syntex
const data = 10; 
// right now this data is hardcoded let's suppose this data is coming from the api & it has some malicious Data or someone
// can inject few peices of javascript in your browsers by this they can steal all the cookies localstorage & session storage data.
// there may be some malicious data in the api which can leads in to security issues
//but the amazing thing about the jsx is it senetize the data even before excuting it, if it'll be the malicious data
// it'll ignore & stop running these

const HeadingComponent2 = () => (
    <div className="container">
        <Title />
        {/* other way */}
        <Title></Title>
        {/* one another way */}

        {Title()}

        {/* super power of jsx we can write any peice of js code inside the {} */}
        <h2>{data + 1}</h2>
        <h1 className="heading">This is the functional 
        component "the heading"</h1>
    </div>

);



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingCompon