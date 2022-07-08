import styled from 'styled-components';
import type { NextPage } from 'next';
import VerticalTableHeaders from '../components/VerticalTableHeaders';
import Spacer from '../components/Spacer';
import AlternateColorData from '../components/AlternateColorData';
import TwoSpanHeaderColumn from '../components/TwoSpanHeaderColumn';
import ColGroup from '../components/ColGroup';
import RowSpan from '../components/RowSpan';

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <AlternateColorData />
        <Spacer size={80} />
        <h1>Vertical table headers</h1>
        <VerticalTableHeaders />
        <Spacer size={80} />
        <TwoSpanHeaderColumn />
        <Spacer size={80} />
        <RowSpan />

        <Spacer size={80} />
        <ColGroup />
        <Spacer size={80} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 64px auto;
`;

export default Home;
