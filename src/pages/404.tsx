import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Button from '../components/Button';

const NotFoundPage = () => (
  <Layout
    title="앗! 없어진 페이지를 찾으셨네요."
    description={
      <>
        잘못된 경로거나, 사라진 글일지도 몰라요.
        <br />
        다시 한번 주소를 확인해 주세요.
      </>
    }
  >
    <SEO title="404: Not found" />
    <Link to="/">
      <Button>홈으로 돌아가기</Button>
    </Link>
  </Layout>
);

export default NotFoundPage;
