import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row items-center mt-16 px-4 py-4 border-violet-500 border-t-1 w-full">
      <div className="mx-auto text-muted-foreground text-center container">
        © Copyright {new Date().getFullYear()} Bloggy - By Amr Mohamed
      </div>
    </div>
  );
};

export default Footer;
