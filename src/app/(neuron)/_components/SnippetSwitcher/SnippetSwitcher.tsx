"use client";
import { Button, Tabs, Tab } from "react-bootstrap";
import Counter from "../Counter";
import styles from "./SnippetSwitcher.module.scss";

export default function SnippetSwitcher() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          className={`${styles.counterContainer} d-flex justify-content-center py-4`}
        >
          <Counter />
        </div>
        <Tabs
          defaultActiveKey="Core"
          id="uncontrolled-tab-example"
          className="p-0 d-flex justify-content-end text-white"
          transition={false}
          style={{
            backgroundColor: "#1e1e1e",
            borderTopRightRadius: ".5rem",
            borderTopLeftRadius: ".5rem",
          }}
        >
          <Tab eventKey="Core" title="Core" className="text-white">
            <pre className={"language-html pt-0 mt-0"}>
              <code className={"language-html"}>
                {`
 <p>Count: <span id="count">0</span></p>
 <button id="incrementBtn" onclick="increment()">Increment</button>

 <script>
   window.onload = (event) => {
     const Neuron = NeuronCore.Neuron;
     const counter = new Neuron(0);

     function increment() {
        counter.set((prev) => prev + 1)
     }

     const counterNode = document.querySelector("#count");

     counter.effect((payload) => {
       counterNode.innerHTML = payload.state;
     });
   };
 </script>
`}
              </code>
            </pre>
          </Tab>
          <Tab eventKey="React" title="React" className={"p-0 text-white"}>
            <pre className={"language-javascript mt-0 pt-0"}>
              <code className={"language-javascript"}>
                {`
import {neuron} from '@sandstack/neuron/react'

const useCount = neuron(0);

function Comp(){
  const [count, countActions] = useCount()

  return(
    <>
     <p>Count: {count}</p>
     <button onClick={() => countActions.set((prev) => prev + 1)}>
      Add
     </button>
    </>
  )
}
`}
              </code>
            </pre>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
