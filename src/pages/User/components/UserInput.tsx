import React, { FC, useEffect, useState } from "react";
import { IUpdatedUser, IUser } from "../../../components/types/types";

interface UserInputProps {
    user: IUser;
    param: string;
    item: string;
    editble: boolean;
    title: string;
    updatedUser: IUpdatedUser;
    setIsEmpty: (b: boolean) => void;
    setUpdatedUser: ({ name }: IUpdatedUser) => void;
}

export const UserInput: FC<UserInputProps> = ({
    user,
    param,
    item,
    editble,
    title,
    updatedUser,
    setIsEmpty,
    setUpdatedUser,
}) => {
    const [value, setValue] = useState<string>("loading...");
    useEffect(() => {
        if (typeof user !== "undefined") {
            setValue(item);
        } else setValue("loading...");
    }, [user, item]);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        setUpdatedUser({ ...updatedUser, [param]: value });
    }, [param, value, setUpdatedUser, user]);

    useEffect(() => {
        if (!value) {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
    }, [setIsEmpty, value]);

    const inputBorder = !value ? "red" : "#d8d8d8";
    const inputColor = !editble ? "black" : "gray";

    return (
        <div className="user__card-item">
            <label htmlFor={item}>{title}</label>
            <input
                readOnly={editble}
                style={{
                    color: inputColor,
                    border: `1px solid ${inputBorder}`,
                }}
                type="text"
                id={item}
                value={value}
                onChange={handleChangeName}
            />
        </div>
    );
};
