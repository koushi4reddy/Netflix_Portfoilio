"use client";

type ProfileProps = {
  role: string;
  title: string;
  bg: string;
  text: string;
  className?: string;
};

export default function Profile({ role, title, bg, text, className }: ProfileProps) {
  return (
    <div
      className={`rounded-lg flex flex-col justify-center items-center p-6 text-center aspect-square ${className}`}
      style={{ backgroundColor: bg, color: text }}
    >
      <h2 className="text-xl font-bold mb-2 truncate">{role}</h2>
      <p className="text-sm line-clamp-3">{title}</p>
    </div>
  );
}
