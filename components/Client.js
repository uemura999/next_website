"use client";

import React from "react";
import Container from "./Container";
import Image from "next/image";
import { FadeInStagger } from "./FadeIn";
import FadeIn from "./FadeIn";
import logo1 from "../public/clientImg/1.svg";
import logo2 from "../public/clientImg/2.svg";
import logo3 from "../public/clientImg/3.svg";
import logo4 from "../public/clientImg/4.svg";
import logo5 from "../public/clientImg/5.svg";
import logo6 from "../public/clientImg/6.svg";
import logo7 from "../public/clientImg/7.svg";
import logo8 from "../public/clientImg/8.svg";
import { FaDiagnoses } from "react-icons/fa";

const clients = [
  ["1", logo1],
  ["2", logo2],
  ["3", logo3],
  ["4", logo4],
  ["5", logo5],
  ["6", logo6],
  ["7", logo7],
  ["8", logo8],
];

const Client = () => {
  return (
    <div className="mt-24 rounded-[50px] bg-gray-950 mx-5 px-5 py-20">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center text-white text-sm font-semibold tracking-wider">
            こちらの企業も導入しています。
          </h2>
          <div className="h-px flex-auto bg-neutral-700"></div>
        </FadeIn>
        <FadeInStagger faster>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 lg:grid-cols-4 gap-10">
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Client;
