import React from 'react';
import styled from 'styled-components';

type Props = {};

const ColGroup = (props: Props) => {
  return (
    <>
      <h1>ColGroup</h1>
      <StyledTable>
        <colgroup>
          <Col1 span={2} />
          <Col2 span={3} />
        </colgroup>
        <tr>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
          <th>FRI</th>
          <th>SAT</th>
          <th>SUN</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
        </tr>
        <tr>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
        </tr>
        <tr>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
        </tr>
      </StyledTable>
    </>
  );
};

const Col1 = styled.col`
  background-color: pink;
`;

const Col2 = styled.col`
  background-color: #d6eeee;
`;

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

export default ColGroup;
