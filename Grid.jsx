import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Grid = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the given route
    };

    return (  
        <>
            <div className="text-dark d-flex justify-content-between gap-2 m-2 pt-1 px-4 text-center">
                <div className="main" onClick={() => handleNavigation('/Offers')} style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/page_manager/homepage/20230818180111011598.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>Offer</p>
                </div>

                <div className="main" onClick={() => handleNavigation('/wheyprotein')}style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/marketing-journey/Whey-Protein-2025-03-13T11:44:34.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>Whey Protein</p>
                </div>
                
                <div className="main"onClick={() => handleNavigation('/Creatine')}style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/marketing-journey/Creatine-2025-03-13T11:44:59.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>Creatine</p>
                </div>
                <div className="main"onClick={() => handleNavigation('/Gainer')}style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/marketing-journey/Mass-Gainer-2025-03-13T11:45:09.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>Gainer</p>
                </div>
                <div className="main"onClick={() => handleNavigation('/Shilajit')}style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/marketing-journey/Shilajit-2025-03-13T11:45:20.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>Shilajit</p>
                </div>
                <div className="main"onClick={() => handleNavigation('/Preworkout')}style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/marketing-journey/Pre-Workout-2025-03-13T11:45:38.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>Pre Workout</p>
                </div>
                <div className="main"onClick={() => handleNavigation('/Fishoil')}style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/marketing-journey/Fish-Oil_-Omega3-2025-03-13T11:45:49.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>Fish Oil</p>
                </div>
                <div className="main"onClick={() => handleNavigation('/Bcaa')}style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/marketing-journey/BCAA-2025-03-13T11:45:58.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>BCAAs</p>
                </div>
                <div className="main"onClick={() => handleNavigation('/Plant')}style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/marketing-journey/Plant-Protein-2025-03-13T11:46:10.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>Plant Protein</p>
                </div>
                <div className="main"onClick={() => handleNavigation('/Multi')}style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/marketing-journey/Multivamin-2025-03-13T11:46:21.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>Multivitamin</p>
                </div>
                <div className="main"onClick={() => handleNavigation('/Peanut')}style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/marketing-journey/Peanut-Butter-2025-03-13T11:46:36.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>Peanut Butter</p>
                </div>
                <div className="main"onClick={() => handleNavigation('/Ayruv')}style={{ cursor: 'pointer' }}>
                    <img src="https://cdn2.nutrabay.com/marketing-journey/Ayurveda-2025-03-13T11:46:46.png" style={{ height: '87px' }} alt="" />
                    <p className='pt-1'>Ayurveda</p>
                </div>
            </div>
        </>
    );
};

export default Grid;
