import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Container from './styles'

const Detail: React.FC = () => {
  const [status, setStatus] = useState(false)
  const history = useHistory()

  const navigateToHome = useCallback(() => {
    history.goBack()
  }, [history])

  return (
    <Container>
      <button className="goback-btn" type="button" onClick={navigateToHome}>
        Voltar
      </button>

      <article>
        <img
          src="https://avatars3.githubusercontent.com/u/36802445?s=460&u=9af2af554d1947d09b9bf2e9cfb06d2f1ece22f7&v=4"
          alt=""
        />
        <div className="about">
          <span>Douglas Belarmino</span>
          <span>Desenvolvedor Web Fullstack ReactJS | Node.js"</span>
          <span>Passo Fundo - RS</span>
          <span>Empresa</span>
          <a
            className="twitter-btn"
            href="https://twitter.com/douglasbelarmi"
            target="_blank"
            rel="noopener noreferrer"
          >
            douglasbelarmi
          </a>
          <a
            className="github-btn"
            href="https://github.com/douglasbelarmino"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Github
          </a>
        </div>

        <div className="repositories">
          <button
            type="button"
            onClick={() => setStatus(!status)}
            data-show={status}
          >
            Repos
            <i id="arrow-icon" className="material-icons">
              &#xe313;
            </i>
          </button>
          <ul className="list">
            <li>
              <span>name</span>
              <span>description</span>
              <a href="./" target="_blank" rel="noopener noreferrer">
                html_url
              </a>
            </li>
            <li>
              <span>name</span>
              <span>description</span>
              <a href="./" target="_blank" rel="noopener noreferrer">
                html_url
              </a>
            </li>
            <li>
              <span>name</span>
              <span>description</span>
              <a href="./" target="_blank" rel="noopener noreferrer">
                html_url
              </a>
            </li>
            <li>
              <span>name</span>
              <span>description</span>
              <a href="./" target="_blank" rel="noopener noreferrer">
                html_url
              </a>
            </li>
            <li>
              <span>name</span>
              <span>description</span>
              <a href="./" target="_blank" rel="noopener noreferrer">
                html_url
              </a>
            </li>
            <li>
              <span>name</span>
              <span>description</span>
              <a href="./" target="_blank" rel="noopener noreferrer">
                html_url
              </a>
            </li>
            <li>
              <span>name</span>
              <span>description</span>
              <a href="./" target="_blank" rel="noopener noreferrer">
                html_url
              </a>
            </li>
            <li>
              <span>name</span>
              <span>description</span>
              <a href="./" target="_blank" rel="noopener noreferrer">
                html_url
              </a>
            </li>
            <li>
              <span>name</span>
              <span>description</span>
              <a href="./" target="_blank" rel="noopener noreferrer">
                html_url
              </a>
            </li>
          </ul>
        </div>
      </article>
    </Container>
  )
}

export default Detail
