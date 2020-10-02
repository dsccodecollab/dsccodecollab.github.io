// just for reference
import React from 'react'
import Exampletype from '../types/ExampleType'
import '../styles/Component1.css'

type ComponentProps = {
arg: Exampletype;
};
const Component1 = ({ arg }: ComponentProps) => {
  return (
    <>
      <h1>this is Component1</h1>
      <p>{arg.id}</p>
      <p>{arg.name}</p>
      {arg.obj.map((val) => (
        <>
          <h1>{val.num}</h1>
          <ul>
            {val.somethings.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </>
      ))}
    </>
  )
}

export default Component1
