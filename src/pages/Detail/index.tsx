import React, { useCallback, useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { IUser } from '../Home'
import api from '../../services/api'

import Container from './styles'

interface IRepository {
  name: string
  description: string
  html_url: string
}

const Detail: React.FC = (props) => {
  const [status, setStatus] = useState(false)
  const [repositories, setRepositories] = useState<[IRepository]>()

  const user = useLocation().state as IUser

  useEffect(() => {
    console.log(user)
  }, [user])
  const history = useHistory()

  const handleGetRepositories = useCallback(async () => {
    if (repositories?.length) return

    const response = await api.get<[IRepository]>(`${user.login}/repos`)

    setRepositories(response.data)
  }, [repositories, user.login])

  const navigateToHome = useCallback(() => {
    history.goBack()
  }, [history])

  return (
    <Container>
      <button className="goback-btn" type="button" onClick={navigateToHome}>
        Voltar
      </button>

      <article>
        <img src={user.avatar_url} alt={user.name} />

        <div className="about">
          <span>{user.name}</span>
          <span>{user.bio}</span>
          <span>{user.location}</span>

          {user.company && (
            <a
              className="company-github-btn"
              href={`https://github.com/${user.company.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.company}
            </a>
          )}
          <a
            className="twitter-btn"
            href={`https://twitter.com/${user.twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.twitter_username}
          </a>
          <a
            className="github-btn"
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Github
          </a>
        </div>

        <div className="repositories">
          <button
            type="button"
            onClick={() => {
              handleGetRepositories()
              setStatus(!status)
            }}
            data-show={status}
          >
            Repositório
            <i id="arrow-icon" className="material-icons">
              &#xe313;
            </i>
          </button>

          <ul className="list">
            {repositories?.map((repository) => (
              <li key={repository.name}>
                <span>{repository.name}</span>
                <span>{repository.description}</span>

                <a
                  href={repository.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Container>
  )
}

export default Detail
