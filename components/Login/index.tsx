import React from 'react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <article>
        <head>
          <h2>Log in</h2>
        </head>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="username">
              Username
              <input type="username" name="username" id="username" />
            </label>
          </section>
          <section>
            <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" />
              </label>
            </section>
          <section>
            <label htmlFor="password">
              Password
              <input type="password" name="password" id="password" />
            </label>
          </section>
          <section>
            <button type="submit">
              Continiue
            </button>
          </section>
        </form>
        <section>
          <p>Forgot password</p>
        </section>
      </article>
    </main>
  );
};

export default Login
