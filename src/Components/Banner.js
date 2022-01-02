import React from "react";
import '../Banner.css'

function Banner() {
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

    return ( 
    <header className="banner" style={{
        backgroundSize: 'cover',
        backgroundImage: `url('http://spliffmobile.com/ultra-hd-wallpapers/video-game-wallpapers/images/hd-wallpapers-banner.png')`,
        backgroundPosition: 'center center'
    
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">Movie Name</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">{truncate(`cbcbhbchbehcbehcbhfvbhvbsdhbchjsdcjhdsvcjhdsvjhv
            dhjcvdjhvdhvcdgvcdhvcsdjhvchsdvcdhjvcsddhjcvdjhvdhvcdgvcdhvcsdjhvchsdvcdhjvcsdhvcshdhvcshd`, 10)}</h1>
        </div>
        <div className="banner--fadeBottom" />
    </header>
    )
}

export default Banner