// import React from 'react';

// const FormSelect = ({ label, name, value, onChange, options, required }) => (
//   <div className="form-group">
//     <label htmlFor={name} className="title-color d-flex gap-1 align-items-center">{label}</label>
//     <select
//       className="form-control form-control-user"
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       required={required}
//     >
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// export default FormSelect;



import React from 'react';

const FormSelect = ({ label, name, value, onChange, options = [], required }) => (
  <div className="form-group">
    <label htmlFor={name} className="title-color d-flex gap-1 align-items-center">{label}</label>
    <select
      className="form-control form-control-user"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    >
      <option value="">Select an option</option> {/* Default option */}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default FormSelect;
