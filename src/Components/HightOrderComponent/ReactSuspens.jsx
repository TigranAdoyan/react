import React from 'react';
import Preloader from '../CommonComponents/Preloader';

const WithReactSuspense = (Component) => {
       return  <React.Suspense fallback={ <h1>Loading...</h1> } >
                      <Component />
            </React.Suspense>
};

export default WithReactSuspense;