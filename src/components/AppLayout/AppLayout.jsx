import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components';

const AppLayout = () => {
     <div>
       <header>
         <Navigation />
       </header>
       <main>
         <Suspense fallback={<div> Loading...</div>}>
           <Outlet />
         </Suspense>
       </main>
     </div>;
}
   
export default AppLayout;
    
    
    
    
    
    

    
    
    
    












    
