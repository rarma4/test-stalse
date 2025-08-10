'use client'
import Link from "next/link"
import React, { useState } from 'react';

type MenuProps = {
  mobile?: any;
}

export default function MenuItens(props: MenuProps) {
  const [btnActive, setBtnActive] = useState("home")

  return (
    <>
      <li className="nav-item" data-bs-dismiss={`${props.mobile}`}>
        <a className={`nav-link ${btnActive === "home" && "active"}`} href="#" onClick={()=>setBtnActive("home")}>Home
          <span className="visually-hidden">(current)</span>
        </a>
      </li>
      <li className="nav-item"  data-bs-dismiss={`${props.mobile}`}>
        <Link className={`nav-link ${btnActive === "lancamentos" && "active"}`} onClick={()=>setBtnActive("lancamentos")} href="/#lancamentos">Lançamentos</Link>
      </li>

    </>
  )
}
