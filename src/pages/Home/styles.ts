import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  header {
    width: 100%;
  }

  header h1 {
    margin: 3rem;
    text-align: center;
  }

  header form {
    width: 100%;
  }

  header form input {
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    border: 0.2rem solid #ce1483;
    font-size: 2rem;
    border-radius: 0.5rem;
    transition: background 400ms;
  }

  header form input:hover {
    background: rgba(230, 232, 239, 0.4);
  }

  header form button {
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    border: 0.2rem solid #ce1483;
    background: #ce1483;
    color: #fff;
    font-weight: 700;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: background 400ms, color 400ms;
  }

  header form button:hover {
    background: #fff;
    color: #ce1483;
  }

  main {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }

  main article {
    width: 100%;
    background: #fff;
    box-shadow: 0 0 0.5rem 0 rgba(206, 20, 131, 0.4);
    border-radius: 0.5rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
  }

  main article + article {
    margin-top: 1.5rem;
  }

  main article img {
    max-width: 20rem;
    height: 20rem;
    margin: 0 auto;
    border-radius: 20rem;
    transition: opacity 400ms;
  }

  main article img:hover {
    opacity: 0.9;
  }

  main article div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 2rem;
  }

  main article div > * + * {
    margin-top: 2rem;
  }

  main article div span {
    text-align: center;
  }

  main article div button {
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    border: 0.2rem solid #ce1483;
    background: #ce1483;
    color: #fff;
    font-weight: 700;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 400ms, color 400ms;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main article div button:hover {
    background: #fff;
    color: #ce1483;
  }

  @media (min-width: 400px) {
    main article img {
      margin: 0;
      width: 25rem;
    }

    main article div span {
      text-align: left;
    }
  }

  @media (min-width: 600px) {
    main article {
      flex-direction: row;
    }

    main article div {
      margin-top: 0;
      padding-left: 2rem;
    }

    main article div button {
      width: max-content;
    }
  }
`

export default Container
