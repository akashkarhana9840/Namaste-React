const root = ReactDOM.createRoot(document.getElementById('root'))

/*const heading = React.createElement('h1', { id: "heading" }, "hello world from react")
root.render(heading)*/

const parent = React.createElement("div", { id: 'parent' }, [
  React.createElement("div", { id: 'child1' }, [
    React.createElement("h1", {}, "oye mai h1 hun  child 1 ka"),
    React.createElement("h2", {}, "oye mai h2 hu child 1 ka "),
  ]),
  React.createElement("div", { id: 'child2' }, [
    React.createElement("h1", {}, "oye mai h1 hun  child 2 ka"),
    React.createElement("h2", {}, "oye mai h2 hu child 2 ka "),
  ]),
]);
root.render(parent);