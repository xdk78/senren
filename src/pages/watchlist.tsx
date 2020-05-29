import React from 'react'
import PageTemplate, {
  GridWrapper,
  StyledPageWrapper,
} from 'templates/PageTemplate'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Input from 'components/Input'
import Graph from 'components/Graph'
const Watchlist = () => {
  return (
    <PageTemplate>
      <StyledPageWrapper>
        <Heading>Rating analyst</Heading>
        <Paragraph>Your collection</Paragraph>
        <Graph width={1100} height={480} />
        <Heading>Top-Rated Generes</Heading>
        <Paragraph>Your collection</Paragraph>
        <div>Graph</div>
        <Input large placeholder="Filter watchlist..." />
        <Heading>Watching</Heading>
        <Paragraph>Your collection</Paragraph>
        <GridWrapper></GridWrapper>
        <Heading>Planning to watch</Heading>
        <Paragraph>Your collection</Paragraph>
        <GridWrapper></GridWrapper>
        <Heading>Completed</Heading>
        <Paragraph>Your collection</Paragraph>
        <GridWrapper></GridWrapper>
      </StyledPageWrapper>
    </PageTemplate>
  )
}

export default Watchlist
