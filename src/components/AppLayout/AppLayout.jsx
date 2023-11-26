import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navigation, Loader, Container } from 'components';
import { AppHeader, AppBar, MainSection } from './AppLayout.styled';

const AppLayout = () => {
  return (
    <div>
      <AppHeader>
        <Container>
          <AppBar>
            <Navigation />
          </AppBar>
        </Container>
      </AppHeader>
      <Container>
        <MainSection>
          <Suspense fallback={<Loader />}>
            <Outlet />
            <Toaster position="top-right" reverseOrder={false} />
          </Suspense>
        </MainSection>
      </Container>
    </div>
  );
};

export default AppLayout;
    
    
    
    
    

    
    
    
    












    
