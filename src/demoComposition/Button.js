import React from "react";

// prop children: đại diện cho nội dung được gọi ở giữa 2 tag đóng mở của component
const Button = ({ variant, children, ...rest }) => {
  const classes = `btn btn-${variant}`;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
