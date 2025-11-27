import React from "react";

export default function ServiceCard({ name, description, img, onClick }) {
  return (
    <div
      className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition cursor-pointer"
      onClick={onClick}
    >
      <img src={img} alt={name} className="h-20 w-20 object-cover rounded-xl mb-4" />
      <h3 className="text-base font-semibold text-slate-900 mb-2 text-center">
        {name}
      </h3>
      <p className="text-sm text-slate-600 text-center">{description}</p>
    </div>
  );
}
