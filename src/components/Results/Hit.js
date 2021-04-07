/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { DocumentMedium } from 'components/icons'
import Button from 'components/Button'
import Card from 'components/Card'
import Typography from 'components/Typography'
import Highlight from './Highlight'

const Img = styled.img`
  height: 264px;
  width: 240px;
  background-color: ${(p) => p.theme.colors.main.light};
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 10px;
  margin-right: ${(p) => p.theme.space[4]}px;
`

const CustomCard = styled(Card)`
  display: flex;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  word-break: break-all;
`

const HitKey = styled(Typography)`
  grid-column: 1 / 2;
`

const HitValue = styled(Highlight)`
  grid-column: 2 / 4;
`

const ContentContainer = styled.div`
  width: 100%;
`

const Hr = styled.hr`
  border-color: ${(p) => p.theme.colors.gray[10]};
  background-color: ${(p) => p.theme.colors.gray[10]};
  border-style: solid;
`

function Hit({ hit, imageKey }) {
  const objectArray = Object.entries(hit._highlightResult)
  const image = objectArray.find((elem) => elem[0] === imageKey)
  return (
    <CustomCard>
      <Img src={(image[1] && image[1].value) || null} />
      <ContentContainer>
        {objectArray.map(([key, value], index) => (
          <div key={index}>
            <Grid key={key}>
              <HitKey variant="typo10" color="gray.6">{`${key} : `}</HitKey>
              <HitValue
                variant="typo11"
                color="gray.2"
                attribute={key}
                hit={hit}
              />
            </Grid>
            <Hr />
          </div>
        ))}
        <Grid>
          <HitKey variant="typo10" color="gray.6">
            Test json
          </HitKey>
          <div>
            <Button
              variant="grayscale"
              size="small"
              toggable
              icon={<DocumentMedium style={{ height: 22 }} />}
            >
              json
            </Button>
          </div>
        </Grid>
        <Hr />
        <Grid>
          <div />
          <div>
            <Button variant="link" size="small" toggable>
              Show more
            </Button>
          </div>
        </Grid>
      </ContentContainer>
    </CustomCard>
  )
}

export default Hit
