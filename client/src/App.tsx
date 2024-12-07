import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import UserFrofile from './components/pages/UserProfile';
import PageNotFound from './components/pages/PageNotFound';
import TeamProfiles from './components/pages/TeamProfiles';
import LogoutPage from './components/Global/Header/Logout/LogoutPage';
import Header from './components/Global/Header/Header';
import Plants from './components/pages/Plants';
import Questions from './components/pages/Questions';
import Services from './components/pages/Services';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="/team-profiles" element={<TeamProfiles />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/plants" element={<Plants />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/services" element={<Services />} />
                <Route path="/user-profile" element={<UserFrofile />} />
                <Route path="/not-found" element={<PageNotFound />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Route>
        </Routes>
    );
}

export default App;
