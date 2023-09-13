import axiosConnection from '../services/DataService'

export default async function getInfoFromSource(){
    let dateOfUpdate=0;
    try{
        dateOfUpdate = parseInt(localStorage.getItem('dateOfUpdate') || '0', 10); //Convierte a numero la fecha para poder compararla
    }
    catch{
        alert("No hay informacion almacenada");    
    }

    const updateTime = 1000 * 60 * 60 * 24; //Un dia en milisegundos

    if(Date.now() - dateOfUpdate > updateTime){
        try{
            const response= await axiosConnection.getAllInfo();

            await localStorage.setItem('podCastInfo', JSON.stringify(response.data));
            localStorage.setItem('dateOfUpdate', Date.now().toString());
            console.log("actualizado");
        }
        catch(error){
            console.error("Error al obtener la información:", error);
        }
    }

    //return JSON.parse(localStorage.getItem('podCastInfo'));
}