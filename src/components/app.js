import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from "./home";
import DayData from "./day-data";


import { Layout, Icon, Divider, Tag } from 'antd';
const { Header, Content, Footer } = Layout;


class App extends React.Component {

  render() {


    return(<Layout className="layout">

      <Header>      
        <div className="logo"> 
          <Icon type="compass" theme="outlined" /> Weather 
        </div>    
      </Header>
      <Content>
        <Router>
          <Switch>
            <Route exact path="/day/:name" component={DayData} />
            <Route exact path="/day" component={DayData} />
            <Route path="/" component={Home} data />
          </Switch>
        </Router>
      </Content>
      <Footer>
        Weather Data
      </Footer>

    </Layout>)
  }
}

export default App;