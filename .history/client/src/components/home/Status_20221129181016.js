import React from 'react'
import Avatar from '../Avatar'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

const Status = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="status">
            <div className='status-image'>
                <Avatar src={auth.user.avatar} size="big-avatar" />
            </div>
            
            
            <input className="status-post-btn"
            onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
                {auth.user.username}, what are you thinking?
            </input>
        </div>
    )
}

export default Status
