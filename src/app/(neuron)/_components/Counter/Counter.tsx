import { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./Counter.module.scss";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={`d-flex flex-column align-items-center p-4 ${styles.bk}`}>
        <p className={"mb-2 text-dark fw-bold"}>Count: {count}</p>
        <Button
          size={"sm"}
          className={"p-1 px-3"}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Add
        </Button>
      </div>
    </>
  );
}
