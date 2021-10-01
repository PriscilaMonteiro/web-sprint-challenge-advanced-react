# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful component implement logic and state, it keeps track of changing data.
Functional Components doesn't have state. simple accept data and display them in some form, they are mainly responsible for rendering UI, in other words they just PRINT Out what is given to them via props, or they always render the same thing.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

ComponentWillMount can be replaced with the constructor() and it is invoked just before mounting occurs, it is called before render() and it is called on server rendering, so you can use it when you need to fetch data from remote servers.
ComponentWillUpdate can be replaced by componentDidUpdate() and it is invoked just before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.

3. Define stateful logic.

It is ANY code that is used to manipulate (also create) data.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange, Act & Assert.

Arrange: is the use of the render method to render the React Element that you wanna test into a virtual DOM.
Act: you are querying the DOM for a specific node that we expect to see in the browser. Let's say, finding it.
Assert: it is the verification that the element exists for example or if a button is not disabled (expect & not.toBeDisabled()) or if an alert message is correct using (expect & .toHaveTextContent('')).
