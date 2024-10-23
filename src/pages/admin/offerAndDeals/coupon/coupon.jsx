// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";
// import FormSelect from "../../../../components/FormInput/FormSelect";
// import FormInput from "../../../../components/FormInput/FormInput";
// import ExportButton from "../../../../components/ActionButton/Export";

// import { toast } from "react-toastify";
// import {
//   createCoupon,
//   fetchCoupons,
// } from "../../../../redux/slices/admin/couponSlice";
// import { fetchVendors } from "../../../../redux/slices/seller/vendorSlice";
// import { fetchCustomers } from "../../../../redux/slices/user/customerSlice";
// import LoadingSpinner from "../../../../components/LoodingSpinner/LoadingSpinner";
// import CouponList from "./CouponList";
// import CouponForm from "./couponForm";
// const CouponManagement = () => {
//   const dispatch = useDispatch();
//   const { coupons, loading, error } = useSelector((state) => state.coupons);
//   const vendors = useSelector((state) => state.vendor?.vendors || []);
//   const customers = useSelector((state) => state.customers?.customers || []);

//   const [form, setForm] = useState({
//     title: "",
//     code: "",
//     type: "others",
//     userLimit: { limit: "", used: 0 },
//     couponBearer: "vendor",
//     discountType: "percentage",
//     discountAmount: "",
//     minPurchase: "",
//     maxDiscount: "",
//     startDate: "",
//     expiredDate: "",
//     status: "active",
//     vendors: [],
//     customers: [],
//   });

//   useEffect(() => {
//     dispatch(fetchCoupons());
//     dispatch(fetchVendors());
//     dispatch(fetchCustomers());
//   }, [dispatch]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Handle nested userLimit separately
//     if (name === "userLimit") {
//       setForm((prevForm) => ({
//         ...prevForm,
//         userLimit: { ...prevForm.userLimit, limit: value },
//       }));
//     } else {
//       setForm((prevForm) => ({ ...prevForm, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission
  
//     try {
//       // Dispatch the createCoupon action and wait for it to complete
//       await dispatch(createCoupon(form));
  
//       // Log the form data
//       console.log("Form data coupon to be submitted: ", form);
  
//       // Show a success alert using SweetAlert
//       Swal.fire("Success", "Coupon Created Successfully", "success");
  
//       // Fetch updated coupons list (after successfully creating a new coupon)
//       fetchCoupons();
  
//       // Reset the form to initial state after successful submission
//       setForm({
//         title: "",
//         code: "",
//         type: "",
//         userLimit: { limit: "", used: 0 },
//         couponBearer: "vendor",
//         discountType: "percentage",
//         discountAmount: "",
//         minPurchase: "",
//         maxDiscount: "",
//         startDate: "",
//         expiredDate: "",
//         status: "active",
//         vendors: [],
//         customers: [],
//       });
//     } catch (error) {
//       // If an error occurs, show an error message with toast notification
//       toast.error(
//         error.message || "Failed to create coupon. Please try again."
//       );
//       // Log the error for debugging purposes
//       console.error("Error creating coupon:", error);
//     }
//   };
  

//   return (
//     <div className="p-10">
//       <div className="mb-3">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <img
//             src="/coupon_setup.png"
//             alt=""
//           />
//           Coupon setup
//         </h2>
//       </div>

//       <div className="row">
//         <div className="col-lg-12 mb-3">
//              <CouponForm />

//         </div>
//       </div>

//       <div>
//         <div className="row">
//           <div className="col-md-12">
//           <CouponList />

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CouponManagement;



import React from "react";
import CouponForm from "./couponForm";
import CouponList from "./CouponList";

const CouponManagement = () => {
  return (
    <div className="p-10">
    <div className="mb-3">
      <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
        <img
          src="/coupon_setup.png"
          alt=""
        />
        Coupon setup
      </h2>
    </div>

      <CouponForm />
     
      <CouponList />
     
    
    </div>
  );

};

export default CouponManagement;
