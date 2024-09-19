import React from 'react'
import PostSide from '/Users/pranjalibarve/Social Media/SocialMedia-Starter/src/components/PostSide/PostSide'
import ProfileCard from '/Users/pranjalibarve/Social Media/SocialMedia-Starter/src/components/ProfileCard/ProfileCard.jsx'
import ProfileLeft from '/Users/pranjalibarve/Social Media/SocialMedia-Starter/src/components/ProfileLeft/ProfileLeft.jsx'
import RightSide from '/Users/pranjalibarve/Social Media/SocialMedia-Starter/src/components/Rightside/RightSide.jsx'
import './Profile.css'
const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile