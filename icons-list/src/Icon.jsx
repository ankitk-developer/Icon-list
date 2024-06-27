import { useState } from "react";
import { IconContext } from "react-icons";
import * as AllIcons from "react-icons/io"; // Import all icons

const IconSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredIcons = Object.keys(AllIcons)
        .filter((iconName) =>
            iconName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((iconName) => {
            const Icon = AllIcons[iconName];
            return <Icon key={iconName} size={32} />;
        });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search icons..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="icon-list">
                <IconContext.Provider value={{ color: "blue" }}>
                    {filteredIcons}
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default IconSearch;

// import { useState } from 'react';
// import { FaSearch, FaHome, FaUser } from 'react-icons/fa';

// const IconSearch = () => {
//     const [searchQuery, setSearchQuery] = useState('FaUser');
//     const icons = [FaSearch, FaHome, FaUser];

//     const filteredIcons = icons.filter((icon) => {
//         console.log(icon, ' icon1')
//         // You can adjust the search logic as per your requirements
//         return icon.displayName.toLowerCase().includes(searchQuery.toLowerCase());
//     });

//     return (
//         <div>
//             <div>sdf</div>
//             <input
//                 type="text"
//                 placeholder="Search for icons"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <div>
//                 {filteredIcons.map((Icon, index) => (
//                     <div key={index}>
//                         <Icon />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default IconSearch;
