import React from 'react';

function Card(props) {
    const { projectName, projectTools } = props;

    const card = 'w-a h-[250px] flex flex-col justify-center text-center p-3'

    return (
        <div className={card}>
            <h2>{projectName}</h2>
            <p>Project Tools: {projectTools}</p>
        </div>
    );
}

export default Card;