import React, { useEffect, useRef, useState, FC } from "react";
import { Element, Link } from "react-scroll";
import "./styles.css";


interface ContainerElementProps{
  containerId: string;
}

const ContainerElement:FC<ContainerElementProps> = ({
  containerId
}) => {
  const [list, setList] = useState<string[]>(Array.from({length: 20}, (v, i) => 'third----------------------------third'))
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
 

  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul className="nav">
            <li>
              <Link
                activeClass="active"
                to={`${containerId}-first`}
                spy={true}
                smooth={true}
                duration={250}
                containerId={containerId}
              >
                1st
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to={`${containerId}-second`}
                spy={true}
                smooth={true}
                duration={250}
                containerId={containerId}
              >
                2nd
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to={`${containerId}-third`}
                spy={true}
                smooth={true}
                duration={250}
                containerId={containerId}
              >
                3rd
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Element name={containerId} className="content" id={containerId} >
        <Element name={`${containerId}-first`} className="element">
          first----------------------------second
          {`first element inside container`.repeat(100)}
        </Element>
        <Element name={`${containerId}-second`} className="element">
          second----------------------------second
          {`second element inside container`.repeat(100)}
        </Element>
        <Element name={`${containerId}-third`} className="element">
          {list.map((item, idx)=>(
            <p key={idx}>{item}</p>
          ))}
          {loading && <p>loading..........</p>}
        </Element>
      </Element>
    </div>
  );
}

export default ContainerElement;
