import React, { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PaidIcon from "@mui/icons-material/Paid";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// style for modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: '16px'
};

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const removeItem = (idx) => {
    let tempCart = [...cart];
    tempCart.splice(idx, 1);
    setCart([...tempCart]);
  };

  const clearCart = () => {
    setCart([]);
  };

  let total = cart.reduce((acc, value) => {
    return acc + value.qty * value.price;
  }, 0);

  return (
    <div className="container">
      {cart.length > 0 ? (
        <>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>
                      <img src={item.img} height="40px"></img>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.qty}</td>
                    <td>${item.price * item.qty}</td>
                    <td>
                      <Tooltip title="Delete Item">
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => removeItem(idx)}
                        >
                          <DeleteIcon></DeleteIcon>
                        </Button>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="total">
            <Stack direction="row" spacing={2}>
              <Tooltip title="Clear everything!">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => clearCart()}
                >
                  <HighlightOffIcon></HighlightOffIcon>
                </Button>
              </Tooltip>
              <Tooltip title="Pay">
                <Button
                  onClick={handleOpen}
                  variant="contained"
                  color="success"
                >
                  <PaidIcon></PaidIcon>
                </Button>
                
              </Tooltip>
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Warning!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      The payment is not possible at the moment.
                    </Typography>
                  </Box>
                </Modal>
            </Stack>
            <br />
          </div>
          <h4 className="total-title">Your total is: ${total}</h4>
        </>
      ) : (
        <>
          <h3 className="cart-title">The cart is empty!</h3>
          <img className="cart-image" src="img/cart.jpg" />
        </>
      )}
    </div>
  );
};

export default Cart;
