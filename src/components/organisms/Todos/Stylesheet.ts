import styled from 'styled-components'

export const Container = styled.section`
  max-width: 900px;

  display: grid;
  grid-template-rows: fit-content 1fr fit-content;
  grid-row-gap: 4rem;
`

export const TabsContainer = styled.header`
  display: flex;

  width: 25%;

  > h2:last-child {
    margin-left: -5px;
  }
`

export const ListWrapper = styled.ul`
  overflow-y: auto;

  li {
    list-style: none;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;
`
