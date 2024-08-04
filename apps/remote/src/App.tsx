import React, { useEffect, useState, lazy, Suspense } from 'react';
import './App.css';
import * as styles from './App.module.css';
import './App.less';
import './App.scss';
import styled from 'styled-components';
import { ReactComponent as IconLogo } from './assets/svg/logo.svg';
import { ReactComponent as IconDog } from './assets/svg/dog.svg';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom';
// import DetailPage from '@pages/detail';
// import ListPage from '@pages/list';
const Button = lazy(async () => await import('@components/button'));
const ListPage = lazy(() => import('@pages/list'));
const DetailPage = lazy(() => import('@pages/detail'));


const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const App: React.FC = () => {
  // const [Button,setButton] = useState<any>();

  // useEffect(() => {
  //   import('@components/button').then((res) => {
  //     setButton(res);
  //   })
  // },[])



  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListPage />
    },
    {
      path: "/detail",
      element: <DetailPage />,
    }
  ])
  return (
    <div className="App">
      <Suspense fallback={<div>loading</div>}>
        <RouterProvider router={router} />
        <header className="App-header">
          <Button text='异步加载的按钮' />
          {/* <h1 className={styles.title}>Welcome to React with TypeScript and Webpack</h1>
          <IconLogo />
          <p className="less-example">This is a LESS example</p>
          <p className="sass-example">This is a SASS example</p>
          <StyledButton>Styled Button</StyledButton>
          <div className='p-20 text-blod'>tailwind css example</div>
          {/* <img src={Coffe} style={{ width: 320 }} /> */}
          {/* <IconDog />  */}
        </header>
      </Suspense>

    </div>
  );
};

export default App;
