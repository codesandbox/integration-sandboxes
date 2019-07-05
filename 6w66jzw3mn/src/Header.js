import { h } from "preact"
import { Layout, Navigation, Card, Button, Icon, TextField } from "preact-mdl"

const Header = ({ onSearch }) => (
  <Layout.Header>
    <Layout.HeaderRow>
      <Layout.Title>
        <a href="/">Example</a>
      </Layout.Title>
      <Layout.Spacer />
      <TextField
        placeholder="Search"
        type="search"
        onSearch={onSearch}
        style="background-color:#FFF; color:#000; padding:10px;"
      />
    </Layout.HeaderRow>
  </Layout.Header>
)

export default Header
