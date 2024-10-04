import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerData from './components/Customer/CustomerData';
import './App.css';
import SnackNotification from './components/Custom/CustomNotification';
const App=()=>{
    const [darkMode, setDarkMode] = useState(false);
    const [message,setMessage]=useState('');
    const toggleTheme=()=>{
        const newMode=!darkMode;
        setDarkMode(newMode);
        setMessage(`Theme ${newMode ? 'enabled' : 'disabled'}.`);
    };
    return (
        <div className='App'> 
            <div className={darkMode ? 'dark-theme' : 'light-theme'}>
                <div className="App container">
                    <CustomerData theme={toggleTheme}/>
                    <SnackNotification message={message}/>
                </div>
            </div>
        </div>
    );
};

export default App;
