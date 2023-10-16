import React from "react";
import UpdateTabHeader from "./UpdateTabHeader";
import { useState } from "react";
import Requests from "./components/Requests";
import Notifications from "./components/Notifications";

function UpdateTab() {
  const [selected, setSelected] = useState("request");
  return (
    <div className="w-full  ">
      <UpdateTabHeader selected={selected} setSelected={setSelected} />
      <div className="overflow-y-auto overflow-x-hidden h-full w-full pb-48 max-h-screen  ">
        {selected === "request" ? <Requests /> : <Notifications />}
      </div>
    </div>
  );
}

export default UpdateTab;
