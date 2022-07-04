import { useEffect, useState } from "react";
import { IUser } from "../components/types/types";
import { USERS_URL } from "./constans";

export const useGetData = () => {
    const [usersList, setUsersList] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        const getUsers = async () => {
            const response = await fetch(USERS_URL);
            if (response.ok) {
                const json = await response.json();
                setUsersList(json);
                setIsLoading(false);
            } else {
                alert("error");
            }
        };
        getUsers();
    }, []);

    return { usersList, isLoading, setUsersList };
};

export const useGetSingleUser = (id: number) => {
    const [user, setUser] = useState<IUser>();
    const getUser = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + id
        );
        if (response.ok) {
            const json = await response.json();
            setUser(json);
        } else {
            alert("error");
        }
    };
    getUser();

    return [user, setUser];
};
