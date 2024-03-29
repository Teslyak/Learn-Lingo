import {
  BlockDiscriptions,
  Button,
  Discrp,
  DiscrpStat,
  Experienced,
  HeroImg,
  Number,
  Span,
  SpanLang,
  SpanTheBest,
  StatisticList,
  Title,
  Wrap,
  WrapContainer,
} from './Home.styled';
import heroImg from '../../assets/img/heroImg.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <WrapContainer>
        <Wrap>
          <BlockDiscriptions>
            <Title>
              <Span>Unlock your potential with</Span>
              {'  '}
              <SpanTheBest>the best</SpanTheBest> <SpanLang>language</SpanLang>{' '}
              <SpanTheBest>tutors</SpanTheBest>
            </Title>
            <Discrp>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </Discrp>
            <Link to="teachers">
              <Button type="button">Get started</Button>
            </Link>
          </BlockDiscriptions>

          <HeroImg src={heroImg} alt="sticker" />
        </Wrap>

        <StatisticList>
          <Experienced>
            <Number>3,200 +</Number>
            <DiscrpStat>Experienced tutors</DiscrpStat>
          </Experienced>
          <Experienced>
            <Number>300,000 +</Number>
            <DiscrpStat>5-star tutor reviews</DiscrpStat>
          </Experienced>
          <Experienced>
            <Number>120 +</Number>
            <DiscrpStat width="74px">Subjects taught</DiscrpStat>
          </Experienced>
          <Experienced>
            <Number>200 +</Number>
            <DiscrpStat>Tutor nationalities</DiscrpStat>
          </Experienced>
        </StatisticList>
      </WrapContainer>
    </>
  );
}
