import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchBrands,
  fetchColors,
  fetchAttributes,
  fetchSubCategories,
  fetchSubSubCategories,
} from "../../../../../redux/slices/admin/categorybrandSlice";
import { useNavigate } from "react-router-dom";  // Import useNavigate

import "react-quill/dist/quill.snow.css";
import "./form.css";
import ProductAttributes from "./addProductFormComponent/productAttributes";
import ProductImageWrapper from "./addProductFormComponent/productImageUpload";
import ProductForm from "./addProductFormComponent/productForm";
import ProductGeneral from "./addProductFormComponent/productGeneral";
import ProductAdditional from "./addProductFormComponent/productAdditional";
import ProductVideo from "./addProductFormComponent/productVideo";
import SeoSection from "./addProductFormComponent/SeoSection";
import Swal from 'sweetalert2';
import apiConfig from '../../../../../config/apiConfig';
import { getAuthData } from '../../../../../utils/authHelper';

const API_URL = `${apiConfig.seller}/products`;

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Initialize useNavigate

  const {
    categories,
    subCategories,
    subSubCategories,
    brands,
    colors,
    attributes,
  } = useSelector((state) => state.category);

  const initialFormState = {
    name: "",
    description: "",
    brand: "",
    productType: "",
    digitalProductType: "physical",
    sku: "",
    unit: "",
    tags: "",
    price: "",
    discount: "",
    discountType: "percent",
    discountAmount: "",
    taxAmount: "",
    taxIncluded: false,
    minimumOrderQty: "3",
    shippingCost: "",
    stock: "",
    isFeatured: false,
    videoLink: "",
    metaTitle: "title",
    metaDescription: "metadescription",
    userType: "in-house",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [productAttributes, setProductAttributes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    dispatch(fetchColors());
    dispatch(fetchAttributes());
  }, [dispatch]);

  useEffect(() => {
    if (formData.category) {
      dispatch(fetchSubCategories(formData.category));
    }
  }, [dispatch, formData.category]);

  useEffect(() => {
    if (formData.subCategory) {
      dispatch(fetchSubSubCategories(formData.subCategory));
    }
  }, [dispatch, formData.subCategory]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDescriptionChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      description: value,
    }));
  };

  const handleImageChange = (e, isThumbnail = false) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isThumbnail) {
          setThumbnail(reader.result);
          console.log("in change function thubnail", thumbnail)
        } else {
          setImages((prevImages) => [...prevImages, reader.result]);
          console.log("in change function images", images)

        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleAttributeChange = (e) => {
    setSelectedAttribute(e.target.value);
  };

  const addAttribute = () => {
    if (selectedAttribute) {
      const selectedAttr = attributes.find(
        (attr) => attr._id === selectedAttribute
      );
      if (selectedAttr) {
        setProductAttributes((prevAttrs) => [
          ...prevAttrs,
          { _id: selectedAttr._id, name: selectedAttr.name },
        ]);
        setSelectedAttribute("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { token, user } = getAuthData();
      const userId = user?._id;
  
      if (!userId) {
        throw new Error("admin does not exist or is not authenticated.");
      }
    
      const productData = {
        ...formData,
        userId,
        thumbnail,
        images,
        colors: selectedColors.map((color) => color._id),
        attributes: productAttributes.map((attr) => attr._id),
        category: formData.category,
        subCategory: formData.subCategorySlug,
        subSubCategory: formData.subSubCategorySlug,
      };
  
      console.log("Submitting Product Data:", productData);
  
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
  
      Swal.fire({
        icon: 'success',
        title: 'Product created successfully!',
        showConfirmButton: false,
        timer: 2000,
      });
  
      // Reset form
      setThumbnail(null);
      setImages([]);
      setSelectedColors([]);
      setProductAttributes([]);
      setFormData({ ...initialFormState });
      navigate('/inhouseproductlist');

  
    } catch (error) {
      console.error("Product creation failed:", error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to create product',
        text: error.message || 'Please try again.',
        showConfirmButton: true,
      });
      setErrorMessage("Failed to create product. Please try again.");
    }
  };

    
  return (
    <form onSubmit={handleSubmit} className="add-product-form p-6">
      <ProductForm
        formData={formData}
        handleChange={handleChange}
        handleDescriptionChange={handleDescriptionChange}
        errorMessage={errorMessage}
      />
      <ProductGeneral
        formData={formData}
        handleChange={handleChange}
        setFormData={setFormData}
        categories={categories}
        subCategories={subCategories}
        subSubCategories={subSubCategories}
        brands={brands}
      />
      <ProductAdditional formData={formData} handleChange={handleChange} />
      <ProductVideo formData={formData} handleChange={handleChange} />
      {/* <ProductImageWrapper
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
        images={images}
        handleImageChange={handleImageChange}
      /> */}
      <ProductImageWrapper
  thumbnail={thumbnail}
  setThumbnail={setThumbnail}
  images={images}
  setImages={setImages} // Pass the setter function to update images
/>
      <SeoSection formData={formData} handleChange={handleChange} />
      <div className="flex justify-end m-5">
        <button
          type="submit"
          className="btn mt-3 flex justify-end btn-submit bg-primary outline-none"
          style={{ color: "white" , background:"green"}}
        >
          Submit Product
        </button>
      </div>
    </form>
  );
};

export default AddNewProduct;

