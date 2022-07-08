import React from 'react';
import styled from 'styled-components';

type Props = {};

const RowSpan = (props: Props) => {
  return (
    <>
      <h1>RowSpan</h1>
      <StyledTable>
        <tr>
          <th>Name</th>
          <td>Jill</td>
        </tr>
        <tr>
          <th rowspan="2">Phone</th>
          <td>555-1234</td>
        </tr>
        <tr>
          <td>555-8745</td>
        </tr>
        <tr>
          <th rowspan="2">Adress</th>
          <td>123 kanto street</td>
        </tr>
        <tr>
          <td>bugbugan corner</td>
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

export default RowSpan;
