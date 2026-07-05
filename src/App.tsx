import React, { useState } from 'react';
import Splash from './pages/Splash';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ParentRegistration from './pages/ParentRegistration';
import LinkageConfirmation from './pages/LinkageConfirmation';
import RoleSelection from './pages/RoleSelection';
import LegalPolicies from './pages/LegalPolicies';
import SupportDashboard from './pages/SupportDashboard';

export default function App() {
    const [route, setRoute] = useState('splash');

    const renderRoute = () => {
        switch (route) {
            case 'splash': return <Splash navigate={setRoute} />;
            case 'login': return <Login navigate={setRoute} />;
            case 'forgot_password': return <ForgotPassword navigate={setRoute} />;
            case 'reset_password': return <ResetPassword navigate={setRoute} />;
            case 'parent_registration': return <ParentRegistration navigate={setRoute} />;
            case 'linkage_confirmation': return <LinkageConfirmation navigate={setRoute} />;
            case 'role_selection': return <RoleSelection navigate={setRoute} />;
            case 'legal': return <LegalPolicies navigate={setRoute} />;
            case 'dashboard': return <SupportDashboard navigate={setRoute} />;
            default: return <Splash navigate={setRoute} />;
        }
    };

    return renderRoute();
}
