import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import Header from "./elements/Header";

const Home = props => <h1>Home Admin</h1>;
const Users = props => <h1>Users Admin</h1>;

const Admin = props => {
  if (!props.auth.isAuth) return <Redirect to="/login" />;
  if (props.auth.user.role !== "admin") return <Redirect to="/restrito" />;
  return (
    <div>
      <h1>Admin</h1>
      <Header />
      <div>
        <Route path={`${props.match.path}`} exact component={Home} />
        <Route path={`${props.match.path}/users`} component={Users} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Admin);
