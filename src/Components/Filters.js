import React, { Fragment, useState } from "react";
import { CategoriesData } from "../Data/CategoriesData";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaCheck } from "react-icons/fa";

const yearData = [

  { _id: 1, title: "1700 - 1800" },
  { _id: 2, title: "1800 - 1900" },
  { _id: 3, title: "1900 - 2000" },
  { _id: 4, title: "2000 - 2010" },
  { _id: 5, title: "2010 - 2030" },
];

const timeData = [
  { title: "1 -5 Hours" },
  { title: "5 -10 Hours" },
  { title: "10 -15 Hours" },
  { title: "15 -20 Hours" },
];

const ratesData = [

  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];

const Filters = () => {
  const [category, setCategory] = useState({ title: "Category" });
  const [year, setYear] = useState({ title: "Short By years" });
  const [time, setTime] = useState({ title: "Short By Hours" });
  const [rates, setRates] = useState({ title: "Short By Rates" });

  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      
      <Listbox value={category} onChange={(e) => setCategory(e)}>
        <div className="relative">
          <Listbox.Button className="relative border border-grey-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs  ">
            <span className="block truncate">{category?.title}</span>
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
              {CategoriesData?.map((cat, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4  ${active ? "bg-subMain text-white" : "text-main bg-white"
                    }`
                  }
                  value={cat}
                  onClick={(e) => setCategory(e.target.value)}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate  ${selected ? "font-semibold" : "font-normal"
                          }`}
                      >
                        {console.log(selected)}
                        {cat.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FaCheck className="w-3 h-3" />
                          {/* {`selected: ${selected}`} */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <Listbox value={year} onChange={(e) => setYear(e)}>
        <div className="relative">
          <Listbox.Button className="relative border border-grey-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs  ">
            <span className="block truncate">{year.title}</span>
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
              {yearData?.map((y, j) => (
                <Listbox.Option
                  key={j}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4  ${active ? "bg-subMain text-white" : "text-main bg-white"
                    }`
                  }
                  value={y}
                  onClick={(e) => setYear(e.target.value)}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate  ${selected ? "font-semibold" : "font-normal"
                          }`}
                      >
                        {console.log(selected)}
                        {y.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FaCheck className="w-3 h-3" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <Listbox value={time} onChange={(e) => setTime(e)}>
        <div className="relative">
          <Listbox.Button className="relative border border-grey-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs  ">
            <span className="block truncate">{time?.title}</span>
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
              {timeData?.map((t, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4  ${active ? "bg-subMain text-white" : "text-main bg-white"
                    }`
                  }
                  value={t}
                  onClick={(e) => setTime(e.target.value)}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate  ${selected ? "font-semibold" : "font-normal"
                          }`}
                      >
                        {t.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FaCheck className="w-3 h-3" />
                          {/* {`selected: ${selected}`} */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <Listbox value={rates} onChange={(e) => setRates(e)}>
        <div className="relative">
          <Listbox.Button className="relative border border-grey-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs  ">
            <span className="block truncate">{rates?.title}</span>
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
              {ratesData?.map((rat, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4  ${active ? "bg-subMain text-white" : "text-main bg-white"
                    }`
                  }
                  value={rat}
                  onClick={(e) => setRates(e.target.value)}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate  ${selected ? "font-semibold" : "font-normal"
                          }`}
                      >
                        {rat.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FaCheck className="w-3 h-3" />
                          {/* {`selected: ${selected}`} */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>

          </Transition>
        </div>
      </Listbox>

    </div>
  );
};

export default Filters;
