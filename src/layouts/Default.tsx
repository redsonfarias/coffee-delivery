import { Outlet } from 'react-router-dom'
import { NavBar } from '@/components/NavBar'
import { LayoutContainer, MainContainer, ContentContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <NavBar />
      <MainContainer>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </MainContainer>
    </LayoutContainer>
  )
}
