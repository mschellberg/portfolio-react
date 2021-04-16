import React from 'react';

function About () {
    return (
        <main className="aboutMeContainer">
            <img className="homePagePhoto" width="100%" src="https://images.unsplash.com/photo-1615390265246-72d3198a48b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"></img>
            <div className="aboutMeBlock">
            <h1 className="aboutMeTitle">About Me</h1>
            <p className="aboutMe">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </main>
    );
}
export default About;