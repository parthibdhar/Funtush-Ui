import React, { Fragment, useState } from "react";
import { CategoriesData } from "../Data/CategoriesData";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaCheck } from "react-icons/fa";

const Filters = () => {
  const yearData = [
    { title: "Short By Year" },
    { title: "1700 - 1800" },
    { title: "1800 - 1900" },
    { title: "1900 - 2000" },
    { title: "2000 - 2010" },
    { title: "2010 - 2030" },
  ];

  const timeData = [
    { title: "Short By Hours" },
    { title: "1 -5 Hours" },
    { title: "5 -10 Hours" },
    { title: "10 -15 Hours" },
    { title: "15 -20 Hours" },
  ];

  const ratesData = [
    { title: "Short By Rates" },
    { title: "1 Star" },
    { title: "2 Star" },
    { title: "3 Star" },
    { title: "4 Star" },
    { title: "5 Star" },
  ];

  const [category, setCategory] = useState({ title: "Category" });
  const [year, setYear] = useState(yearData[0]);
  const [time, setTime] = useState(timeData[0]);
  const [rates, setRates] = useState(ratesData[0]);
  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onChange: setYear,
      items: yearData,
    },
    {
      value: time,
      onChange: setTime,
      items: timeData,
    },
    {
      value: rates,
      onChange: setRates,
      items: ratesData,
    },
  ];
  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter?.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <Listbox.Button className="relative border border-grey-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs  ">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                <FaAngleDown className="h-5 w-5" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="trasition ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full bg-dry border border-gray-800 text-dryGray rounded-md shadow-lg ">
                {item?.items?.map((itm, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4  ${
                        active ? "bg-subMain text-white" : "text-main bg-white"
                      }`
                    }
                    value={itm}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate  ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {itm.title}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaCheck className="w-3 h-3" arial-hidden="true" />
                          </span>
                        ) : (
                          "null"
                        )}
                      </>
                      // ------------------ *issue*  are not being selected properly except category ---------------------------
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
};

export default Filters;
