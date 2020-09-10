import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  button.goback-btn {
    width: 100%;
    max-width: 15rem;
    height: 4rem;
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

  button.goback-btn:hover {
    background: #fff;
    color: #ce1483;
  }

  article {
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 0.5rem 0 rgba(206, 20, 131, 0.4);
    border-radius: 0.5rem;
    margin-top: 3rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }

  article img {
    max-width: 20rem;
    height: 20rem;
    border-radius: 20rem;
    margin: 0 auto;
  }

  article .about {
    width: 100%;
    padding: 2rem 0 0 0;
    display: flex;
    flex-direction: column;
  }

  article .about > * + * {
    width: 100%;
    margin-top: 2rem;
  }

  article .about > * {
    text-align: center;
  }

  article .about a.twitter-btn,
  article .about a.company-github-btn {
    color: #ce1483;
  }

  article .about a.github-btn {
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    border: 0.2rem solid #ce1483;
    background: #ce1483;
    color: #fff;
    font-weight: 700;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: background 400ms, color 400ms;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  article .about a.github-btn:hover {
    background: #fff;
    color: #ce1483;
  }

  article .repositories {
    width: 100%;
    margin-top: 2rem;
  }

  article .repositories button {
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
    justify-content: space-between;
  }

  article .repositories button:hover {
    background: #fff;
    color: #ce1483;
  }

  article .repositories button i {
    font-size: 3.5rem;
    transition: transform 400ms;
  }

  article .repositories button[data-show-repositories='true'] i {
    transform: rotate(-180deg);
  }

  article .repositories ul {
    width: 100%;
    height: 0;
    list-style: none;
    overflow-y: auto;
    transition: height 400ms;
  }

  article .repositories button[data-show-repositories='true'] ~ ul {
    height: 50rem;
  }

  article .repositories ul li {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  article .repositories ul li:nth-child(2n + 2) {
    background: rgba(230, 232, 239, 0.4);
  }

  article .repositories ul li a {
    color: #ce1483;
  }

  @media (min-width: 400px) {
    article img {
      margin: 0;
      width: 25rem;
    }

    article .about > * {
      text-align: left;
    }
  }
`

export default Container
