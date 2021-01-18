import React from 'react';
import Header from '../header/header';
import Footer from "../footer/footer";

const Login = () => {
  return (
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li><button>Google</button></li>
          <li><button>Github</button></li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
