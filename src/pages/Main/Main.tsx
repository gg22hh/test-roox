import React, { FC } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useGetData } from "../../shared/hooks";
import { Users } from "../Users/Users";
import "./Main.scss";

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
                <Users usersList={usersList} isLoading={isLoading} />
            </div>
        </div>
    );
};
