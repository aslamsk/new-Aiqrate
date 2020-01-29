import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PostText from '../components/postText';
import PostTags from '../components/postTags';
import { useIsMobile } from '../components/utils';
import '../components/postCard/style.scss';
import PostCard from '../components/postCard';
// import './about.scss';

const Hello = () => {
  return (
    <Layout>
      <h1>Testing</h1>
    </Layout>
  );
};
export default Hello;
