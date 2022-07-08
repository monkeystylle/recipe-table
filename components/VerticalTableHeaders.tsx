import React from 'react';
import styled from 'styled-components';

type Props = {};

const VerticalTableHeaders = (props: Props) => {
  return (
    <StyledTable>
      <tr>
        <th>Firstname</th>
        <td>Jill</td>
        <td>Eve</td>
      </tr>
      <tr>
        <th>Lastname</th>
        <td>Smith</td>
        <td>Jackson</td>
      </tr>
      <tr>
        <th>Age</th>
        <td>50</td>
        <td>94</td>
      </tr>
    </StyledTable>
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

export default VerticalTableHeaders;
