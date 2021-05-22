
import { Title, Form, Repositories, InputError } from './styles'
import { FiChevronRight } from 'react-icons/fi'
import LogoImg from '../../assets/log.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface IRepositoryProps {
  full_name: string,
  owner: {
    avatar_url: string,
    login: string
  },
  description: string,
  html_url: string
}


export const DashBoard: React.FC = () => {

  const [repoInputValue, setRepoInputValue] = useState('')
  const [error, setError] = useState('')
  const [repositories, setRepositories] = useState<IRepositoryProps[]>([])

  async function handleRepository(event: FormEvent) {
    event.preventDefault()

    if (!repoInputValue) {
      setError("Insira Nome Do Autor / Nome Do Repósitorio Desejado")
      return
    }

    try {
      const { data } = await api.get(`repos/${repoInputValue}`)
      setRepositories([...repositories, data])
      setRepoInputValue("")
      setError("")
    } catch (error) {
      setError("Pesquisa Retornou Sem Resultados")
    }

  }

  return (
    <>
      <img src={LogoImg} alt="img" />
      <Title>
        Explore Repósitorio do GitHub
      </Title>
      <Form hasError={!!error} onSubmit={handleRepository}>
        <input value={repoInputValue} type="text" placeholder="Digite o Nome Do Repósitorio" onChange={(e) => setRepoInputValue(e.target.value)} />
        <button>Pequisar</button>
      </Form>

      {error && <InputError>{error}</InputError>}

      <Repositories>
        {repositories.map(repository => {
          return (
            <a href={repository.html_url}>
              <img src={repository.owner.avatar_url} alt="User Profile Pic" />
              <div>
                <strong>{repository.owner.login}</strong>
                <p>{repository.description} </p>
              </div>
              <FiChevronRight size={20} />
            </a>
          )
        })}
      </Repositories>
    </>
  )
}
