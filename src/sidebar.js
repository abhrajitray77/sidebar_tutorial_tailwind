
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo, FaUbuntu, FaBitcoin, FaGuitar } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="h-screen fixed top-0 w-16 m-0
                        flex flex-col
                        bg-gray-900 text-white shadow-lg">
       
        <SideBarIcon icon={<FaFire size="28" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<FaUbuntu size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
        <SideBarIcon icon={<BsGearFill size="22" />} />
        <SideBarIcon icon={<FaBitcoin size="22" />} />

        </div>
    );
};

const SideBarIcon = ({ icon, text = 'abhra' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar