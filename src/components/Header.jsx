// this is just a function
// myFunctionToEvaluateTotal
export const name = (text) => text

// this is the React Component
const Header = (props) => <div>
    <div>{props.title}</div>
    <div>Contact</div>
    {
        console.log(props)
    }
    <div>{props.bottom.toPrecision(2)}</div>
</div>

// only one can be the default export from a file
// but you can export as many things as you like!
export default Header

// props is always going to be an object
// containing all the props you're invoking the component with!

// this is the props object!
// {
//     title: xxx
// }