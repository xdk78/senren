import React from 'react'
import styled from '../../styled-components'
import GridElement from '.'
export default {
  title: 'Atoms/GridElements',
}

const DarkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1100px;
  grid-gap: 20px;
  background: black;
  padding: 50px;
  margin: 15px;
`

export const GridElementStory = () => {
  return (
    <>
      <GridElement
        src={'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'}
      ></GridElement>
      <DarkWrapper>
        <GridElement
          src={
            'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
          }
          variant="dark"
        ></GridElement>
        <GridElement
          src={
            'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
          }
          variant="dark"
        ></GridElement>
        <GridElement
          src={
            'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
          }
          variant="dark"
        ></GridElement>
        <GridElement
          src={
            'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
          }
          variant="dark"
        ></GridElement>
        <GridElement
          src={
            'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
          }
          variant="dark"
        ></GridElement>
        <GridElement
          src={
            'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
          }
          variant="dark"
        ></GridElement>
      </DarkWrapper>
    </>
  )
}

export const SmallGridElementStory = () => {
  return (
    <>
      <GridElement
        src={'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'}
        small
      ></GridElement>
      <DarkWrapper>
        <GridElement
          src={
            'https://static.episodate.com/images/tv-show/thumbnail/32157.jpg'
          }
          small
          variant="dark"
        ></GridElement>
      </DarkWrapper>
    </>
  )
}
