import React, { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from "@mui/material";
import axios from "axios";

export const Sidebar = ({ open, closeSidebar }) => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
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
            width: 600,
            boxSizing: "border-box",
            overflowY: "auto",
          },
        }}
      >
        <List>
          {products.map((item, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={item.image} alt={item.title} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      ${item.price}
                    </Typography>
                    <Typography component="span" variant="body2" color="text.secondary" display="block">
                      {item.category}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
