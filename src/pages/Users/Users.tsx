import React, { FC } from "react";
import { IUser } from "../../components/types/types";
import { UsersItem } from "./components/UsersItem";
import "./Users.scss";
import loading from "../../images/loading.gif";

interface usersProps {
    usersList: IUser[];
    isLoading: boolean;
}

export const Users: FC<usersProps> = ({ usersList, isLoading }) => {
    const users = usersList?.map((user) => {
        return (
            <UsersItem
                key={user.id}
                name={user.name}
                city={user.address.city}
                company={user.company.name}
            />
        );
    });
    return (
        <div className="users">
            <h1 className="users__title">Список пользователей</h1>
            {isLoading ? (
                <img src={loading} alt="Loading..." />
            ) : (
                <div className="users__inner">{users}</div>
            )}
        </div>
    );
};
