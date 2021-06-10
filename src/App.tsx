import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
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
                <Switch><Route exact path={'/'} render={() => <Redirect to={'/searchpage'}/>}/></Switch>
                <Switch><Route path="/searchpage" render={() => <SearchPage/>}/></Switch>
                <Switch><Route path="/usernotfound" render={() => <UserNotFoundPage/>}/></Switch>
                <Switch><Route path="/profile/:username" render={() => <ProfilePage/>}/></Switch>
            </div>

        </div>
    );
}

export default App;
