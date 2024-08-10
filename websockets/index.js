import { WebSocketServer } from "ws";
const wss=new WebSocketServer({port:8000});

wss.on('connection',(ws)=>{
    ws.on('message',(data)=>{
        console.log('recieved : ',data.toString())
    });
    ws.send('Connected')
})
export default wss;
