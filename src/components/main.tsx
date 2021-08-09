import {Route} from 'react-router-dom';
import {FunctionComponent} from 'react';

//Page imports
import Home from '../pages/home';
import Account from '../pages/account';
import Items from '../pages/items';

/*
    Required Pages:
        Home - Shows search bar with username + tag + region drop down menu
        Account - Goes to account view for user, use query string (?Account="")
            Champion Details - Query string to retrieve specific champ info (?Account="id"&ChampionID="id")
            Ranked - Grabs info about last 15? ranked matches (?Account="id"&Mode="Ranked")
            Unranked - Same but unranked (?Account="id"&Mode="Unranked")
            ARAM - Same but ARAM (?Account="id"&Mode="ARAM")
        Champions - Overview of every champion, each champ clickable for further info (/champions)
        Champion Info- Specific details of champion (Overall winrate, pickrate, common build if available in API) (/champions/:id)
*/

const Main : FunctionComponent = () => {
    return (
        <main>

            <Route path="/" component={Home} exact></Route>
            <Route path="/account" component={Account} exact></Route>
            <Route path="/items" component={Items} exact></Route>
            
        </main>
    );
};

export default Main;