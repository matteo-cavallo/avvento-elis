import { useState } from 'react';

import SplashScreen from '../components/splash-screen/splash-screen.component';
import Home from '../components/home/home.component';

function HomePage() {

    const [splashScreen, setSplashScreen] = useState(true);


    const handleClose = () => {
        setSplashScreen(false);
    }

    return (
        <div>
            {splashScreen ? (
                <SplashScreen handleClick={handleClose}/>
            ) : (
                <Home />
            )}
        </div>
    )
}


  
  export default HomePage