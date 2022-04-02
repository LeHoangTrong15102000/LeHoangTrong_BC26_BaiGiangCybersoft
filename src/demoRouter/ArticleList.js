import React, { useState, useEffect } from "react";
import qs from "qs";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

const DATA = [
  { id: 1, title: "React", content: "..." },
  { id: 2, title: "Angular", content: "..." },
  { id: 3, title: "Vue", content: "..." },
];

const ArticleList = () => {
  const [articles, setArticles] = useState(DATA);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('lang'))
  // const params = qs.parse(searchParams.toString(), { ignoreQueryPrefix: true });
  // console.log(params);

  const handleSearch = (evt) => {
    setSearchParams({ search: evt.target.value });

    // Nếu làm với API thì ở đây sẽ gọi API và truyền value vào

    const filtered = DATA.filter((item) => {
      return item.title.toLowerCase().includes(evt.target.value?.toLowerCase());
    });

    setArticles(filtered);
  };

  useEffect(() => {
    const filtered = DATA.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(searchParams.get("search")?.toLowerCase() || "");
    });
    setArticles(filtered);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            value={searchParams.get("search")}
            onChange={handleSearch}
          />
        </Form.Group>
        {articles.map((item) => (
          <div className="col-sm-4">
            <Card>
              <Card.Header>{item.title}</Card.Header>
              <Card.Body>
                <p>{item.content}</p>

                <Button variant="primary" as={Link} to={`/articles/${item.id}`}>
                  Details
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
