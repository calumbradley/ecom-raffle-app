"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faGolfBall } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" className="cursor-pointer">
          <h1 className="flex no-underline">
            <FontAwesomeIcon
              height="28"
              width="28"
              alt="logo"
              className="h-7 w-7 mr-1 object-contain"
              icon={faGolfBall}
            />
            <FontAwesomeIcon />
            <span className="text-xl font-primary font-bold tracking-tight pt-1">
              {process.env.NEXT_PUBLIC_SITE_TITLE}
            </span>
          </h1>
        </Link>
        <div>
          <Link href="/cart" className="relative" aria-label="cart">
            <FontAwesomeIcon
              className="text-palette-primary w-6 m-auto"
              icon={faShoppingCart}
            />
            {cartItems === 0 ? null : (
              <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3">
                {cartItems}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Nav;
