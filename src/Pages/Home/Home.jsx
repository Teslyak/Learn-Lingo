import { Appel } from "../../assets/icons/Appel";
import { Union } from "../../assets/icons/Union";
import {
  BlockDiscriptions,
  BlockImages,
  Button,
  Discrp,
  Span,
  SpanLang,
  SpanTheBest,
  Sticker,
  Title,
  Wrap,
} from "./Home.styled";
import stickerImage from "../../assets/img/sticker.png";

export const Home = () => {
  return (
    <Wrap>
      <BlockDiscriptions>
        <Title>
          <Span>Unlock your potential with</Span>
          {"  "}
          <SpanTheBest>the best</SpanTheBest> <SpanLang>language</SpanLang>{" "}
          <SpanTheBest>tutors</SpanTheBest>
        </Title>
        <Discrp>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </Discrp>
        <Button type="button">Get started</Button>
      </BlockDiscriptions>
      <BlockImages>
        <Sticker src={stickerImage} alt="sticker" />
        <Union />
        <Appel />
      </BlockImages>
    </Wrap>
  );
};
