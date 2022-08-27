import './App.css';
import {Redirect, Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Main from "./Components/Main/Main";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import NewsContainer from "./Components/News/NewsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


function App(props) {
    return (
            <>
                <HeaderContainer/>
                <div className='main-body'>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Main/>} />
                        <Route path='/profile/:userId' element={<ProfileContainer />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/dialogs' element={ <DialogsContainer />} />
                        <Route path='/news' element={<NewsContainer />} />
                        <Route path='/music' element={<Music/>} />
                        <Route path='/settings' element={<Settings/>} />
                    </Routes>
                </div>
            </>


    );
}

export default App;
