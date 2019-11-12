// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSVReader from 'react-csv-reader';
import styled from 'styled-components'

import routes from '../constants/routes';
import styles from './Home.css';
import { parseConfigFileTextToJson } from 'typescript';

const ButtonUpload = styled.button`
  margin-top: 20px;
  background-color: #008cba;
  font-size: 16px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: #ffff; /* Green */
    color: #565656;
  }
`;

type Props = {};
type State = {
  isFileLoaded: boolean
}

export default class Home extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      isFileLoaded: false
    };
  }

  loadFile(data: any) {
    debugger
    this.setState({isFileLoaded: true}, () => {
      debugger
    })
  }

  render() {
    return <div className={styles.container} data-tid="container">
        <div />
        <h2>Scroll list</h2>
        <br />
        <br />
        <CSVReader onFileLoaded={data => this.loadFile(data)} />
        <ButtonUpload className="btn-upload">Play</ButtonUpload>
      </div>;
  }
}
