import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ArticleDetails = () => {
  // Để lấy ra params trên url ta dùng hook useParams
  // path: /articles/:id => object có key là id
  const { id } = useParams();
  // Dùng để điều hướng khi không thể dùng thẻ Link/NavLink
  const navigate = useNavigate();

  useEffect(() => {
    // Dùng id từ url để dispatch action/call API
    console.log(id);

    const getData = async () => {
      try {
        // await api.getArticles(id);
        throw new Error("NotFound");
      } catch (error) {
        // Nếu id k hợp lệ => báo lỗi hoặc redirect về trang NotFound
        navigate("/not-found", { replace: true });
      }
    };

    getData();
  }, []);

  return <div>ArticleDetails</div>;
};

export default ArticleDetails;
