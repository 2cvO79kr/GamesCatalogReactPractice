import React from 'react'
import Content from './Content'

const ContentContainer = (props) => {
    return (
        <Content data={props.data}
            setClearCard={props.setClearCard} />
    )
}

export default ContentContainer