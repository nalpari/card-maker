import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const history = useHistory();
  const [cards, setCards] = useState([
    {
      id: 0,
      name: 'nalpari',
      company: '3top',
      theme: 'light',
      title: 'DevOps Developer',
      email: 'yoo32767@gmail.com',
      message: 'go for it',
      fileName: 'nalpari',
      fileURL: 'nalpari.png'
    },
    {
      id: 1,
      name: 'smith',
      company: '3top',
      theme: 'dark',
      title: 'software engineer',
      email: 'smith@gmail.com',
      message: 'hard work',
      fileName: 'smith',
      fileURL: 'smith.png'
    },
    {
      id: 2,
      name: 'park',
      company: '3top',
      theme: 'light',
      title: 'software Developer',
      email: 'park@gmail.com',
      message: 'lotte highmart',
      fileName: 'park',
      fileURL: 'park.png'
    },
  ]);
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user) {
        history.push('/');
      }
    })
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;