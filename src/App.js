import {useState} from 'react';
import './App.css';

function App() {
    const [name, setName] = useState("");
    const [chats, setChats] = useState([
        {name:'User1',message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' },
        {name:'User2',message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' },
    ]);
    const [msg,setMsg] = useState('');

    const sendChat = ()=>{
        const c = [...chats];
        c.push({name,message:msg});
        setChats(c);
        setMsg('');
    }

    return (
        <div className="background">
            <div className="contentbox">
                <div className="chat_container">
                    {chats.map((c)=> (
                        <div className={`container ${c.name===name ? 'me': ''}`}>
                            <p className="msg">
                                <strong>{c.name}: </strong>
                                <span>{c.message}</span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="inputbox">
                    {<div>
                        <input className="inputfieldname" type="text" placeholder="  User"
                               onBlur={e => setName(e.target.value)} >

                        </input>

                    </div>}

                    <input className="inputfieldmsg" type="text" onInput={e=>setMsg(e.target.value)} value={msg}
                           placeholder=" Insert a message">

                    </input>

                    <button class="buttonsend" onClick={e=>sendChat()}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default App;