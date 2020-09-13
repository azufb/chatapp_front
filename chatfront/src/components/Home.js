import React from 'react';
import { app } from '../base';

function Home(props) {
    return (
        <div>
            <h2>Home Page</h2>
            {/* ログアウトさせる */}
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    );
}

export default Home;