import React from "react";
import { Router, IndexRedirect, Route } from "react-router";
import App from "./components/App.js";
import NotFound from "@components/common/NotFound.js";
import SearchPage from "@components/Search";
import ResultsList from "@components/Results";

const routes = (
  <Router path="/" component={App}>
    <IndexRedirect to="search" />
    <Route path="search" component={SearchPage} />
    <Route path="results" component={ResultsList} />
    <Route path="*" component={NotFound} />
  </Router>
);
export default routes;
