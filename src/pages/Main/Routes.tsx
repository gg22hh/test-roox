import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IUser } from "../../components/types/types";
import { User } from "../User/User";
import { Users } from "../Users/Users";

interface RoutesProps {
    usersList: IUser[];
    isLoading: boolean;
}

export const Routes: FC<RoutesProps> = ({ usersList, isLoading }) => {
    const usersRoutes = usersList?.map((user) => {
        return (
            <Route key={user?.id} path={`/user${user?.id}`}>
                <User user={user} />
            </Route>
        );
    });
    return (
        <>
            <Route path={"/"} exact>
                <Users usersList={usersList} isLoading={isLoading} />
            </Route>
            {usersRoutes}
        </>
    );
};
