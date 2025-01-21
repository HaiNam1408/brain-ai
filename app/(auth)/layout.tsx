import React from "react";

export default function AuthLayout(props: { children: React.ReactNode }) {
  return (
    <div className="flex h-full justify-center items-center">
      {props.children}
    </div>
  );
}
