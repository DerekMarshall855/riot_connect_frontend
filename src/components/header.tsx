import {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';

const Header : FunctionComponent = () => {
    return (
        <header>
            <Link to='/'>Riot-Connect</Link>
        </header>
    );
};

export default Header;