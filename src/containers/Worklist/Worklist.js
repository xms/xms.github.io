import React from 'react';

import PageHeader from 'components/PageHeader';
import fakeImage from 'images/fakeimage.png';
import Work from './components/Work';

const fakedata = Array.from({ length: 10 });
function Worklist() {
  return (
    <>
      <PageHeader title="作品列表" />
      {fakedata.map((d, index) => (
        <Work title={`作品${index + 1}`} image={fakeImage}>
          <h5>這是介紹</h5>
          <p>敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述</p>
          <h5>這是介紹</h5>
          <p>敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述</p>
          <h5>這是介紹</h5>
          <p>敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述</p>
        </Work>))}
    </>
  );
}

export default Worklist;
