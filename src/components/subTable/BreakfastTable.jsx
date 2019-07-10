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
          <td>Sushi</td>
          <td>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default BreakfastTable;