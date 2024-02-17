import  document  from "../db.js";
export const  getDocument = async (id) =>{
    if(id === null ) return ;

    const Docuemnt = await document.findById(id)

    if(Docuemnt) return Docuemnt;

    return await document.create({
        _id:id,
        data:""
    })
}

export const updateDocument = async (id,data)=>{
    return await document.findByIdAndUpdate(id,{data })

}