import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Grid2 } from "@mui/material";

export const ProductFilter = ({ onFilter }) => {
  const [brands, setBrands] = useState([]);
  const [genders, setGenders] = useState([]);
  const [categories, setCategories] = useState(['Zapatillas', 'Indumentaria']);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const fetchBrandsAndGenders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/product");
        const uniqueBrands = [...new Set(response.data.map(item => item.brand))];
        const uniqueGenders = [...new Set(response.data.map(item => item.gender))];
        
        setBrands(uniqueBrands);
        setGenders(uniqueGenders);
      } catch (error) {
        console.error('Error fetching brands and genders:', error);
      }
    };

    fetchBrandsAndGenders();
  }, []);

  const handleFilterChange = (event) => {
    event.preventDefault();
    onFilter({
      brand: selectedBrand,
      gender: selectedGender,
      category: selectedCategory,
      minPrice: parseFloat(minPrice),
      maxPrice: parseFloat(maxPrice),
    });
  };

  return (
    <form onSubmit={handleFilterChange} style={{ marginTop: "120px", width: "auto"}}>
      <Grid2 container spacing={20}>
        <Grid2 xs={12} sm={4} sx={{ width: '10%' }}>
          <FormControl fullWidth>
            <InputLabel>Marca</InputLabel>
            <Select
              value={selectedBrand}
              onChange={e => setSelectedBrand(e.target.value)}
              label="Marca"
            >
              <MenuItem value="">Todas las marcas</MenuItem>
              {brands.map(brand => (
                <MenuItem key={brand} value={brand}>{brand}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>

        <Grid2 xs={12} sm={4} sx={{ width: '10%' }}>
          <FormControl fullWidth>
            <InputLabel>Género</InputLabel>
            <Select
              value={selectedGender}
              onChange={e => setSelectedGender(e.target.value)}
              label="Género"
            >
              <MenuItem value="">Todos los géneros</MenuItem>
              {genders.map(gender => (
                <MenuItem key={gender} value={gender}>{gender}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>

        <Grid2 xs={12} sm={4} sx={{ width: '10%' }}>
          <FormControl fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              label="Categoría"
            >
              <MenuItem value="">Todas las categorías</MenuItem>
              {categories.map(category => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>

        <Grid2 xs={12} sm={6}>
          <TextField
            fullWidth
            type="number"
            label="Precio Mínimo"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
          />
        </Grid2>

        <Grid2 xs={12} sm={6}>
          <TextField
            fullWidth
            type="number"
            label="Precio Máximo"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
          />
        </Grid2>

        <Grid2 xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Filtrar
          </Button>
        </Grid2>
      </Grid2>
    </form>
  );
};
