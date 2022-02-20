import React from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'

interface Props{
    firestore: ()=>void
}
const ChatRoom:React.FC<Props> = ({firestore}) => {
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)
    const [messages] = useCollectionData(query, {idField: 'id'})
    return(
        
    )
}

export default ChatRoom