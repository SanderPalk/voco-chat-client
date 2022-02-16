import React from 'react';
import '../App.css';
import data from '../data.json';
import ChatCard from './ChatCard';
import Input from './Input';
import Name from './Name';

const Chat: React.FC = () => {
    return (
        <div className="chat">
            <h3>KHK</h3>

            <div className="chat__container">
                {data.map((cardItem) => {
                    return (
                        <ChatCard key={cardItem.id} username={cardItem.username} message={cardItem.message} date={cardItem.date} />
                    )
                })}

                <div className='input'>
                    <Input />
                    <Name />
                </div>
            </div>

            

        </div>
    );
}

export default Chat;