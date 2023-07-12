import React from 'react'
import './CSS/NetworkSocial.css'

import FB from './../../Images/PNG/SocialMediaIcons/facebook.png'
import IG from './../../Images/PNG/SocialMediaIcons/instagram.png'
import TWEET from './../../Images/PNG/SocialMediaIcons/twitter.png'
import IN from './../../Images/PNG/SocialMediaIcons/linkedin.png'
import YT from './../../Images/PNG/SocialMediaIcons/youtube.png'

const NetworkSocial = () => (
    <div id="SocialMedia">
        <a className="o-IconSocialMedia" href="https://www.facebook.com/BambooAnalytics/" target="_blank" rel="noopener noreferrer">
            <img src={FB} alt="Facebook" />
        </a>
        <a className="o-IconSocialMedia" href="https://www.instagram.com/bambooanalyticssas/?hl=es-la" target="_blank" rel="noopener noreferrer">
            <img src={IG} alt="Instagram" />
        </a>
        <a className="o-IconSocialMedia" href="https://twitter.com/analyticsbamboo" target="_blank" rel="noopener noreferrer">
            <img src={TWEET} alt="Twitter" />
        </a>
        <a className="o-IconSocialMedia" href="https://co.linkedin.com/company/bamboo-analytics-sas" target="_blank" rel="noopener noreferrer">
            <img src={IN} alt="LinkedIn" />
        </a>
        <a className="o-IconSocialMedia" href="https://www.youtube.com/channel/UCatp4zTzKQ2ykQ8nJYCF0dg" target="_blank" rel="noopener noreferrer">
            <img src={YT} alt="Youtube" />
        </a>
    </div>
)

export default NetworkSocial;