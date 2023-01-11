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
            
            
            <button className="status-post-btn"
            onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
                <span>{auth.user.username}</span>
            </button>
        </div>
    )
}

export default Status
