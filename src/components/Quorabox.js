import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import '../css/Quorabox.css'
import { selectUser } from '../features/userSlice'

function Quorabox() {
    const user = useSelector(selectUser)
    return (
        <div className="quorabox">
            
                <div className="quorabox__info">
                    <Avatar src={user.photo}/>
                    <h5>{user.displayName ? user.displayName : user.email}</h5>
                </div>

                <div className="quorabox___quora">
                   
                </div>
        </div>
    )
}

export default Quorabox
