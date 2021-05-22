
import { Switch, Route } from 'react-router-dom'

import { DashBoard } from '../pages/Dashboard'
import { Repositories } from '../pages/Repositories'

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DashBoard} />
    <Route path="/repositories" component={Repositories} />
  </Switch>
)
