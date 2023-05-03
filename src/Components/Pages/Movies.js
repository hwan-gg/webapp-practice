import React, { useEffect, useState } from "react";
import { Card, Pagination, Space, Typography, Skeleton } from "antd";
import { Content } from "antd/es/layout/layout";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../Actions";

const { Title } = Typography;
const { Meta } = Card;

function Movies() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const onChange = (pageNumber) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(pageNumber);
  };

  useEffect(() => {
    if (movies.length === 0) dispatch(actions.movies.get());
  }, [dispatch, movies]);

  return (
    <Content style={{ padding: 30 }}>
      <div
        className="Movies"
        style={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Space>
          <Title> Movies </Title>
        </Space>
        {movies.length > 0 ? (
          <div
            className="Posters"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
              columnGap: "10px",
              rowGap: "10px",
            }}
          >
            {movies[page].map((movie) => (
              <Card
                key={movie._id.title}
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    id={`${movie._id.title}_poster`}
                    alt="Missing Poster"
                    src={movie.poster}
                    onError={() => {document.getElementById(`${movie._id.title}_poster`).setAttribute('src','https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png')}}
                  />
                }
              >
                <Meta
                  title={movie._id.title}
                  description={`${movie._id.director} ${movie.year}`}
                />
              </Card>
            ))}
          </div>
        ) : (
          <Skeleton active style={{ height: "63vh" }} />
        )}
        <Space style={{ marginTop: "20px" }}>
          <Pagination
            defaultPageSize={1}
            total={movies.length - 1}
            showSizeChanger={false}
            current={page}
            onChange={onChange}
          />
        </Space>
      </div>
    </Content>
  );
}

export default Movies;
