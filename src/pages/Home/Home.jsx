import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Home
