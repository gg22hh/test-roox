import React, { FC } from "react";
import "./Sidebar.scss";

interface SidebarProps {
    handleCityFilter: () => void;
    handleCompanyFilter: () => void;
}

export const Sidebar: FC<SidebarProps> = ({
    handleCompanyFilter,
    handleCityFilter,
}) => {
    return (
        <div className="sidebar">
            <div className="sidebar__title">Сортировка</div>
            <div className="sidebar__buttons">
                <button onClick={handleCityFilter} className="button-blue">
                    по городу
                </button>
                <button onClick={handleCompanyFilter} className="button-blue">
                    по компании
                </button>
            </div>
        </div>
    );
};
