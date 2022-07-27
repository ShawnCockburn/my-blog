import React from 'react'

const YoutubeEmbed = ({ src, ...rest }) => {
    return (
        <div className="youtube-iframe-container">
            <iframe title="youtube-iframe" className="youtube-iframe" src={src} frameborder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default YoutubeEmbed
