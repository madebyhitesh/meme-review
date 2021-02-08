import React from 'react'
import { useHistory } from 'react-router-dom'
import { IMeme } from '../@types/interfaces'


const MemeComponent: React.FC<IMeme> = ({ box_count, height, id, name, url, width }) => {

    const history = useHistory<unknown>();

    const handleClick = () => {
        history.push({
            pathname: "/create-template",
            state: { box_count, height, id, name, url, width }
        })
    }

    return (
        <div className="meme-image" onClick={handleClick}>
            <div className="hero text-light text-center" data-template-name={name} >
                <img src={url} alt={name} />
            </div>
        </div>
    )
}

export { MemeComponent }
