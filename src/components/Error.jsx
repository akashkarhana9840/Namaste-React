import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div className="error">
            <h1>Ooops..Something went wrong!!!</h1>
            <h2>status {err.status} means {err.statusText}</h2>
            
        </div>
    )
}
export default Error;