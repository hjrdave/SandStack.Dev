"use client";
import { Button, Tabs, Tab } from "react-bootstrap";
import Counter from "../Counter";
import styles from "./SnippetSwitcher.module.scss";

export default function SnippetSwitcher() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          className={`${styles.counterContainer} d-flex justify-content-end pb-3`}
        >
          <Counter />
        </div>
        <Tabs
          defaultActiveKey="Vanilla"
          id="uncontrolled-tab-example"
          className="p-0 d-flex justify-content-end text-white"
          transition={false}
          style={{
            backgroundColor: "#1e1e1e",
            borderTopRightRadius: ".5rem",
            borderTopLeftRadius: ".5rem",
          }}
        >
          <Tab eventKey="Vanilla" title="VanillaJS" className="text-white">
            <pre className={"language-html pt-0 mt-0"}>
              <code className={"language-html"}>
                {`
<p>Count: <span id="count">0</span></p>
<button onclick="increment()">Add</button>
<script>
    const Store = createStore();

    Store.add({
        key: "counter",
        state: 0
    });

    const increment = () => Store.set("counter", (prev) => prev + 1);
    const counter = document.querySelector('#count');

    onDispatch((payload) => {
        if (payload.key === "counter") {
            counter.innerHTML = payload.state;
        }
    });
</script>
`}
              </code>
            </pre>
          </Tab>
          <Tab eventKey="React" title="React" className={"p-0 text-white"}>
            <pre className={"language-javascript mt-0 pt-0"}>
              <code className={"language-javascript"}>
                {`
import {createStore} from '@sandstack/neuron/react'

const {State, useNeuron} = createStore();

function Store(){
  return(
    <>
     <State name={'counter'} state={0}/>
    </>
  )
}
function Comp(){
  const [count, setCount] = useNeuron('counter')

  return(
    <>
     <p>Count: {count}</p>
     <button onClick={() => setCount((prev) => prev + 1)}>
      Add
     </button>
    </>
  )
}
`}
              </code>
            </pre>
          </Tab>
          <Tab eventKey="Typescript" title="React + TS" className={"p-0"}>
            <pre className={"language-typescript mt-0 pt-0"}>
              <code className={"language-typescript"}>
                {`
import Neuron from '@sandstack/neuron/react'

interface State{
    counter: number
}

const {State, useNeuron} = Neuron.Store<State>();

function Store(){
  return(
    <>
     <State<number> name={'counter'} state={0}/>
    </>
  )
}
function Comp(){
  const [count, setCount] = useNeuron<number>('counter')

  return(
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
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
