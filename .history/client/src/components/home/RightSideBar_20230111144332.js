import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/load-m.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()
    const { auth, suggestions } = useSelector(state => state)
    const UserCard1 = ({user})
    return (
        <div className="home-right">
            {/* <UserCard user={auth.user} /> */}
                
                <div className='profile-con'>
                        <div className="profile-photo1">
                            <img src='https://res.cloudinary.com/dw1sniewf/image/upload/v1669720008/noko-social/audefto1as6m8gg17nu1.jpg'></img>
                        </div>
                        <div className="handle">
                            <span>{auth.user.username}</span>
                            <p className="text-muted1">@{auth.user.fullname}</p>
                        </div>
                </div>
            <div className="d-flex justify-content-between align-items-center my-2">
                <h4 className="req-text">Request</h4>
                {
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions">
                    {
                        suggestions.users.map(user => (
                            <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>
                        ))
                    }
                </div>
            }

            

        </div>
    )
}

export default RightSideBar
