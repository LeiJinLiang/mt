import React, { useEffect, useRef, useState } from "react";
import { Element, Link } from "react-scroll";
import logo from "./logo.svg";
import "./App.css";

const limit = 3;

function App() {
  const [list, setList] = useState<string[]>(Array.from({length: 20}, (v, i) => 'third----------------------------third'))
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const handleScroll = (ele: any) => {
    const scrollHeight = ele.target.scrollHeight;
    const scrollTop = ele.target.scrollTop;
    const clientHeight = ele.target.clientHeight;
    const bottom = scrollHeight - scrollTop === clientHeight
    if(bottom && (count < limit)){
      setLoading(true);
      setCount(c=> c+1);
      new Promise((resolve)=>{
        setTimeout(()=>{
          setLoading(false);
          setList((p)=> p.concat(Array.from({length: 10}, (v, i) => `append----------------------------third-----${count}`)))
        },3000)
      })
    }
  }

  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul className="nav">
            <li>
              <Link
                activeClass="active"
                to="first"
                spy={true}
                smooth={true}
                duration={250}
                containerId="containerElement"
              >
                1st
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="second"
                spy={true}
                smooth={true}
                duration={250}
                containerId="containerElement"
              >
                2nd
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="third"
                spy={true}
                smooth={true}
                duration={250}
                containerId="containerElement"
              >
                3rd
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Element name="container" className="content" id="containerElement"  onScroll={handleScroll}>
        <Element name="first" className="element">
          first----------------------------second
          {`first element inside container`.repeat(100)}
        </Element>
        <Element name="second" className="element">
          second----------------------------second
          {`second element inside container`.repeat(100)}
        </Element>
        <Element name="third" className="element">
          {list.map((item, idx)=>(
            <p key={idx}>{item}</p>
          ))}
          {loading && <p>loading..........</p>}
        </Element>
      </Element>
    </div>
  );
}

export default App;
