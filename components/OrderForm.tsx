"use client";
import { FormEvent } from "react";
import { WHATSAPP, orderOptions } from "@/lib/site";

export default function OrderForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const date = f.get("date");
    const details = f.get("details");
    const msg =
      `Hello Cravings By Ijay, my name is ${f.get("name")}. I would like: ${f.get("what")}` +
      (date ? `, needed on ${date}` : "") + `. ${f.get("how")}.` +
      (details ? ` Details: ${details}` : "");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Your name<input name="name" required autoComplete="name" /></label>
      <label>What would you like?
        <select name="what">{orderOptions.map((o) => <option key={o}>{o}</option>)}</select>
      </label>
      <label>Date needed<input type="date" name="date" /></label>
      <label>Pickup or delivery
        <select name="how"><option>Pickup</option><option>Delivery</option></select>
      </label>
      <label className="full">Details (size, flavour, quantity)<textarea name="details" /></label>
      <button className="btn" type="submit">Send on WhatsApp</button>
    </form>
  );
}
