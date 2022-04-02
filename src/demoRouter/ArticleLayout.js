import React from "react";
import { Outlet } from "react-router-dom";

const ArticleLayout = () => {
  return (
    <div className="bg-secondary">
      <h1>Article Layout</h1>
      {/* Dùng Outlet để render ra Child Route  */}
      <Outlet />
    </div>
  );
};

export default ArticleLayout;
