import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import { Field } from 'redux-form'
// import Input from '../form/Input.jsx'


class NPCSpecialAbilities extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.input.value || ''
    }
  }
  render() {

    const specialAbilities = 
    this.state.value 
    ? this.state.value
      .match(/[^^]+(?=^)?/g)
      .map(match => match.split(','))
      .map(ability => {
        return {
          abilityID: ability[0],
          level: ability[1],
          params: ability.length > 2 ? ability.slice(2) : null
        }
      })
    : ''

    console.log(specialAbilities)

    return (
      <div id="NPCSpecialAbilities">
        
      </div>
    )
  }
}

export default NPCSpecialAbilities;