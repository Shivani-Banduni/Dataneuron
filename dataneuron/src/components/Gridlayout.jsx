import React from 'react'
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import '../App.css'
export default function Gridlayout() {

     // Define the layout structure
  const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, static: false},
    {i: 'c', x: 4, y: 0, w: 1, h: 2, static: false}
  ];
    return (
        <div>
              <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      <div key="a" className="grid-item1">Component 1 <b> Grid Layout -
The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

</b></div>
      <div key="b" className="grid-item2">Component 2  <b>Grid Elements - 
A grid layout consists of a parent element, with one or more child elements.</b></div>
      <div key="c" className="grid-item3">Component 3 <b>Display Property
An HTML element becomes a grid container when its display property is set to grid or inline-grid.</b></div>
    </GridLayout>
        </div>
    )
}
