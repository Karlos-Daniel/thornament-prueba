import {getConnection} from "./../database/database";

const getTorneos=async(request,response)=>{
    try{
        const connection=await getConnection();
        const result=await connection.query("SELECT * FROM torneo");
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const getTorneo=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result=await connection.query("SELECT * FROM torneo WHERE idtorneo=?",id);
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const addTorneo=async(request,response)=>{

    try{
        const {nombre,juego,fecha_inicio,fecha_final,descripcion}=request.body;
        
        const connection=await getConnection();
        const result = 
            await connection.query(`INSERT INTO torneo (juego_idjuego,usuario_idusuario,nombre,fecha_inicio,fecha_final,descripcion) 
            VALUE(3,${juego},"${nombre}","${fecha_inicio}","${fecha_final}","${apellido2}","${descripcion}");`);
        
    response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const deleteTorneo=async(request,response)=>{
    try{
        const {id}= request.params;
        const connection=await getConnection();
        const result = await connection.query("DELETE FROM torneo WHERE idtorneo=?", id);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const updateTorneo=async(request,response)=>{
    try{
        const {id}= request.params;
        const {nombre,descripcion,fecha_inicio,fecha_final}=request.body;
        const connection=await getConnection();

        const result = 
            await connection.query(`UPDATE torneo SET nombre=${nombre},fecha_inicio=${fecha_inicio},fecha_final=${fecha_final}, descripcion=${descripcion} WHERE idtorneo=${id}`);
    
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods={
    getTorneos,
    getTorneo,
    deleteTorneo,
    updateTorneo,
    addTorneo
};