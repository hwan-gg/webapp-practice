import { Content } from "antd/es/layout/layout";
import { Skeleton } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect } from "react";
import actions from "../../Actions";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const profile = useSelector((state) => state.userProfile);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if(profile === null) dispatch(actions.profile.get(currentUser));
  }, []);

  return (
    <Content style={{ height: "85vh" }}>
      {profile === null ? (
        <Skeleton active style={{ height: "63vh" }} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Title>
            {" "}
            <div>Welcome {profile.username}</div>{" "}
          </Title>
          <div>
            User Since:{" "}
            {new Date(profile.userSince).toLocaleDateString("en-US")}
          </div>
          <div>Age: {profile.age}</div>
        </div>
      )}
    </Content>
  );
}

export default Profile;
