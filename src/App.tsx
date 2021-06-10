import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import './App.module.css';
import {Header} from "./components/Header/Header";
import {SearchPage} from "./components/SearchPage/SearchPage";
import {UserNotFoundPage} from "./components/UserNotFoundPage/UserNotFound";
import {ProfilePage} from './components/ProfilePage/ProfilePage';
import cls from "./App.module.css"


function App() {
    return (
        <div className={cls.appWrapper}>
            <Header/>
            <div>
                <Route exact path={'/'} render={() => <Redirect to={'/searchpage'}/>}/>
                <Route path="/searchpage" render={() => <SearchPage/>}/>
                <Route path="/usernotfound" render={() => <UserNotFoundPage/>}/>
                <Route path="/profile/:username" render={() => <ProfilePage/>}/>
            </div>

        </div>
    );
}

export default App;
