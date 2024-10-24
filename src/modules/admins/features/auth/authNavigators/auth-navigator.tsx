import { Routes, Route } from 'react-router-dom';
import { AuthScreens } from '../authScreens';


export const AuthNavigator = () => {
    return (
      <Routes>
        <Route path="login/" element={<AuthScreens.LogIn/>} />
      </Routes>
    );
};

