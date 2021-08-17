import React,{Fragment,useState} from "react";

const InputTodo = () =>{

    const[rfc,setRfc] = useState("");
    const[apellido_paterno,setApellido_paterno] = useState("");
    const[apellido_materno,setApellido_materno] = useState("");
    const[nombre,setNombre] = useState("");
    const[calle,setCalle] = useState("");
    const[numero,setNumero] = useState("");
    const[colonia,setColonia] = useState("");
    const[codigo_postal,setCodigo_postal] = useState("");
    const[estado,setEstado] = useState("");

    const onSubmitForm = async e=>{
        e.preventDefault();
        try {
            const body = {
                rfc,
                nombre,
                apellido_paterno,
                apellido_materno,
                calle,
                numero,
                colonia,
                codigo_postal,
                estado
            };
            const response = await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
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
        <h1 className="text-center mt-5">Formato para la información del cliente</h1>
        <h5 className="text-center mb-5">¡¡ Gracias por comprar con nosotros !!</h5>
        <form className="needs-validation" onSubmit={onSubmitForm}>
            <label className="form-label">RFC</label>
            <input
            type="text"
            className="form-control"
            placeholder="Ej: GH48D7XXX"
            value={rfc}
            onChange={e=>setRfc(e.target.value)}/>

            <label className="form-label">Nombre</label>
            <input
            type="text"
            className="form-control"
            placeholder="nombre"
            value={nombre}
            onChange={e=>setNombre(e.target.value)}/>

            <label className="form-label">Apellido paterno</label>
            <input
            type="text"
            className="form-control"
            placeholder="apellido"
            value={apellido_paterno}
            onChange={e=>setApellido_paterno(e.target.value)}/>

            <label className="form-label">Apellido materno</label>
            <input
            type="text"
            className="form-control"
            placeholder="apellido"
            value={apellido_materno}
            onChange={e=>setApellido_materno(e.target.value)}/>

            <label className="form-label">Calle</label>
            <input
            type="text"
            className="form-control"
            placeholder="Ej: calle"
            value={calle}
            onChange={e=>setCalle(e.target.value)}/>

            <label className="form-label">Num. Calle</label>
            <input
            type="text"
            className="form-control"
            placeholder="Ej: 892"
            value={numero}
            onChange={e=>setNumero(parseInt(e.target.value))}/>

            <label className="form-label">Colonia</label>
            <input
            type="text"
            className="form-control"
            placeholder="Ej: colonia"
            value={colonia}
            onChange={e=>setColonia(e.target.value)}/>

            <label className="form-label">Codigo Postal</label>
            <input
            type="text"
            className="form-control"
            placeholder="Ej: 15702"
            value={codigo_postal}
            onChange={e=>setCodigo_postal(parseInt(e.target.value))}/>

            <label className="form-label">Estado</label>
            <input
            type="text"
            className="form-control"
            placeholder="Ej: estado"
            value={estado}
            onChange={e=>setEstado(e.target.value)}/>
            
            <button class="w-100 btn btn-primary btn-lg mt-5">Registrar</button>
        </form>
    </Fragment>);
};

export default InputTodo;