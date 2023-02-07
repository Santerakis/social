import React from 'react';
import './App.css';
import Header from "./Header";


function App() {
    return (
        <div>
            <header>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizIk2O6mWu1dJoC9sMk-ftZEgmlGr_ToB6w&usqp=CAU'/>
            </header>
            <nav>
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
            </nav>
            <div>
                Main content
            </div>
        </div>
    );
}

export default App;
