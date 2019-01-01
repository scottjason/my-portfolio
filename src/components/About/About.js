import React, { Fragment } from 'react';
import { Container, Highlight, Heading, Line, Text } from './About.style';

const About = props => {
  const { data } = props;
  console.log('****** ABOUT *******')
  const hasHighLightedText = line => line.highlightByIdx.length;
  const isNotHeading = line => !line.isHeading;
  const generateHeading = () => {
    let heading = data.filter(line => line.isHeading)[0];
    return generateComponent(heading);
  };
  const generateComponent = (line, idx) => {
    let output = [];
    const { isHeading } = line;
    if (hasHighLightedText(line)) {
      let { text, highlightByIdx } = line;
      for (let i = 0; i < highlightByIdx.length; i++) {
        let indices = highlightByIdx[i];
        let startIdx = indices[0];
        let endIdx = indices[1];
        let textPre = text.substring(0, startIdx - 1);
        let textHighlight = ' ' + text.substring(startIdx, endIdx) + ' ';
        let textPost = text.substring(endIdx + 1, text.length);
        let href = line.links[0];
        if (isHeading) {
          output.push(
            <Fragment key={idx}>
              <Heading >
                {textPre}
                  <Highlight
                    href={href}
                    target={'_blank'}
                  > {textHighlight} </Highlight>
                {textPost}
              </Heading>
            </Fragment>
          )
        } else {
          output.push(
            <Fragment key={idx}>
              <Text
                pushDown={idx === 4}
                paddingBottom={idx === 5}
              >
                {textPre}
                  <Highlight
                    href={href}
                    target={'_blank'}
                  >
                    {textHighlight} 
                  </Highlight>
                {textPost}
              </Text>
              {(idx === 1 || idx === 4) && <Line />}
            </Fragment>
          )
        }
      }
    } else if (isHeading) {
      output.push(
        <Heading>
          {line.text}
        </Heading>
      )
    } else {
      output.push(
        <Fragment key={idx}>
          <Text pushDown={idx === 3 || idx === 4}>
            {line.text}
          </Text>
        </Fragment>
      )
    } 
    return output[0];
  };
  return(
    <Container>
      {generateHeading()}
      {data.filter(isNotHeading).map((line, idx) => {
        return generateComponent(line, idx)
      })}
    </Container>
  )
}

export default About;
