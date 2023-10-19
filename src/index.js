import React from "react";
import ReactDOM from "react-dom";
import { NavLink, withRouter } from "react-router-dom";
import { Redirect, Route, HashRouter, Switch } from "react-router-dom";

import { css } from "emotion";

function Header(props) {
  const path = props.location.pathname.slice(1);

  return <h1>Hello {path}!</h1>;
}

const WrappedHeader = withRouter(Header);

function One(props) {
  return <div>I came from Component One</div>;
}

function Two(props) {
  return <div>I came from Component Two</div>;
}

function Three(props) {
  return <div>I came from Component Three</div>;
}

function App() {
  return (
    <div>
      <HashRouter>
        <WrappedHeader />

        <nav>
          <ul>
            <li>
              <NavLink to={`/t/one`} activeStyle={{ color: "red" }}>
                Component: One
              </NavLink>
            </li>

            <li>
              <NavLink to={`/t/two`} activeStyle={{ color: "red" }}>
                Component: Two
              </NavLink>
            </li>

            <li>
              <NavLink to={`/t/three`} activeStyle={{ color: "red" }}>
                Component: Three
              </NavLink>
            </li>
          </ul>
        </nav>

        <main>
          <Switch>
            <Redirect exact from="/" to={"/t/one"} />
            <Route key={"oneRoute"} path={`/t/one`} render={() => <One />} />
            <Route key={"twoRoute"} path={`/t/two`} render={() => <Two />} />
            <Route
              key={"threeRoute"}
              path={`/t/three`}
              render={() => <Three />}
            />
          </Switch>
        </main>
      </HashRouter>
    </div>
  );
}

const app = css`
  text-align: center;
  color: white;
  font-size: 3rem;
  background-color: #419d78;
  height: 20rem;
  font-family: sans-serif;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
