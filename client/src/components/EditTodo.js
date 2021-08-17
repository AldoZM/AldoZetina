import React,{Fragment,useState} from "react";

const Editcliente = ({todo}) =>{

    const [rfc,setRfc] = useState(todo.rfc);
    
    //edit data
    const updateRfc = async (e) =>{
        e.preventDefault();

        try {
            const body = {rfc};
            const response = await fetch(`http://localhost:5000/todos/${todo.rfc}`,{
                method:"put",
                headers: {"Content-Type":"application/json"}, 
                body: JSON.stringify(body)
            });
            
            window.location = "/";
            //console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    return(
        <Fragment>
            <button
            type="button"
            class="btn btn-warning"
            data-toggle="modal"
            data-target={`#id${todo.rfc}`}>Edit</button>

                <div
                class="modal"
                id={`id${todo.rfc}`}
                onClick={()=>setRfc(todo.rfc)}>

                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Editar Cliente</h4>
                        <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        onClick={() => setRfc(todo.rfc)}
                        >&times;</button>
                    </div>

                    <div class="modal-body">
                        <input type="text"
                        className="form-control"
                        value={rfc}
                        onChange={e=>setRfc(e.target.value)}/>
                    </div>

                    <div class="modal-footer">
                        <button
                        type="button"
                        class="btn btn-warning"
                        data-dismiss="modal"
                        onClick={e=>updateRfc(e)}>Edit</button>

                        <button
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                        onClick={() => setRfc(todo.rfc)}>Close</button>
                    </div>
                    </div>

                </div>
                </div>
        </Fragment>
    );
};

export default Editcliente;