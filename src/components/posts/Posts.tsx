import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAuth } from "../../redux/selectors";

type propsType = {};

export const Posts: React.FC<propsType> = (porps) => {
  const history = useHistory();
  const auth = useSelector(getAuth);

  if (!auth) {
    history.push("/login");
  }

  const myAdvertisement = () => {
    history.push("/posts/my");
  };

  const allAdvertisement = () => {
    history.push("/posts/all");
  };

  const createAdvertisement = () => {
    history.push("/posts/create");
  };

  return (
    <div>
      <div>
        <button onClick={myAdvertisement}> My Advertisement</button>
        <button onClick={allAdvertisement}> All Advertisement</button>
      </div>
      <div>
        <button onClick={createAdvertisement}>Create Advertisement</button>
      </div>
    </div>
  );
};
