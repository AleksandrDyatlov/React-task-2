import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../layout';
import Home from '../pages/Home';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import Post from '../pages/Post';

function PublicRoute() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/character/:id" element={<Post />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default PublicRoute;
