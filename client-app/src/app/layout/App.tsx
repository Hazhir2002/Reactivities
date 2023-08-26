import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path={"/"}
          element={
            <>
              <NavBar />
              <Container style={{ marginTop: "7em" }}>
                <Outlet />
              </Container>
            </>
          }
        >
          <Route path="activities" element={<ActivityDashboard />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
          <Route path="/manage/:id" element={<ActivityForm />} />
          <Route path="/createActivity" element={<ActivityForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default observer(App);
