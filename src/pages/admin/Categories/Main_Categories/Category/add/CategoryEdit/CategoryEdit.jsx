import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuthData } from "../../../../../../../utils/authHelper"; // Import function to get token
import apiConfig from '../../../../../../../config/apiConfig'; // Import apiConfig for API URLs
const ApiUrl = `${apiConfig.admin}`; // Use admin role

const CategoryUpdate = () => {
  const { id } = useParams(); // Extract category ID from URL params
  const navigate = useNavigate(); // To navigate after successful update
  const [selectedLang, setSelectedLang] = useState("en");
  const [categoryData, setCategoryData] = useState({
    name: "",
    priority: 0,
    logo: null,
  });

  // Fetch category data by ID
  useEffect(() => {
    if (id) {
      fetchCategoryById(id);
    }
  }, [id]);

  const fetchCategoryById = async (categoryId) => {
    try {
      const { token } = getAuthData(); // Get token
      const response = await axios.get(`${ApiUrl}/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response data ====", response)
      const { name, priority, logo } = response.data.doc;
      setCategoryData({ name, priority, logo });
    } catch (error) {
      console.error("Failed to fetch category:", error);
      toast.error("Failed to fetch category data");
    }
  };

  // Handle input change for category form fields
  const handleInputChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  // Convert selected image to base64
  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCategoryData((prevState) => ({
          ...prevState,
          logo: reader.result, // Store base64 image string
        }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  // Handle form submit to update category
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: categoryData.name,
      priority: categoryData.priority,
      logo: categoryData.logo, // Already in base64 format
    };

    try {
      const { token } = getAuthData(); // Get token
      const response = await fetch(`${ApiUrl}/categories/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update category");
      }

      const responseData = await response.json();
      console.log("Category updated:", responseData);
      toast.success("Category updated successfully");
      navigate("/categories"); // Navigate after successful update
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Error updating category");
    }
  };

  return (
    <div className="content container-fluid px-10">
      <ToastContainer />
      <div className="mb-3">
        <h2 className="h1 mb-0 d-flex gap-10">
          {id ? "Edit Category" : "Add Category"}
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body text-start">
              <form onSubmit={handleSubmit}>
                <ul className="nav nav-tabs w-fit-content mb-4">
                  {["en", "sa", "bd", "in"].map((lang) => (
                    <li className="nav-item text-capitalize" key={lang}>
                      <span
                        className={`nav-link form-system-language-tab cursor-pointer ${
                          selectedLang === lang ? "active" : ""
                        }`}
                        onClick={() => setSelectedLang(lang)}
                      >
                        {lang === "en" && "English(EN)"}
                        {lang === "sa" && "Arabic(SA)"}
                        {lang === "bd" && "Bangla(BD)"}
                        {lang === "in" && "Hindi(IN)"}
                      </span>
                    </li>
                  ))}
                </ul>
                <CategoryForm
                  selectedLang={selectedLang}
                  categoryData={categoryData}
                  onInputChange={handleInputChange}
                  onFileChange={handleFileChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryForm = ({
  selectedLang,
  categoryData,
  onInputChange,
  onFileChange,
}) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        {["en", "sa", "bd", "in"].map((lang) => (
          <div
            className={`form-group ${
              selectedLang === lang ? "" : "d-none"
            } form-system-language-form`}
            key={lang}
          >
            <label className="title-color">
              Category Name<span className="text-danger">*</span> ({lang.toUpperCase()})
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="New Category"
              required={lang === "en"}
              value={categoryData.name}
              onChange={onInputChange}
            />
          </div>
        ))}
        <div className="form-group">
          <label className="title-color" htmlFor="priority">
            Priority
          </label>
          <select
            className="form-control"
            name="priority"
            required
            value={categoryData.priority}
            onChange={onInputChange}
          >
            <option disabled>Set Priority</option>
            {[...Array(11).keys()].map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="title-color">Category Logo</label>
          <span className="text-info">
            <span className="text-danger">*</span> Ratio 1:1 (500 x 500 px)
          </span>
          <div className="custom-file text-left">
            <input
              type="file"
              name="logo"
              id="category-image"
              className="custom-file-input"
              accept="image/*"
              onChange={onFileChange}
            />
            <label className="custom-file-label" htmlFor="category-image">
              Choose File
            </label>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0 from_part_2">
        <div className="form-group flex">
          <div
            className="text-center flex justify-center"
            style={{ width: "50%" }}
          >
            <img
              className="upload-img-view"
              id="viewer"
              src={categoryData.logo || "/image-place-holder.png"}
              alt="Category Logo"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </div>
    </div>
  );
};

export default CategoryUpdate;
