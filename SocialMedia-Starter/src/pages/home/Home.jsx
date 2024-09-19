import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profilesSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/Rightside/RightSide'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide></ProfileSide>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home
