import React, { useCallback, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import Container from './styles'

const Home: React.FC = () => {
  const history = useHistory()

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()
  }, [])

  const navigateToDetail = useCallback(() => {
    history.push('/douglasbelarmino')
  }, [history])

  return (
    <Container>
      <header>
        <h1>Conheça Devs</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Digite o nome de usuário" />
          <button type="submit">Pesquisar</button>
        </form>
      </header>

      <main>
        <article>
          <img
            src="https://avatars3.githubusercontent.com/u/36802445?s=460&u=9af2af554d1947d09b9bf2e9cfb06d2f1ece22f7&v=4"
            alt=""
          />
          <div>
            <span>Douglas Belarmino</span>
            <span>
              Desenvolvedor Web Fullstack ReactJS | Node.js Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repellendus quis nulla
              optio iste porro nihil maiores accusamus culpa distinctio in
              necessitatibus nemo debitis, accusantium nostrum delectus!
              Incidunt neque accusantium reprehenderit!
            </span>
            <button type="button" onClick={navigateToDetail}>
              Conhecer
            </button>
          </div>

          {/* <ul className="repos-list">
              <li>
                <span className="repo-name">Test 1</span>
                <span className="repo-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                  magni repellat vero ipsam dolore neque quam iusto quidem ut
                  reiciendis accusamus ipsum mollitia possimus enim, voluptas,
                  ratione quod! Est, tenetur.
                </span>
              </li>

              <li>
                <span className="repo-name">Test 1</span>
                <span className="repo-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                  magni repellat vero ipsam dolore neque quam iusto quidem ut
                  reiciendis accusamus ipsum mollitia possimus enim, voluptas,
                  ratione quod! Est, tenetur.
                </span>
              </li>
            </ul> */}
        </article>
      </main>
    </Container>
  )
}

export default Home
