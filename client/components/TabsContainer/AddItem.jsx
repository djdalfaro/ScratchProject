import React, { useState } from "react";
import { SearchBar } from "./SearchBar.jsx";

export const AddItem = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Add Item
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Item</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-row flex-auto justify-center">
                  <div className="m-4 flex flex-col items-center">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Item Name
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          className="focus:ring-indigo-500 focus:border-indigo-500 block m-3 w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Milk"
                          //   value={symbol}
                          //   onChange={(e) => setSymbol(e.target.value)}
                        ></input>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Quantity
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          className="focus:ring-indigo-500 focus:border-indigo-500 block m-3 w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          type="text"
                          placeholder="0"
                          step="0.5"
                          //   onChange={(e) => setStrike(e.target.value)}
                          //   value={strike}
                        ></input>
                      </div>
                    </div>

                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <select
                          name="types"
                          placeholder="Long Naked Call"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block m-3 w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          //   onChange={(e) => setType(e.target.value)}
                          //   value={type}
                        >
                          <option>Dairy</option>
                          <option>Meat</option>
                          <option>Produce</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Quantity
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          className="focus:ring-indigo-500 focus:border-indigo-500 block m-3 w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          type="text"
                          placeholder="0"
                          step="0.5"
                          //   onChange={(e) => setStrike(e.target.value)}
                          //   value={strike}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    // style={{ transition: "all .15s ease" }}
                    // onClick={isEdit ? sendEdit : sendTrade}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};