import React, { useContext } from 'react'
import Tags from './Tags'
import { Context } from './../../../context'

const TagsContainer = () => {

    const { setTag, tags } = useContext(Context)

    return (
        <Tags tags={tags}
            setTag={setTag} />
    )
}

export default TagsContainer