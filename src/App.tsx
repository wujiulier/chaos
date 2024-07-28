import React from 'react';
import './App.css';
import * as styles from './App.module.css';
import './App.less';
import './App.scss';
import styled from 'styled-components';
import { ReactComponent as Logo } from './logo.svg';

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
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={styles.title}>Welcome to React with TypeScript and Webpack</h1>
        <Logo />
        <p className="less-example">This is a LESS example</p>
        <p className="sass-example">This is a SASS example</p>
        <StyledButton>Styled Button</StyledButton>
        <div className='p-20 text-blod'>tailwind css example</div>
      </header>
    </div>
  );
};

export default App;
