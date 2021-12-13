import React from 'react'
import { ReactPropTypes } from 'react'
import PropTypes from 'prop-types'
const Maincard = ({datePublished,description,id,image,name,url,provider}) => {
     const {thumbnail} = image || {thumbnail:{contentUrl:"https://cima-afrique.org/cima/images/not-available.png"}};
                     const ff = thumbnail.contentUrl ||"https://cima-afrique.org/cima/images/not-available.png";
    return (
        <div>
            <h1>you requested</h1>
            <img src={ff} alt="this image is not availabe you know " />
            <h2>{name}</h2>
             <p>{description}</p>
            <p>{provider[0].name}</p>
            <a href={url} target="_blank">readmore</a>
            <p>{datePublished}</p>
        </div>
    )
}
Maincard.propTypes = {
    datePublished: PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    provider:PropTypes.array.isRequired,
    image : PropTypes.object.isRequired,
    // thumbnail:  PropTypes.object.isRequired,
    // contentUrl : PropTypes.string.isRequired,
};
Maincard.defaultProps = {
    datePublished: "NA",
    description:"NA",
    name: "NA",
    url: "NA",
    provider:[{name:"string"}],
    image:{thumbnail:{contentUrl:"string"}},


}
export default Maincard
