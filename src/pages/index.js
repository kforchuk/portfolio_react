import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education'

const Pages = ({user}) => {
    return (
        <Router>
            <Routes>
                <Route exact path="/portfolio_react/" element={<Me user={user}/>}/>
                <Route path="/portfolio_react/projects" element={<Projects user={user} />} />
                <Route path="/portfolio_react/work" element={<Work user={user}/>}/>
                <Route path="/portfolio_react/education" element={<Education user={user}/> }/>
            </Routes>
        </Router>
    );
};

export default Pages;