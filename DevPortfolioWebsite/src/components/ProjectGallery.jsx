import React from 'react'
import { projectData } from "../constants";
import Card from './Card';

function ProjectGallery() {

    const cardGallery = 'grid md:grid-cols-3 sm:grid-cols-2 p:grid-cols-1 gap-4'

    return (
        <div className={cardGallery}>
            {projectData.map((project) => (
                <Card
                key={project.id}
                projectName={project.projectName}
                projectTools={project.tools}
                />
            ))}
        </div>
    );
}

export default ProjectGallery