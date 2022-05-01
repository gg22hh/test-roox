import React, { FC, useEffect, useState } from "react";
import { IUpdatedUser, IUser } from "../../components/types/types";
import { UserInput } from "./components/UserInput";
import "./User.scss";

interface userProps {
    user: IUser;
}

export const User: FC<userProps> = ({ user }) => {
    const [editble, setEditble] = useState<boolean>(true);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [comment, setComment] = useState<string>("");
    const [updatedUser, setUpdatedUser] = useState<IUpdatedUser>({
        name: "",
        username: "",
        email: "",
        street: "",
        city: "",
        zipcode: "",
        phone: "",
        website: "",
    });
    useEffect(() => {
        if (typeof user !== "undefined") {
            setUpdatedUser({
                name: user.name,
                username: user.username,
                email: user.email,
                street: user.address.street,
                city: user.address.city,
                zipcode: user.address.zipcode,
                phone: user.phone,
                website: user.website,
            });
        } else
            setUpdatedUser({
                name: "",
                username: "",
                email: "",
                street: "",
                city: "",
                zipcode: "",
                phone: "",
                website: "",
            });
    }, [user]);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (isEmpty) {
            alert("Заполните все данные");
        } else {
            console.log(JSON.stringify({ ...updatedUser, comment: comment }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="user">
            <div className="user__header">
                <div className="user__header-title title">
                    Профиль пользователя
                </div>
                <button
                    onClick={() => setEditble(!editble)}
                    className="user__header-button button-blue"
                    type="button"
                >
                    Редактировать
                </button>
            </div>
            <div className="user__card">
                <UserInput
                    param="name"
                    user={user}
                    item={user?.name}
                    editble={editble}
                    title="Name"
                    setIsEmpty={setIsEmpty}
                    setUpdatedUser={setUpdatedUser}
                    updatedUser={updatedUser}
                />
                <UserInput
                    param="username"
                    user={user}
                    item={user?.username}
                    editble={editble}
                    title="Username"
                    setIsEmpty={setIsEmpty}
                    setUpdatedUser={setUpdatedUser}
                    updatedUser={updatedUser}
                />
                <UserInput
                    param="email"
                    user={user}
                    item={user?.email}
                    editble={editble}
                    title="E-mail"
                    setIsEmpty={setIsEmpty}
                    setUpdatedUser={setUpdatedUser}
                    updatedUser={updatedUser}
                />
                <UserInput
                    param="street"
                    user={user}
                    item={user?.address.street}
                    editble={editble}
                    title="Street"
                    setIsEmpty={setIsEmpty}
                    setUpdatedUser={setUpdatedUser}
                    updatedUser={updatedUser}
                />
                <UserInput
                    param="city"
                    user={user}
                    item={user?.address.city}
                    editble={editble}
                    title="City"
                    setIsEmpty={setIsEmpty}
                    setUpdatedUser={setUpdatedUser}
                    updatedUser={updatedUser}
                />
                <UserInput
                    param="zipcode"
                    user={user}
                    item={user?.address.zipcode}
                    editble={editble}
                    title="Zip-code"
                    setIsEmpty={setIsEmpty}
                    setUpdatedUser={setUpdatedUser}
                    updatedUser={updatedUser}
                />
                <UserInput
                    param="phone"
                    user={user}
                    item={user?.phone}
                    editble={editble}
                    title="Phone"
                    setIsEmpty={setIsEmpty}
                    setUpdatedUser={setUpdatedUser}
                    updatedUser={updatedUser}
                />
                <UserInput
                    param="website"
                    user={user}
                    item={user?.website}
                    editble={editble}
                    title="Website"
                    setIsEmpty={setIsEmpty}
                    setUpdatedUser={setUpdatedUser}
                    updatedUser={updatedUser}
                />
                <div className="user__card-item">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        value={comment}
                        readOnly={editble}
                        style={{ color: editble ? "gray" : "black" }}
                        onChange={(e) => setComment(e.target.value)}
                        id="comment"
                        cols={10}
                        rows={5}
                    />
                </div>
            </div>
            <button type="submit" className="user__button">
                Отправить
            </button>
        </form>
    );
};
