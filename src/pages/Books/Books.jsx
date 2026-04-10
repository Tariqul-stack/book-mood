import React, { useContext, useState } from "react";
import { BookContext } from "../../Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/ListedBooks/ListedReadList";
import ListedWishList from "../../components/ListedBooks/ListedWishList";
import { ChevronDown, SlidersHorizontal, FileText, Star } from "lucide-react";

const Books = () => {
  const { readList, wishList } = useContext(BookContext);
  console.log(readList, wishList, "book Context");

  const [sortingType, setSortingType] = useState("");
  console.log(sortingType, "Sorting type");

  return (
    <div className="container mx-auto my-5">
      {/* Sorting */}
      <div className="flex justify-center my-5">
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="btn h-auto min-h-0 border-0 px-6 py-4 rounded-2xl text-lg md:text-xl font-bold text-white 
                  bg-linear-to-r from-[#23BE0A] to-[#59C6D2] 
                  shadow-[0_10px_30px_rgba(35,190,10,0.28)] 
                  hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(35,190,10,0.34)] 
                  transition-all duration-300 flex items-center gap-3"
          >
            <SlidersHorizontal size={20} className="opacity-95" />
            <span>Sort By: {sortingType}</span>
            <ChevronDown size={20} className="opacity-90" />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content z-1 mt-3 w-56 rounded-2xl border border-white/10 bg-white p-2 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-md"
          >
            <li>
              <button
                onClick={() => setSortingType("pages")}
                className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left text-[17px] font-semibold text-[#131313] hover:bg-[#23BE0A]/10 hover:text-[#23BE0A] transition-all duration-200"
              >
                <FileText size={18} />
                Pages
              </button>
            </li>
            <li>
              <button
                onClick={() => setSortingType("rating")}
                className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left text-[17px] font-semibold text-[#131313] hover:bg-[#59C6D2]/10 hover:text-[#59C6D2] transition-all duration-200"
              >
                <Star size={18} />
                Rating
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <ListedWishList sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
