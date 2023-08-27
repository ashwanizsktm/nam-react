const heading = React.createElement("h1", { id: 'heading' }, "Hello world from React!");

// console.log(heading);
// it will not give the html element instead it will give the object. // reactElemet is an object 
// root.render(heading);
// this render methods is converting heading(the object) in html h1 tag & putting it into the Dom.

// create a nested tags inside dom
/*
<div id="parent">
    <div id="child">
        <h1 id="heading"> I am h1 tag </h1>
    </div>
</div>
*/
const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div',
        { id: 'child' }, [
        React.createElement('h1', {}, 'I am H1 tag'),
        React.createElement('h2', {}, 'I am H2 tag'),
    ]),
    React.createElement('div',
        { id: 'child-2' }, [
        React.createElement('h1', {}, 'I am H1 tag'),
        React.createElement('h2', {}, 'I am H2 tag'),
    ]),
]);

// To get rid of complicated structure as above we use something called jsx.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

// conclusion.
// react is a javascript library wich can be applied to a small portion of your web app
// for example footer, header, section. the react code only be applied to the root 
// not above and not below to the elemet with id root.
