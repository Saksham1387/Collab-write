import {Server } from "socket.io"
import  {getDocument,updateDocument}  from "./Controller/document-controller.js"

const io = new Server(9000,{
    cors:{
        origin:'*'
    }
})

io.on('connection',socket =>{
    socket.on('get-document',async documentId =>{
        const document = await getDocument(documentId);
        socket.join(documentId);
        socket.emit('load-document',document.data)

        socket.on('send-changes',delta =>{
            socket.broadcast.to(documentId).emit('receive-changes',delta);
        })

        socket.on('save-document',async data=>{
            await updateDocument(documentId,data);
        })
    })
})