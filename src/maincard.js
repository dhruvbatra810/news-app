import React from 'react'

const Maincard = ({datePublished,description,id,image:{thumbnail:{contentUrl}},name,url,provider}) => {
    return (
        <div>
            <h1>you requested</h1>
            <img src={contentUrl} alt="this image is not availabe you know " />
            <h2>{name}</h2>
             <p>{description}</p>
            <p>{provider[0].name}</p>
            <a href={url}>readmore</a>
            <p>{datePublished}</p>
        </div>
    )
}

export default Maincard
