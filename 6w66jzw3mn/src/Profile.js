import { Component } from "preact"
import { Card } from "preact-mdl"

class Profile extends Component {
  shouldComponentUpdate({ id }) {
    return id !== this.props.id
  }

  render({ id }) {
    return (
      <div class="profile">
        <Card shadow="3" class="full-width">
          <Card.Title class="graphic">
            <Card.TitleText>User: {id}</Card.TitleText>
          </Card.Title>

          <Card.Text>
            <p>This is a profile for the user {id}.</p>
          </Card.Text>
        </Card>
      </div>
    )
  }
}

export default Profile
