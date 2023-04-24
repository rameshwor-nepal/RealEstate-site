import React from 'react'
import './ourteam.css'
import { ourteamData } from '../../data/ourteamData'

const OurTeam = () => {
  return (
    <div className='our-team-container'>
         <div className="our-team-title">
                <h1 className="heading our-team-title-main">
                    Real Estate Agents
                </h1>
                <p className="our-team-title-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt cum,
                    reprehenderit mollitia, harum atque provident esse ipsa eaque quaerat,
                </p>
         </div>

         <div className="ourteam-div">

            {ourteamData.map((teamdata, i ) =>(

            <div className="ourteam-member">
                <div className="team-img">
                    <img src={teamdata.image} alt="" />
                </div>
                    <p className="ourteam-name"> {teamdata.name}</p>
                    <p className="ourteam-position"> {teamdata.position}</p>
                    <p className="ourteam-description"> {teamdata.description}
                </p>
            </div> 

            ))}

{/*            <div className="ourteam-member">
                <div className="team-img">
                    <img src={man1} alt="" />
                </div>
                <p className="ourteam-name"> Rily Timber</p>
                <p className="ourteam-position"> Marketing Manager</p>
                <p className="ourteam-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                                     Possimus vel nobis sit consectetur beatae, perspiciatis voluptas 
               </p>
            </div>

            <div className="ourteam-member">
                <img src="" alt="" />
                <p className="ourteam-name"> Rily Timber</p>
                <p className="ourteam-position"> Marketing Manager</p>
                <p className="ourteam-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                                     Possimus vel nobis sit consectetur beatae, perspiciatis voluptas 
               </p>
            </div>
            
*/} 
         </div>
    </div>
  )
}

export default OurTeam