import { useState } from "react";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as Icons from "react-icons/fa6";

const IconSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const allIcons = { ...IoIcons, ...FaIcons, ...AiIcons };
    const filteredIcons = Object.keys(allIcons)
        .filter((iconName) =>
            iconName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((iconName) => {
            const Icon = allIcons[iconName];
            console.log(iconName, 'iconName',)
            return <Icon key={iconName} size={32} />;
        })

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <div className="search_icons">
                <input
                    type="text"
                    placeholder="Search icons..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className=""
                />
            </div>
            <div className="icon-list">
                <IconContext.Provider value={{ color: "gray" }}>
                    {filteredIcons}
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default IconSearch;
