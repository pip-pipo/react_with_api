import React from 'react'
import useResources from './UseResources'
const ResourceList = ({ resourceName }) => {
    const resources = useResources(resourceName);
    console.log(resources)
   const title =  resources.map(resource => {
        return <li key={resource.id}>{resource.title}</li>
    })
    return (
        <ul>
        {title}
        </ul>
    )
}

export default ResourceList
