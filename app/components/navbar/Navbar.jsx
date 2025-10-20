import React from "react";
import Container from "../shared/Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="bg-orange-600 py-3">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-[30%]">
            <h2 className="text-[40px] font-bold">NextJs</h2>
          </div>
          <div className="w-[70%]">
            <div className="">
              <ul className="flex justify-end gap-x-[24px] text-[18px] font-semibold">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
