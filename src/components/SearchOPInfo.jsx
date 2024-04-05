import "./searchopinfo.css";

import { useState } from "react";

import OpDescription from "./OpDescription";
import OpOtherContent from "./OpOtherContent";
import OpReviews from "./OpReviews";
export default function SearchOPInfo({ displayItem }) {
  const [opInfoTab, setOpInfoTab] = useState("description");

  return (
    <section className="searhOPinfo">
      <div className="searhOPinfo-btnContainer">
        <button
          style={
            opInfoTab === "description"
              ? { color: "#232f3e" }
              : { color: "rgb(111, 111, 111)" }
          }
          onClick={() => setOpInfoTab("description")}
        >
          Description
        </button>
        <button
          style={
            opInfoTab === "otherContent"
              ? { color: "#232f3e" }
              : { color: "rgb(111, 111, 111)" }
          }
          onClick={() => setOpInfoTab("otherContent")}
        >
          Other-content
        </button>
        <button
          style={
            opInfoTab === "reviews"
              ? { color: "#232f3e" }
              : { color: "rgb(111, 111, 111)" }
          }
          onClick={() => setOpInfoTab("reviews")}
        >
          Reviews
        </button>
      </div>

      {opInfoTab === "description" && (
        <OpDescription displayItem={displayItem} />
      )}

      {opInfoTab === "otherContent" && <OpOtherContent />}

      {opInfoTab === "reviews" && <OpReviews />}
    </section>
  );
}
