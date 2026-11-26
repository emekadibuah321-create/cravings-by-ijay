"use client";
import { useState } from "react";
import { WHATSAPP, links } from "@/lib/site";

const nav = [
  { href: "#gallery", label: "Cakes" },
  { href: "#menu", label: "Menu" },
  { href: "#academy", label: "Cake academy" },
  { href: "#order", label: "Order" },
  { href: links.store, label: "Shop online", external: true },
  { href: "#visit", label: "Visit" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="nav">
        <a className="logo" href="#top" onClick={() => setOpen(false)}>Cravings By Ijay</a>
        <ul id="site-menu" className={open ? "open" : undefined}>
          {nav.map((n) => (
            <li key={n.label}>
              <a href={n.href} onClick={() => setOpen(false)}
                {...(n.external ? { target: "_blank", rel: "noopener" } : {})}>{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a className="btn" href={`https://wa.me/${WHATSAPP}`}>WhatsApp us</a>
          <button type="button" className="burger" aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
