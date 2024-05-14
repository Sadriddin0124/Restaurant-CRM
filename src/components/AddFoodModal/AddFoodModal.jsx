import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./AddFoodModal.scss";
import Upload from "../../assets/upload.avif";
import { useProductStore } from "../../store/ProductStore/ProductStore";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AddFood({ open, toggle }) {
  const { fileUpload, addProducts } = useProductStore();
  const [image, setImage] = React.useState("")
  const ImageUpload = async(e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    const res = await fileUpload(formData);
    console.log(res);
    setImage(res?.data?.url)
  };
  const handleProduct = async(e) => {
    e.preventDefault()
    const payload = {
        picture: image,
        title: e.target[1].value,
        price: +e.target[2].value,
        discount: +e.target[3].value,
        category_id: +e.target[4].value,
        description: e.target[5].value,
    }
    const res = await addProducts(payload)
    console.log(res);
    if (res?.status === 201) {
        toggle()
    }
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="modal__body" onSubmit={handleProduct}>
            <div className="modal__image">
              <input type="file" onChange={ImageUpload} />
              <img src={Upload} alt="upload" />
            </div>
            <div className="modal__inputs">
              <input type="text" placeholder="Title" />
              <input type="text" placeholder="Price" />
              <input type="text" placeholder="Discount" />
              <select>
                <option value="" hidden>
                  Select Category
                </option>
                <option value="1">Noodles</option>
                <option value="2">Burger</option>
                <option value="3">Drink</option>
                <option value="4">Dessert</option>
              </select>
              <textarea rows={4} placeholder="Description"></textarea>
              <button className="modal__btn" type="submit">Save</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
