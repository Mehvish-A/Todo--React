export const Person = (props) =>{
    console .log("props",props);
    return ( <div>


{props.children}
    <h4>Name : {props.name}</h4>
    <p>Age : {props.age}</p>
    <p>{props.age > 18 ? "Adult" : "Child"}</p>
    </div>);
};
