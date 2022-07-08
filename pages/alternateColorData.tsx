import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

type Props = {};

const alternateColorData = (props: Props) => {
  return (
    <>
      <Wrapper>
        <StyledTable>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
        </StyledTable>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 64px auto;
`;

const StyledTable = styled.table`
  tr,
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: lightgray;
    font-size: 1.2rem;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }

  width: 50%;
`;

export default alternateColorData;
