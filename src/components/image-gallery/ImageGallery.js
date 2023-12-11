import React, { useState } from 'react';
import './ImageGallery.scss'
import Apple from '../../images/logo/apple';
import Spotify from '../../images/logo/spotify';
import Imdb from '../../images/logo/Imdb';
import TiktokVid from './TikTokVid';

const ImageGallery = ({ spotLightsData }) => {
    const [mainSpotlight, setSpotlight] = useState('')
    return (
        <div>
            {
                mainSpotlight && (
                    <div className='modal'>
                        <button className="close" onClick={() => setSpotlight(null)}>x</button>
                        <div className="main-image-wrapper">
                            <h1 className='neonText'>{mainSpotlight}</h1>
                            {spotLightsData.map((spotLight) => {
                                console.log(spotLight)
                                if (spotLight.fields.spotLightTitle === mainSpotlight) {
                                    return (
                                        <>
                                            {spotLight.fields?.spotLightHeader && <p className='modal__info'>{spotLight.fields.spotLightHeader}</p>}
                                            {spotLight.fields?.assetTitle && <h4 className='modal__title'>{spotLight.fields?.assetTitle}</h4>}
                                            {spotLight.fields?.assetImage?.fields?.file?.url && <img src={spotLight.fields?.assetImage.fields.file.url} className='modal__image' alt='image' />}
                                            {spotLight.fields?.assetVideo && <div className='video-player'> <iframe width="560" height="315" src={spotLight.fields.assetVideo || ''} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>}
                                            {spotLight.fields?.tikTokEmbed && <TiktokVid embedId={spotLight.fields?.tikTokEmbed} />}
                                            {spotLight.fields?.mainText && <p className="modal__info">{spotLight.fields?.mainText}</p>}
                                            {(spotLight.fields?.spotifyLink || spotLight.fields?.appleMusicLink) && <h3 style={{ padding: '2rem' }}>Stream it on</h3>}
                                            {(spotLight.fields?.imdbLink) && <h3 style={{ padding: '3rem' }}>Learn more at</h3>}
                                            {spotLight.fields?.imdbLink && <a href={spotLight.fields?.imdbLink} target='_blank'><Imdb /></a>}
                                            {spotLight.fields?.spotifyLink && <a href={spotLight.fields?.spotifyLink} target='_blank'><Spotify /></a>}
                                            {spotLight.fields?.appleMusicLink && <a href={spotLight.fields?.appleMusicLink} target='_blank' ><Apple /></a>}
                                        </>
                                    )
                                }
                            })}

                        </div>
                    </div>

                )
            }
            <div className='image-gallery'>
                {spotLightsData.map((spotLight, index) => {
                    {
                        if (spotLight.fields.spotLightTitle) {
                            return (
                                <button onClick={() => setSpotlight(`${spotLight.fields.spotLightTitle}`)}>
                                    <div className='single-spotlight'><div className='single-spotlight__text'><h4 className='single-spotlight__text'>{spotLight.fields.spotLightTitle}</h4></div> </div>
                                </button>
                            )
                        }
                    }
                })}

            </div>
        </div >
    );
};

export default ImageGallery;