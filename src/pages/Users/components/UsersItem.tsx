import React, { FC } from "react";
import { Link } from "react-router-dom";

interface UsersItemProps {
    name: string;
    city: string;
    company: string;
    id: number;
}

export const UsersItem: FC<UsersItemProps> = ({ name, city, company, id }) => {
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
            <Link to={`/user${id}`} className="users__card-button">
                Подробнее
            </Link>
        </div>
    );
};
