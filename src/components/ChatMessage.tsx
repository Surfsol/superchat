import React from 'react'

interface Props{
    key: string
    message: string
    auth: {currentUser: {uid: string}}
}
const ChatMessage:React.FC<Props> = ({key, message, auth}) => {
    const messageClass = key = auth.currentUser.uid ? 'sent' : 'received'
   
    return(
        (messageClass === 'received') ? (
            <div>{message}</div>
        ) : <div>{message}</div>
        
    )
}
export default ChatMessage