import { h, render, Component } from "preact"
import { Router } from "preact-router"
import { Layout, Navigation, Card, Button, Icon, TextField } from "preact-mdl"
import "./style/index.scss"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Home from "./Home"
import Profile from "./Profile"

class App extends Component {
  handleFab = () => {
    alert("You clicked New!")
  }

  render() {
    return (
      <div id="app">
        <Layout fixed-header fixed-drawer>
          <Header />
          <Sidebar />

          <Button id="fab" fab colored onClick={this.handleFab}>
            <Icon icon="create" />
          </Button>

          <Layout.Content>
            <Router>
              <Home path="/" default />
              <Profile path="/profile" id="me" />
              <Profile path="/profile/:id" />
            </Router>
          </Layout.Content>
        </Layout>
      </div>
    )
  }
}

render(<App />, document.body)
