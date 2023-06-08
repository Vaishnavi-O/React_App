import React from "react";
import { users } from "../utils/data";
import ListItem from "./listItem";
import styles from './list.module.css';


const List = () => {
    return (
   <section className={styles.list}>
  {
    users.map((user)=>(
        (
            <ListItem info={user}/>
            // <div className="list-card">
            // <p className="list-card-name">{user.name}</p>
            // <p className="list-card-age">{user.age}</p>
            // </div>
        )
    ))
  }
   </section>
    );
}

export default List;