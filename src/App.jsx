import React from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewStudent from "./components/views/NewStudent";
import StudentsDetails from "./components/views/StudentsDetails";
import Students from "./components/views/Students";
import Fight from "./components/views/Fight";
import Ranks from "./components/views/Ranks";
import Historical from "./components/views/Historical";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Home from "./components/views/Home";
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Switch>
          <PrivateRoute component={NewStudent} path="/students/new" />
            <Route component={StudentsDetails} path="/students/:id" />
            <Route component={Students} path="/students" />
            <Route component={Fight} path="/fight" />
            <Route component={Ranks} path="/ranks" />
            <Route component={Historical} path="/historical" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Home} path="/" />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}
export default App;