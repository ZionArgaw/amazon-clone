import React from "react";
import { catagoryInfos } from "./catagoryFulliinfos";
import CatagoryCard from "./CatagoryCard";
import classes from "./catagory.module.css";
function Catagory() {
  return (
    <section className={classes.catagory__container}>
      {catagoryInfos.map((infos) => (
        <CatagoryCard key={infos.imgLink} data={infos} />
      ))}
    </section>
  );
}

export default Catagory;