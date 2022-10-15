import React from 'react';
import { Helmet as OriginalHelmet } from 'react-helmet';

const Helmet = ({ title, content }) => {
  return (
    <OriginalHelmet>
      <title>{title}</title>
      <meta name='description' content={content} />
    </OriginalHelmet>
  );
};

export default Helmet;
