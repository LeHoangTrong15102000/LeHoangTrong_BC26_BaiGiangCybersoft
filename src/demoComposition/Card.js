import React from "react";

const Card = ({ title, header, footer, className, children }) => {
  return (
    <div className={`card ${className}`}>
      {header ? header : <div className="card-header">{title}</div>}

      <div className="card-body">{children}</div>

      <div className="card-footer text-muted">{footer}</div>
    </div>
  );
};

export default Card;
