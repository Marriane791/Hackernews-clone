import React from 'react'
import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom'
import Header from '../Components/Header'
import ShowStories from '../Components/ShowStories'
import PageNotFound from '../Components/PageNotFound'

const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!['top', 'new', 'best'].includes(type)) {
                return <Redirect to="/" />;
              }
              return <ShowStories type={type} />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter