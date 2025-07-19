import React from 'react';
import { Container } from 'react-bootstrap';

function Section({ className, style, children }) {
  return (
    <section className={className} style={style}>
      <Container >{children}</Container>
    </section>
  );
}

export default Section;
