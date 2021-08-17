import React,{Fragment,useEffect,useState} from "react";
import EditTodo from "./EditTodo";

const ListTodos = () =>{


    //delete
    const deleteTodo = async (RFC) =>{
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${RFC}`,{
                method:"delete"
            });

            //checking deleting
            //console.log(deleteTodo)

            setTodos(todos.filter(todo => todo.rfc !== RFC));
        } catch (err) {
            console.error(err.message);
        };
    }

    //puting the sata inside the table
    const [todos,setTodos] = useState([]);


    const getTodos = async() => {
        try {
            // get is the defatult request
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            //console.log(jsonData); // these is all the data
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(()=>{
        getTodos();
    },[]); // [] = just one request

    // checking
    //console.log(todos);

    return(
    <Fragment>
        <table class="table mt-5 text-center">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Nombre(s)</th>
                <th scope="col">Apellido paterno</th>
                <th scope="col">Apellido materno</th>
                <th scope="col">RFC</th>
                <th scope="col">Calle</th>
                <th scope="col">Numero</th>
                <th scope="col">Colonia</th>
                <th scope="col">CP</th>
                <th scope="col">Estado</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {/*<tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>*/}
                {todos.map(todo =>( //showing all the info
                    <tr key={todo.rfc}>
                        <td>{todo.nombre}</td>
                        <td>{todo.apellido_paterno}</td>
                        <td>{todo.apellido_materno}</td>
                        <td>{todo.rfc}</td>
                        <td>{todo.calle}</td>
                        <td>{todo.numero}</td>
                        <td>{todo.colonia}</td>
                        <td>{todo.codigo_postal}</td>
                        <td>{todo.estado}</td>
                        <td><EditTodo todo={todo}/></td> 
                        <td>
                            <button
                            className="btn btn-danger"
                            onClick={() => deleteTodo(todo.rfc)}>Delete</button>
                        </td>
                    </tr>
                ))};
            </tbody>
            </table>
    </Fragment>);
};

export default ListTodos;