import './chat.scss';
import {useState} from 'react'
// import TypingIndicator from './typing-indicator'

const newMessage={
    userName:"",
    msg:""
}

function Chat ()  {
const [state,setState]=useState({
      conversation: [],
       newMessage
    
})
const handleChange = e => {
    const {name, value } = e.target
    setState(prev => ({
        ...prev,
        newMessage:{
            ...prev.newMessage,
            userName:"me",
            [name]:value,
        }
    }))
    
} 
const handleAdd  = () =>{
    setState(prev => ({
        ...prev,
        conversation:[
            ...prev.conversation,
            prev.newMessage
        ],
        newMessage: {
            msg:"ok "
        }
    })
    )
     answer();
}
const answer =()=>{
    setState(prev =>({
        ...prev,
        conversation:[
            ...prev.conversation,
            prev.newMessage
        ],
        newMessage:{
            msg:""
        }
    }))
    }
    return (
        <>
            <div className="col">
                <div className="row">
                   <input type="text" className="message" placeholder="message" name="msg" onChange={handleChange} value={state.newMessage.msg}/>
                   <button onClick={handleAdd} >send</button>
                </div>

                <div className="row">
                    <ul className="chatbox"> 
                    {state.conversation.map((msg) =>
                    <li className={msg.userName==='me'? 'me':'friend'}>{msg.msg}</li>
                    )}
                   {/* <li className='hideMe'><TypingIndicator/></li> */}
                    <div ></div>
                    </ul>
                   
                </div>
            
            </div>    
        </>
    )
}

export default Chat;

