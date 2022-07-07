import { useState } from 'react'
import styled, { css } from 'utils/styled-components'
import Heading from 'components/Heading'
import { GridWrapper } from 'templates/PageTemplate'
import { fadeInUp, stagger } from 'utils/animations'
import GridElement from 'components/GridElement'
import Paragraph from 'components/Paragraph'
import { motion } from 'framer-motion'

const StyledTabsWrapper = styled(motion.div)`
  overflow: hidden;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.inputs.largeInput};
  color: ${({ theme }) => theme.inputs.placehoder};
`
const StyledTabsButtons = styled(motion.button)<{ active }>`
  background-color: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 24px 16px;
  color: ${({ theme }) => theme.fontColor};
  @media (max-width: 748px) {
    padding: 10px 12px;
  }
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.primary};
      font-weight: 600;
    `}
`

const StyledTabContent = styled(motion.div)`
  padding: 6px 12px;
  border-top: none;
`

const Tabs = ({ movieData, tvData, inputValue }) => {
  const [index, setIndex] = useState(0)

  const updateIndex = (index) => {
    setIndex(index)
  }
  return (
    <StyledTabsWrapper>
      <StyledTabsButtons
        whileTap={{ scale: 1.2 }}
        whileHover={{ translateY: -2 }}
        onClick={() => updateIndex(0)}
        active={index === 0}
      >
        Watching
      </StyledTabsButtons>
      <StyledTabsButtons
        whileTap={{ scale: 1.2 }}
        whileHover={{ translateY: -2 }}
        onClick={() => updateIndex(1)}
        active={index === 1}
      >
        Plan to Watch
      </StyledTabsButtons>
      <StyledTabsButtons
        whileTap={{ scale: 1.2 }}
        whileHover={{ translateY: -2 }}
        onClick={() => updateIndex(2)}
        active={index === 2}
      >
        Completed
      </StyledTabsButtons>
      <StyledTabsButtons
        whileTap={{ scale: 1.2 }}
        whileHover={{ translateY: -2 }}
        onClick={() => updateIndex(3)}
        active={index === 3}
      >
        Dropped
      </StyledTabsButtons>
      {index === 0 && (
        <StyledTabContent>
          {movieData &&
          movieData.filter((item) => item.type === 'WATCHING').length > 0 ? (
            <>
              <Heading>Movies</Heading>
              <GridTab
                data={movieData}
                inputValue={inputValue}
                type="WATCHING"
                dataType="movie"
              />
            </>
          ) : (
            <Paragraph>
              Sorry there is no Movies that you&apos;re watching. Add something
              to watchlist!
            </Paragraph>
          )}
          {tvData &&
          tvData.filter((item) => item.type === 'WATCHING').length > 0 ? (
            <>
              <Heading>TV Shows</Heading>
              <GridTab
                data={tvData}
                inputValue={inputValue}
                type="WATCHING"
                dataType="tv"
              />
            </>
          ) : (
            <Paragraph>
              Sorry there is no TV Shows that you&apos;re watching. Add
              something to watchlist!
            </Paragraph>
          )}
        </StyledTabContent>
      )}
      {index === 1 && (
        <StyledTabContent>
          {movieData &&
          movieData.filter((item) => item.type === 'PLAN_TO_WATCH').length >
            0 ? (
            <>
              <Heading>Movies</Heading>
              <GridTab
                data={movieData}
                inputValue={inputValue}
                type="PLAN_TO_WATCH"
                dataType="movie"
              />
            </>
          ) : (
            <Paragraph>
              Sorry there is no Movies that you plan to watch. Add something to
              watchlist!
            </Paragraph>
          )}
          {tvData &&
          tvData.filter((item) => item.type === 'PLAN_TO_WATCH').length > 0 ? (
            <>
              <Heading>TV Shows</Heading>
              <GridTab
                data={tvData}
                inputValue={inputValue}
                type="PLAN_TO_WATCH"
                dataType="tv"
              />
            </>
          ) : (
            <Paragraph>
              Sorry there is no TV Shows that you plan to watch. Add something
              to watchlist!
            </Paragraph>
          )}
        </StyledTabContent>
      )}
      {index === 2 && (
        <StyledTabContent>
          {movieData &&
          movieData.filter((item) => item.type === 'COMPLETED').length > 0 ? (
            <>
              <Heading>Movies</Heading>
              <GridTab
                data={movieData}
                inputValue={inputValue}
                type="COMPLETED"
                dataType="movie"
              />
            </>
          ) : (
            <Paragraph>
              Sorry there is no Movies that you completed. Add something to
              watchlist!
            </Paragraph>
          )}
          {tvData &&
          tvData.filter((item) => item.type === 'COMPLETED').length > 0 ? (
            <>
              <Heading>TV Shows</Heading>
              <GridTab
                data={tvData}
                inputValue={inputValue}
                type="COMPLETED"
                dataType="tv"
              />
            </>
          ) : (
            <Paragraph>
              Sorry there is no TV Shows that you completed. Add something to
              watchlist!
            </Paragraph>
          )}
        </StyledTabContent>
      )}
      {index === 3 && (
        <StyledTabContent>
          {movieData &&
          movieData.filter((item) => item.type === 'DROPPED').length > 0 ? (
            <>
              <Heading>Movies</Heading>
              <GridTab
                data={movieData}
                inputValue={inputValue}
                type="DROPPED"
                dataType="movie"
              />
            </>
          ) : (
            <Paragraph>
              Sorry there is no Movies that you dropped. Add something to
              watchlist!
            </Paragraph>
          )}
          {tvData &&
          tvData.filter((item) => item.type === 'DROPPED').length > 0 ? (
            <>
              <Heading>TV Shows</Heading>
              <GridTab
                data={tvData}
                inputValue={inputValue}
                type="DROPPED"
                dataType="tv"
              />
            </>
          ) : (
            <Paragraph>
              Sorry there is no TV Shows that you dropped. Add something to
              watchlist!
            </Paragraph>
          )}
        </StyledTabContent>
      )}
    </StyledTabsWrapper>
  )
}

export const GridTab = ({ data, type, inputValue, dataType }) => (
  <GridWrapper
    variants={stagger}
    initial="initial"
    animate="animate"
    exit={{ opacity: 0 }}
  >
    {data &&
      data.length > 0 &&
      data
        .filter((item) =>
          item.title.toLowerCase().includes(inputValue.toLowerCase())
        )
        .filter((item) => item.type === type)
        .map((item) => (
          <GridElement
            key={item.tmdbId}
            variants={fadeInUp}
            title={item.title}
            content={item.overview}
            link={`/${dataType}/${item.tmdbId}`}
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          />
        ))}
  </GridWrapper>
)

export default Tabs
