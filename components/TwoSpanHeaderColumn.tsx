import React from 'react';
import styled from 'styled-components';

type Props = {};

const TwoSpanHeaderColumn = (props: Props) => {
  return (
    <>
      <h2>A header that spans two columns</h2>

      <p>
        Use the colspan attribute to have a header span over multiple columns.
      </p>

      <StyledTable>
        <tr>
          <th colSpan={2}>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </StyledTable>
    </>
  );
};

const StyledTable = styled.table`
  tr,
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    font-size: 1.2rem;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
  }

  width: 50%;
`;

const ColSpanHeader = styled.th``;

export default TwoSpanHeaderColumn;
