import React from "react";
import styles from "./spinner.module.scss";

export default function Spinner() {
    return (
        <section className={styles.container}>
            <div className={styles.ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
}