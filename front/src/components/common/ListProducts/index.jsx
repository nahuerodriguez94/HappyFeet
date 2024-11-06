import React, { useEffect, useState } from "react";
import { CardProduct } from "../CardProduct";
import { Grid2 } from "@mui/material";
import axios from "axios";
import { ProductFilter } from "../../templates/ProductFilter"; // Asegúrate de importar el filtro

export const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/product");
      if (response.data && response.data.length > 0) {
        setProducts(response.data);
        setFilteredProducts(response.data); // Inicialmente, todos los productos están filtrados
      } else {
        console.error("No se encontraron productos");
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFilter = (filters) => {
    const { brand, gender, category, minPrice, maxPrice } = filters;

    const filtered = products.filter((product) => {
      const matchesBrand = brand ? product.brand === brand : true;
      const matchesGender = gender ? product.gender === gender : true;
      const matchesCategory = category ? product.category === category : true;
      const matchesPrice =
        (minPrice ? product.price >= minPrice : true) &&
        (maxPrice ? product.price <= maxPrice : true);
      return matchesBrand && matchesGender && matchesCategory && matchesPrice;
    });

    setFilteredProducts(filtered);
  };

  return (
    <>
      <ProductFilter onFilter={handleFilter} />
      <Grid2
        container
        sx={{ display: "flex", justifyContent: "center", mt: "120px" }}
        spacing={5}
      >
        {filteredProducts.length === 0 ? (
          <div>No se encontraron productos que coincidan con los filtros.</div>
        ) : (
          filteredProducts.map((item) => (
            <CardProduct key={item.id} product={item} />
          ))
        )}
      </Grid2>
    </>
  );
};
