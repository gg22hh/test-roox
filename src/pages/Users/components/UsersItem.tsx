import React, { FC } from "react";

interface UsersItemProps {
    name: string;
    city: string;
    company: string;
}

export const UsersItem: FC<UsersItemProps> = ({ name, city, company }) => {
    return (
        <div className="users__card">
            <div>
                <span>ФИО: </span> {name}
            </div>
            <div>
                <span>Город: </span>
                {city}
            </div>
            <div>
                <span>Компания: </span>
                {company}
            </div>
            <button className="users__card-button">Подробнее</button>
        </div>
    );
};
