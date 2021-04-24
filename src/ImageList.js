import React from 'react'
import Masonry from 'react-masonry-component'
import styled from '@emotion/styled'

const ImageList = (props) => {
  const images = props.images.map((image, index) => {
    return (
      <List>
        <a
          href={image.pageURL}
          key={index}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={image.webformatURL}
            width={image.webformatWidth}
            height={image.webformatHeight}
            alt={image.tags}
          />
        </a>
      </List>
    )
  })
  return <Masonry elementType={'ul'}>{images}</Masonry>
}
const List = styled.li`
  list-style: none;
`
export default ImageList
