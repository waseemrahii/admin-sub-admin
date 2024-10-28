// import React, { useState } from 'react';
// import { FaSearch, FaDownload, FaChevronDown, FaEdit, FaTrash } from 'react-icons/fa';
// import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
// import { getAuthData } from '../../../../utils/authHelper';
// import apiConfig from '../../../../config/apiConfig';
// const EmployeeRoleSetup = () => {
//     // Define state for the roles and module permissions
//     const API_URL = `${apiConfig.admin}/roles`;
//     const {token} =getAuthData();
//     const [roles, setRoles] = useState([
//         {
//             id: 1,
//             name: 'role',
//             modules: ['Overview', 'Marketing section', 'Business section'],
//             createdAt: '21-Apr-22',
//             status: true,
//         },
//         {
//             id: 2,
//             name: 'product manager',
//             modules: ['Order management', 'product-management', 'vendors-management'],
//             createdAt: '21-Mar-22',
//             status: true,
//         },
//     ]);

//     // Array of available modules
//     const availableModules = [
//         'Overview',
//         'Order management',
//         'Product management',
//         'Vendors management',
//         'Promotion management',
//         'Business Setup',
//          'System Setup',  
//         'File manager',
//         'Employee management',
//         'Reports & Analysis',
//         'Customer management',
//         'Subscriber',

//     ];

//     // State to track selected modules for the new role
//     const [selectedModules, setSelectedModules] = useState([]);

//     // Function to handle checkbox change
//     const handleCheckboxChange = (module) => {
//         setSelectedModules(prevSelected =>
//             prevSelected.includes(module)
//                 ? prevSelected.filter(m => m !== module)
//                 : [...prevSelected, module]
//         );
//     };

//     // Function to handle "Select All" change
//     const handleSelectAllChange = (e) => {
//         if (e.target.checked) {
//             setSelectedModules(availableModules);
//         } else {
//             setSelectedModules([]);
//         }
//     };

//     // Function to handle form submission
//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         // Add form submission logic here
//     };

//     return (
//         <div className="content container-fluid snipcss0-0-0-1 snipcss-sexsn">
//             <div className="mb-3 snipcss0-1-1-2">
//                 <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2 snipcss0-2-2-3">
//                     <img src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png" alt="Employee role setup" className="snipcss0-3-3-4" />
//                     Employee role setup
//                 </h2>
//             </div>
//             <div className="card snipcss0-1-1-5">
//                 <div className="card-body snipcss0-2-5-6">
//                     <form id="submit-create-role" className="text-start snipcss0-3-6-7" onSubmit={handleFormSubmit}>
//                         <div className="row snipcss0-4-7-9">
//                             <div className="col-lg-6 snipcss0-5-9-10">
//                                 <div className="form-group mb-4 snipcss0-6-10-11">
//                                     <label htmlFor="name" className="title-color snipcss0-7-11-12">Role name</label>
//                                     <input type="text" name="name" className="form-control snipcss0-7-11-13" id="name" placeholder="Ex: Store" required />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="d-flex gap-4 flex-wrap snipcss0-4-7-14">
//                             <label htmlFor="name" className="title-color font-weight-bold mb-0 snipcss0-5-14-15">Module permission</label>
//                             <div className="form-group d-flex gap-2 snipcss0-5-14-16">
//                                 <input
//                                     type="checkbox"
//                                     id="select-all"
//                                     className="cursor-pointer snipcss0-6-16-17"
//                                     checked={selectedModules.length === availableModules.length}
//                                     onChange={handleSelectAllChange}
//                                 />
//                                 <label className="title-color mb-0 cursor-pointer text-capitalize snipcss0-6-16-18" htmlFor="select-all">Select all</label>
//                             </div>
//                         </div>
//                         <div className="row snipcss0-4-7-19">
//                             {availableModules.map((module, index) => (
//                                 <div key={index} className="col-md-4 col-sm-4 snipcss0-5-19-20">
//                                     <div className="form-group d-flex gap-2 snipcss0-6-20-21">
//                                         <input
//                                             type="checkbox"
//                                             id={`module-${index}`}
//                                             className="cursor-pointer snipcss0-7-21-22"
//                                             checked={selectedModules.includes(module)}
//                                             onChange={() => handleCheckboxChange(module)}
//                                         />
//                                         <label className="title-color mb-0 cursor-pointer text-capitalize snipcss0-7-21-23" htmlFor={`module-${index}`}>
//                                             {module}
//                                         </label>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="d-flex justify-content-end snipcss0-4-7-56">
//                             <button type="submit" className="btn btn--primary snipcss0-5-56-57">Submit</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <div className="card mt-3 snipcss0-1-1-58">
//                 <div className="px-3 py-4 snipcss0-2-58-59">
//                     <div className="row justify-content-between align-items-center flex-grow-1 snipcss0-3-59-60">
//                         <div className="col-md-4 col-lg-6 mb-2 mb-sm-0 snipcss0-4-60-61">
//                             <h5 className="d-flex align-items-center gap-2 snipcss0-5-61-62">
//                                 Employee Roles <span className="badge badge-soft-dark radius-50 fz-12 ml-1 snipcss0-6-62-63">2</span>
//                             </h5>
//                         </div>
//                         <div className="col-md-8 col-lg-6 d-flex flex-wrap flex-sm-nowrap justify-content-sm-end gap-3 snipcss0-4-60-64">
//                             <form action="#" method="GET" className="snipcss0-5-64-65">
//                                 <div className="input-group input-group-merge input-group-custom snipcss0-6-65-66">
//                                     <div className="input-group-prepend snipcss0-7-66-67">
//                                         <div className="input-group-text snipcss0-8-67-68">
//                                             <FaSearch className="snipcss0-9-68-69" />
//                                         </div>
//                                     </div>
//                                     <input type="search" name="searchValue" className="form-control snipcss0-7-66-70" placeholder="Search role" />
//                                     <button type="submit" className="btn btn--primary snipcss0-7-66-71">Search</button>
//                                 </div>
//                             </form>
//                             <div className="snipcss0-5-64-72">
//                                 <button type="button" className="btn btn-outline--primary text-nowrap snipcss0-6-72-73 flex justify-center align-items-center gap-1">
//                                     <FaDownload className="snipcss0-7-73-74" /> Export <FaChevronDown className="snipcss0-7-73-75" />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="pb-3 snipcss0-2-58-80">
//                     <div className="table-responsive snipcss0-3-80-81">
//                         <table className="table table-hover table-borderless table-thead-bordered table-align-middle card-table text-start snipcss0-4-81-82">
//                             <thead className="thead-light thead-50 text-capitalize table-nowrap snipcss0-5-82-83">
//                                 <tr className="snipcss0-6-83-84">
//                                     <th className="snipcss0-7-84-85">SL</th>
//                                     <th className="snipcss0-7-84-86">Role name</th>
//                                     <th className="snipcss0-7-84-87">Modules</th>
//                                     <th className="snipcss0-7-84-88">Created at</th>
//                                     <th className="snipcss0-7-84-89">Status</th>
//                                     <th className="text-center snipcss0-7-84-90">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="snipcss0-5-82-91">
//                                 {roles.map((role, index) => (
//                                     <tr key={role.id} className="snipcss0-6-91-92">
//                                         <td className="snipcss0-7-92-93">{index + 1}</td>
//                                         <td className="snipcss0-7-92-94">{role.name}</td>
//                                         <td className="snipcss0-7-92-95">
//                                             {role.modules.join(', ')}
//                                         </td>
//                                         <td className="snipcss0-7-92-96">{role.createdAt}</td>
//                                         <td className="snipcss0-7-92-97">
//                                             <label className="switcher">
//                                                 <input
//                                                     type="checkbox"
//                                                     className="switcher_input"
//                                                     checked={role.status}
//                                                     onChange={() => {}}
//                                                 />
//                                                 <span className="switcher_control"></span>
//                                             </label>
//                                         </td>
//                                         <td className="snipcss0-7-92-98">
//                                             <div className="d-flex justify-content-center gap-2 snipcss0-8-98-99">
//                                                 <button type="button" className="btn btn-outline--primary btn-sm square-btn snipcss0-9-99-100">
//                                                     <FaEdit className="snipcss0-10-100-101" />
//                                                 </button>
//                                                 <button type="button" className="btn btn-outline-danger btn-sm delete square-btn snipcss0-9-99-102">
//                                                     <FaTrash className="snipcss0-10-102-103" />
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EmployeeRoleSetup;


import React, { useState, useEffect } from 'react';
import { FaSearch, FaDownload, FaChevronDown, FaEdit, FaTrash } from 'react-icons/fa';
import { getAuthData } from '../../../../utils/authHelper';
import apiConfig from '../../../../config/apiConfig';

const EmployeeRoleSetup = () => {
    const API_URL = `${apiConfig.admin}/roles`;
    const { token } = getAuthData();
    const [roles, setRoles] = useState([]);
    const [selectedModules, setSelectedModules] = useState([]);
    const [roleName, setRoleName] = useState('');

    // Fetch roles when the component mounts
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await fetch(API_URL, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setRoles(data.doc); // Assuming data is an array of roles
                } else {
                    console.error('Error fetching roles:', data.message);
                }
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };

        fetchRoles();
    }, [API_URL, token]);

    // Function to handle checkbox change
    const handleCheckboxChange = (module) => {
        setSelectedModules(prevSelected =>
            prevSelected.includes(module)
                ? prevSelected.filter(m => m !== module)
                : [...prevSelected, module]
        );
    };

    // Function to handle "Select All" change
    const handleSelectAllChange = (e) => {
        if (e.target.checked) {
            setSelectedModules(availableModules);
        } else {
            setSelectedModules([]);
        }
    };

    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // Prepare the role data
        const newRole = {
            name: roleName,
            modules: selectedModules, // Ensure this matches the expected structure
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newRole),
            });
            const data = await response.json();

            if (response.ok) {
                setRoles(prevRoles => [...prevRoles, data]); // Append the new role to the list
                setRoleName(''); // Reset the role name input
                setSelectedModules([]); // Reset selected modules
            } else {
                console.error('Error submitting role:', data.message);
            }
        } catch (error) {
            console.error('Error submitting role:', error);
        }
    };

    // Array of available modules
    const availableModules = [
        'Overview',
        'Order management',
        'Product management',
        'Vendors management',
        'Promotion management',
        'Business Setup',
        'System Setup',
        'File manager',
        'Employee management',
        'Reports & Analysis',
        'Customer management',
        'Subscriber',
    ];

    return (
        <div className="content container-fluid">
            <div className="mb-3">
                <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
                    <img src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png" alt="Employee role setup" />
                    Employee role setup
                </h2>
            </div>
            <div className="card">
                <div className="card-body">
                    <form id="submit-create-role" className="text-start" onSubmit={handleFormSubmit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group mb-4">
                                    <label htmlFor="name" className="title-color">Role name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Ex: Store" 
                                        value={roleName}
                                        onChange={(e) => setRoleName(e.target.value)}
                                        required 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-4 flex-wrap">
                            <label htmlFor="name" className="title-color font-weight-bold mb-0">Module permission</label>
                            <div className="form-group d-flex gap-2">
                                <input
                                    type="checkbox"
                                    id="select-all"
                                    className="cursor-pointer"
                                    checked={selectedModules.length === availableModules.length}
                                    onChange={handleSelectAllChange}
                                />
                                <label className="title-color mb-0 cursor-pointer text-capitalize" htmlFor="select-all">Select all</label>
                            </div>
                        </div>
                        <div className="row">
                            {availableModules.map((module, index) => (
                                <div key={index} className="col-md-4 col-sm-4">
                                    <div className="form-group d-flex gap-2">
                                        <input
                                            type="checkbox"
                                            id={`module-${index}`}
                                            className="cursor-pointer"
                                            checked={selectedModules.includes(module)}
                                            onChange={() => handleCheckboxChange(module)}
                                        />
                                        <label className="title-color mb-0 cursor-pointer text-capitalize" htmlFor={`module-${index}`}>
                                            {module}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn--primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card mt-3">
                <div className="px-3 py-4">
                    <div className="row justify-content-between align-items-center flex-grow-1">
                        <div className="col-md-4 col-lg-6 mb-2 mb-sm-0">
                            <h5 className="d-flex align-items-center gap-2">
                                Employee Roles <span className="badge badge-soft-dark radius-50 fz-12 ml-1">{roles.length}</span>
                            </h5>
                        </div>
                        <div className="col-md-8 col-lg-6 d-flex flex-wrap flex-sm-nowrap justify-content-sm-end gap-3">
                            <form action="#" method="GET">
                                <div className="input-group input-group-merge input-group-custom">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <FaSearch />
                                        </div>
                                    </div>
                                    <input type="search" name="searchValue" className="form-control" placeholder="Search role" />
                                    <button type="submit" className="btn bg-primary text-white" style={{color:"white"}}>Search</button>
                                </div>
                            </form>
                            <div>
                                <button type="button" className="btn btn-outline--primary text-nowrap flex justify-center align-items-center gap-1">
                                    <FaDownload /> Export <FaChevronDown />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-3">
                    <div className="table-responsive">
                        <table className="table table-hover table-borderless table-thead-bordered table-align-middle card-table text-start">
                            <thead className="thead-light text-capitalize table-nowrap">
                                <tr>
                                    <th>SL</th>
                                    <th>Role name</th>
                                    <th>Modules</th>
                                    <th>Created at</th>
                                    <th>Status</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map((role, index) => (
                                    <tr key={role._id}>
                                        <td>{index + 1}</td>
                                        <td>{role.name}</td>
                                        <td>{role.modules.join(', ')}</td> {/* Updated to use 'modules' */}
                                        <td>{new Date(role.createdAt).toLocaleString()}</td> {/* Format date */}
                                        <td>
                                            <label className="switcher">
                                                <input
                                                    type="checkbox"
                                                    className="switcher_input"
                                                    checked={role.status}
                                                    onChange={() => {}}
                                                />
                                                <span className="switcher_control"></span>
                                            </label>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-center gap-2">
                                                <button type="button" className="btn btn-outline--primary btn-sm square-btn">
                                                    <FaEdit />
                                                </button>
                                                <button type="button" className="btn btn-outline-danger btn-sm delete square-btn">
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeRoleSetup;
