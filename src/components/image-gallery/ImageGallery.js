import React, { useState } from 'react';
import './ImageGallery.scss'
import SongImage from '../../images/work/spotImg.jpeg'
import FilmImage from '../../images/work/filmImg.png'
import Apple from '../../images/logo/apple';
import Spotify from '../../images/logo/spotify';
import Imdb from '../../images/logo/Imdb';
const ImageGallery = () => {
    const [mainSpotlight, setSpotlight] = useState('')

    let text
    let image
    let Slink
    let Alink
    let Ilink
    let info
    let title
    switch (mainSpotlight) {
        case 'Did you know':
            info = 'Hear crazy stories behind the sounds of the music you love'
            image = undefined
            break
        case 'Artist Spotlight':
            info = 'Discover amazing underrepresented artists that so many of us would love if we learned about them, or develop a much deeper understanding of one you do know, as an artist and as a human being.'
            title = 'Burna Boy'
            image = 'https://assets.teenvogue.com/photos/62c87cd0650ca07dc89535cb/1:1/w_3000,h_3000,c_limit/Burna%20Boy%20-%202022%20Press%20Image%20-%20Elliot%20Hensford.jpg'
            Slink = 'https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa?si=53ABiMTYRyWXqUC5FsNkBA'
            Alink = 'https://music.apple.com/us/artist/burna-boy/591899010'
            break
        case 'Genre Spotlight':
            info = 'Expand your pallet and take a deep dive into music of many different styles, eras, countries, cultures, etc.'
            title = 'Reggaeton'
            Slink = 'https://open.spotify.com/album/3ENNo73fIGsFXJPUDPH5nd?si=QogMqLZ4T9-1OcoTh91wcQ'
            Alink = 'https://music.apple.com/us/playlist/reggaet%C3%B3n-essentials/pl.6cfed0a93df843f9bb2b7c98a424bc52'
            image = 'https://www.billboard.com/wp-content/uploads/2021/06/Reggaeton-Jhay-Cortez-Wisin-Jowell-Randy-Rauw-Alejandro-Bad-Bunny-billboard-1500-1623162307.jpg'
            break
        case 'Film Spotlight':
            info = 'Looking for something amazing to watch but you feel like you’ve seen everything? Oh we got something for you. '
            title = 'Pulp Fiction'
            image = FilmImage
            Ilink = 'https://www.imdb.com/title/tt0110912/?ref_=ext_shr_lnk'
            break
        case 'Song of the Day':
            info = 'QUICK, need something to listen to? EVERY morning, have a song of the day waiting for you.'
            title = 'C U Girl'
            Slink = 'https://open.spotify.com/track/6FBzhcfgGacfXF3AmtfEaX?si=c50892d435694499'
            Alink = 'https://music.apple.com/us/album/c-u-girl/1030015256?i=1030015261'
            image = SongImage
            break
        default:
            text = undefined;
    }

    return (
        <div>
            {mainSpotlight && (
                <div className='modal'>
                    <button className="close" onClick={() => setSpotlight(null)}>x</button>
                    <div className="main-image-wrapper">
                        <h1 className='neonText'>{mainSpotlight}</h1>
                        {info && <p className='modal__info'>{info}</p>}
                        {title && <h4 className='modal__title'>{title}</h4>}
                        {image && <img src={image} className='modal__image' />}
                        {(Slink || Alink) && <h3 style={{ padding: '3rem' }}>Stream it on</h3>}
                        {(Ilink) && <h3 style={{ padding: '3rem' }}>Learn more at</h3>}
                        {Ilink && <a href={Ilink} target='_blank'><Imdb /></a>}
                        {Slink && <a href={Slink} target='_blank'><Spotify /></a>}
                        {Alink && <a href={Alink} target='_blank' ><Apple /></a>}
                    </div>
                </div>

            )
            }
            <div className='image-gallery'>
                <button onClick={() => setSpotlight('Did you know')}>
                    <div className='single-spotlight '><div className='single-spotlight__text'><h4>Did you know?</h4></div></div>
                </button>
                <button onClick={() => setSpotlight('Artist Spotlight')}>
                    <div className='single-spotlight'><div className='single-spotlight__text'><h4>Artist Spotlight</h4> </div></div>
                </button>
                <button onClick={() => setSpotlight('Genre Spotlight')}>
                    <div className='single-spotlight'><div className='single-spotlight__text'><h4 className='single-spotlight__text'>Genre Spotlight</h4></div> </div>
                </button>
                <button onClick={() => setSpotlight('Film Spotlight')}>
                    <div className='single-spotlight'><div className='single-spotlight__text'><h4 className='single-spotlight__text'>Film Spotlight</h4></div> </div>
                </button>
                <button onClick={() => setSpotlight('Song of the Day')}>
                    <div className='single-spotlight'><div className='single-spotlight__text'><h4 className='single-spotlight__text'>Song of the Day</h4></div> </div>
                </button>
            </div>
        </div >
    );
};

export default ImageGallery;