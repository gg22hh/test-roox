import React, { FC, useState } from "react";
import { Link, Redirect, Route, Router, Switch } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { IUser } from "../../components/types/types";
import { useGetData } from "../../shared/hooks";
import { User } from "../User/User";
import { Users } from "../Users/Users";
import "./Main.scss";
import { Routes } from "./Routes";

export const Main: FC = () => {
    const { usersList, isLoading, setUsersList } = useGetData();

    const handleCompanyFilter = () => {
        setUsersList(
            [...usersList].sort((a, b) =>
                a.company.name > b.company.name ? 1 : -1
            )
        );
    };

    const handleCityFilter = () => {
        setUsersList(
            [...usersList].sort((a, b) =>
                a.address.city > b.address.city ? 1 : -1
            )
        );
    };

    return (
        <div className="main">
            <Sidebar
                handleCityFilter={handleCityFilter}
                handleCompanyFilter={handleCompanyFilter}
            />
            <div className="content">
                <Link to={"/user4"}>user 1</Link>
                <Switch>
                    <Routes usersList={usersList} isLoading={isLoading} />
                </Switch>
            </div>
        </div>
    );
};
