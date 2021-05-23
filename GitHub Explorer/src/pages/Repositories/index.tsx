import { useRouteMatch, Link } from 'react-router-dom'
import { Header, RepositoryInfos, IssuesList } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import LogoImg from '../../assets/log.svg'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

interface IRepository {
  repository: string
}

interface IRepositoryProps {
  full_name: string,
  forks_count: number,
  stargazers_count: number,
  open_issues_count: number,
  owner: {
    avatar_url: string,
    login: string
  },
  description: string,
  html_url: string
}

interface IIssueProps {
  id: number,
  html_url: string,
  title: string,
  user: {
    login: string
  }
}

export const Repositories: React.FC = () => {
  const { params } = useRouteMatch<IRepository>()
  const [repository, setRepository] = useState<IRepositoryProps | null>(null)
  const [issues, setIssues] = useState<IIssueProps[]>([])

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => setRepository(response.data))
    api.get(`repos/${params.repository}/issues`).then(response => setIssues(response.data))
  }, [params.repository])
  console.log(repository)
  console.log(issues)
  return (
    <>
      <Header>
        <img src={LogoImg} alt="Logo Img" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfos>
          <header>
            <img src={repository.owner.avatar_url} alt="User Pic" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>Stars</strong>
              <span>{repository.stargazers_count}</span>
            </li>
            <li>
              <strong>Forks</strong>
              <span>{repository.forks_count}</span>
            </li>
            <li>
              <strong>Issues Abertas</strong>
              <span>{repository.open_issues_count}</span>
            </li>
          </ul>
        </RepositoryInfos>
      )}
      <IssuesList>
        {issues.map(issue => (

          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.user.login}</strong>
              <p>{issue.title}</p>
            </div>
            <FiChevronRight size={20} />
          </a>

        ))}
      </IssuesList>

    </>
  )
}
