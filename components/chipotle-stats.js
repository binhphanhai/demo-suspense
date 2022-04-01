import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
// import { useEffect, useState } from "react";
import { createResource } from "../utils";
import ChipotleIcon from "./icons/chipotle";

let chipotleResource = createResource(
  fetch("http://localhost:3000/api/chipotle").then((res) => res.json())
);

export default function YouTubeStats() {
  // const [data, setDate] = useState();
  // useEffect(() => {
  //   fetch("/api/chipotle")
  //     .then((response) => response.json())
  //     .then((res) => setDate(res));
  // }, []);

  const data = chipotleResource.read();

  return (
    <div
      className="flex items-center px-10 py-6  m-4 overflow-hidden bg-white rounded-lg shadow"
      style={{ width: 260 }}
    >
      <ChipotleIcon className="w-10 h-10 shrink-0" />
      <div className="pl-5">
        <p className="text-sm font-medium text-gray-500 truncate">Burritos</p>
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">{data.stat}</p>
          <p
            className={`ml-2 flex items-baseline text-sm font-semibold ${
              data.changeType === "increase" ? "text-green-600" : "text-red-600"
            }`}
          >
            {data.changeType === "increase" ? (
              <ArrowSmUpIcon className="self-center w-5 h-5 text-green-500 shrink-0" />
            ) : (
              <ArrowSmDownIcon className="self-center w-5 h-5 text-red-500 shrink-0" />
            )}
            {data.change}
          </p>
        </div>
      </div>
    </div>
  );
}
