import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BreakfastTable = props => {
  return (
    <MDBTable responsive>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Waffles</td>
          <td>Buttermilk waffles, bacon or sasage, eggs and coffee</td>
          <td>$9.99</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Pancakes</td>
          <td>Buttermilk Pancakes, bacon or sasage with eggs and coffee</td>
          <td>$9.99</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Eggs Benedict</td>
          <td>English muffin, poached eggs, sausage under hollandaise sauce</td>
          <td>12.99</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Ostentatious Breakfast</td>
          <td>French bread, sausages, bacon, and tomatos, and a giant ostrich egg</td>
          <td>$30.99</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default BreakfastTable;