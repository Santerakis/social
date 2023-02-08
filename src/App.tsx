import React from 'react';
import './App.css';
import Header from "./Header";


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>New</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div><img src='https://oboinastol.net/katalog_kartinok/tom16/032/skachat_oboi_1920x1080.jpg'/></div>
                <div>ava + description</div>
                <div>
                    My posts
                <div>New post</div>
                </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
