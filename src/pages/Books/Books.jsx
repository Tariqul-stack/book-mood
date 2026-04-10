import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/ListedBooks/ListedReadList";
import ListedWishList from "../../components/ListedBooks/ListedWishList";

const Books = () => {
  const { readList, wishList } = useContext(BookContext);
  console.log(readList, wishList, "book Context");

  return (
    <div className="container mx-auto my-3">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList />
        </TabPanel>
        <TabPanel>
          <ListedWishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
