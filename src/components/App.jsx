import React from "react";
import { SearchBar } from "./searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/imageGallery";
import { getDataByName } from "./api/api";
import { Button } from "./button/button";
import  Modal  from "./modal/modal"
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [searchQ, setSearchQ] = useState("");
  const [page, setPage] = useState(1);
  const [modalImg, setModalImg] = React.useState("");

  useEffect(() => {
    if (searchQ) {
      getApiByName();
    }

    async function getApiByName() {
      try {
        
        const data = await getDataByName(searchQ, page);
        if (!data.hits.length) {
          
          return alert("Sorry, we not found images...");
        }
        setPictures(prevState => [...prevState, ...data.hits]);
        
        return;
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchQ, page]);

  const searchImg = searchQuerry => {
    if (!searchQuerry || searchQuerry === searchQ) return;
    setSearchQ(searchQuerry);
    setPage(1);
    setPictures([]);
  };

  const onClickLoadMore = () => {
    setPage(page + 1);
  };

  const onModalOpen = url => {
    setModalImg(url);
  };

  const onModalClose = () => {
    setModalImg('');
  };

  return (
    <div>
      <SearchBar
        onFind={searchImg} />
      <ImageGallery
        data={pictures}
        onClick={onModalOpen}
      />
      
      {modalImg && (
        <Modal onClose={onModalClose}>
          <img src={searchImg} alt={pictures.tags} />
        </Modal>
      )}
      <Button
        onClick={onClickLoadMore}
        Pictures={pictures}
      />
    </div>
  )
};
export { App }