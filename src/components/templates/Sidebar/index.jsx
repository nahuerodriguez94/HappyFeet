import React, { useEffect, useState } from "react";
import { Drawer, List, ListItem } from "@mui/material";
import axios from "axios";

export const Sidebar = ({ open, closeSidebar }) => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <Drawer
        open={open}
        onClose={closeSidebar}
        anchor="right"
        sx={{
          width: 240,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            overflowY: "auto",
          },
        }}
      >
        <List>
          {products.map((item, index) => (
            <ListItem key={index}> {item.title}

            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
