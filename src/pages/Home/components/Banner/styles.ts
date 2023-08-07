import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  padding: 5rem 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 0;

    img {
      display: none;
    }
  }
`

export const Title = styled.p`
  font-family: '${(props) => props.theme.fonts.secondary}';
  font-size: 3rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.baseTitle};

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.baseSubtitle};
  margin-top: 1rem;
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 1.25rem 2.5rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 15rem 20rem;
    margin-top: 2.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
