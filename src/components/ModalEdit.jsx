import * as React from 'react';
import Dialog from "@mui/material/Dialog";
import Modal from '@mui/material/Modal';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ModalEdit.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function BasicModal() {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [company, setCompany] = useState("");
    const [platform, setPlatform] = useState("");
    const [rating, setRating] = useState(0);
    const [age, setAge] = useState(0);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const { gameId } = useParams();
    const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("body");
  const navigate = useNavigate();

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/games/${gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneGame = response.data;
        setTitle(oneGame.title);
        setGenre(oneGame.genre);
        setCompany(oneGame.company);
        setPlatform(oneGame.platform);
        setRating(oneGame.rating);
        setAge(oneGame.age);
        setDescription(oneGame.description);
        setImage(oneGame.image);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title,
      genre,
      company,
      platform,
      rating,
      age,
      description,
      image,
    };
    const storedToken = localStorage.getItem("authToken");

    axios.put(`${API_URL}/games/${gameId}`, requestBody, {
      headers: { Authorization: `Bearer ${storedToken}` },
    }).then(() => {
      navigate(`/games/${gameId}`);
    });
  };

  return (
    <div>
      <button onClick={handleClickOpen("body")} className='button-edit'></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Dialog           
        PaperProps={{
        style: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
  }}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">

        <div className="game-title">
      <h1>Edit Game</h1>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />
        <label>Company:</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <br />
        <label>Platform:</label>
        <input
          type="text"
          name="platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
        <br />
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br />
        <label>PEGI:</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          rows="10"
          cols="50"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />

        <button className="button-submit" type="submit">Update Game</button>
      </form>

    </div>
        </Dialog>
      </Modal>
    </div>
  );
}