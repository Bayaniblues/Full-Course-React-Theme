import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const DrinkTable = props => {
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
          <td>Beer</td>
          <td>On tap</td>
          <td>5.99</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Whisky</td>
          <td>Barrel Aged</td>
          <td>10.99</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Martini</td>
          <td>Shaken not stirred</td>
          <td>10.99</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default DrinkTable;