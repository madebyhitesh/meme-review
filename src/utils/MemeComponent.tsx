import React from 'react'
import { IMeme } from '../@types/interfaces'


const MemeComponent: React.FC<IMeme> = ({ box_count, height, id, name, url, width }) => {
    return (
        <div className="meme-image">
            <div className="hero text-light text-center" data-template-name={name} >
                <img src={url} alt={name} />
            </div>
        </div>
    )
}

export { MemeComponent }
