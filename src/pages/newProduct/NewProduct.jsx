// NewProduct.jsx
import React, { useState, useEffect } from "react";
import "./newProduct.scss";
import axios from "axios";
import { NavLink, Navigate, useParams } from "react-router-dom";

const NewProduct = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const { id } = useParams();
  const [product, setProduct] = useState({
    productName: "",
    brand: "",
    manufacturerCode: "",
    description: "",
    price: "",
    discountedPrice: "",
  });
  const [isSaved, setIsSaved] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  const validateForm = () => {
    const errors = {};

    if (!product.productName.trim()) {
      errors.productName = "Название обязательно";
    }

    if (!product.brand.trim()) {
      errors.brand = "Бренд обязателен";
    }

    // Qolgan inputlar uchun ham validatsiya qo'shing

    return errors;
  };

  const handleSave = async () => {
    try {
      const errors = validateForm();

      if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
      }

      if (id) {
        // Update existing product
        await axios.put(`http://localhost:3000/products/${id}`, product);
      } else {
        // Create new product
        await axios.post("http://localhost:3000/products", product);
      }

      setIsSaved(true);
      setErrors({});
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleCancel = () => {
    setProduct({
      productName: "",
      brand: "",
      manufacturerCode: "",
      description: "",
      price: "",
      discountedPrice: "",
    });

    setIsSaved(false);
    setErrors({});
  };

  return (
    <div className="newProduct">
      <div className="newProduct__container">
        <NavLink to="/product">
          <button className="newProduct__btn">Основные</button>
        </NavLink>
        <div className="newProduct">
          <form className="form__container">
            <label className="newProduct__label">Название *</label>
            <input
              className={`newProduct__input_1 ${
                errors.productName ? "error" : ""
              }`}
              type="text"
              value={product.productName}
              onChange={(e) =>
                setProduct({ ...product, productName: e.target.value })
              }
            />
            {errors.productName && (
              <p className="error-message">{errors.productName}</p>
            )}

            <div className="newProduct__input_block">
              <div className="newProduct__left">
                <label className="newProduct__label">Бренд *</label>
                <input
                  className={`newProduct__input_2 ${
                    errors.brand ? "error" : ""
                  }`}
                  type="text"
                  value={product.brand}
                  onChange={(e) =>
                    setProduct({ ...product, brand: e.target.value })
                  }
                />
                {errors.brand && (
                  <p className="error-message">{errors.brand}</p>
                )}
              </div>
              {/* Qolgan inputlar uchun ham validatsiya qo'shing */}
            </div>

            <label className="newProduct__label">Описание *</label>
            <textarea
              className="newProduct__area"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            ></textarea>

            <div className="newProduct__input_block">
              <div>
                <label className="newProduct__label">Цена</label>
                <input
                  className="newProduct__input_3"
                  type="text"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="newProduct__label">Цена со скидкой</label>
                <input
                  className="newProduct__input_3"
                  type="text"
                  value={product.discountedPrice}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      discountedPrice: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="footer">
        <div className="footer__block">
          <button className="footer__btn" onClick={handleSave}>
            Сохранить
          </button>
          <button className="footer__btnn" onClick={handleCancel}>
            Отмена
          </button>
        </div>
      </div>

      {isSaved && (
        <div className="newProductSaved">
          <h2>New Product Saved:</h2>
          <p>Name: {product.productName}</p>
          <p>Brand: {product.brand}</p>
          <p>Manufacturer Code: {product.manufacturerCode}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Discounted Price: {product.discountedPrice}</p>
          {/* Boshqa malumotlar... */}
        </div>
      )}
    </div>
  );
};

export default NewProduct;
