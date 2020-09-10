import React, { useCallback, FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Container from './styles'

export interface IUser {
  avatar_url: string
  login: string
  name: string
  bio: string
  location: string
  company: string
  twitter_username: string
}

const Home: React.FC = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState<IUser>()

  const history = useHistory()

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      const response = await api.get<IUser>(`${username}`)
      if (response.status !== 404) setUser(response.data)
    },
    [username],
  )

  const navigateToDetail = useCallback(() => {
    history.push(`/${user?.login}`, user)
  }, [history, user])

  return (
    <Container>
      <header>
        <h1>Conheça novos desenvolvedores</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Digite o nome de usuário"
            required
          />

          <button type="submit">Pesquisar</button>
        </form>
      </header>

      <main>
        {user?.login && (
          <article>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>{user.name}</span>
              <span>{user.bio}</span>

              <button type="button" onClick={navigateToDetail}>
                Conhecer
              </button>
            </div>
          </article>
        )}
      </main>
    </Container>
  )
}

export default Home
