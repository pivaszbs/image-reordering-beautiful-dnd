import React from 'react'

export const Image = ({src, ...props}: { src: string; } & JSX.IntrinsicElements['img']) =>
    (
        <img src={src} {...props} style={{...props.style, WebkitTouchCallout: 'none', WebkitUserSelect: 'none'}}/>
    )

