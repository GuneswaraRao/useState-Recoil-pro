import { Switch } from "@material-ui/core";
import { Router } from "@material-ui/icons";
import React, { Component } from "react";




const Dashboard = () => {
    return (
        <div>
            <Router>
                <div>
                    <Link to="/"> SignIn</Link>
                </div>
                <Switch>

                </Switch>
            </Router>
        </div>
    );
}
export default Dashboard;