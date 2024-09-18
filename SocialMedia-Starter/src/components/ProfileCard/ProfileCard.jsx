import React from 'react'
import Cover from '/Users/pranjalibarve/Social Media/SocialMedia-Starter/src/img/cover.jpg'
import Profile from '/Users/pranjalibarve/Social Media/SocialMedia-Starter/src/img/profileImg.jpg'
import './ProfileCard.css'
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className="ProfileName">
            <span> Zendaya MJ</span>
            <span>UI/UX Designer</span>
        </div>

        <div className="followStatus">
            <hr/>
            <div>
            <div className="follow">
                <span>6873</span>
                <span>Following</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>1</span>
                <span>Followers</span>
            </div> 
            </div>       
            <hr/>
        </div>
        <span>
            My Profile
        </span>

    </div>
  )
}

export default ProfileCard
