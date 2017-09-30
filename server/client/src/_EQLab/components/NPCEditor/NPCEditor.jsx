import React from 'react';
import { Row, Col, Panel, Tab, Nav, NavItem, } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm, FormSection, Field } from 'redux-form';
import api from '../../../api.js';
import {
  GLOBAL_LOAD_NPC,
  GLOBAL_UNLOAD_NPC
} from '../../../constants/actionTypes';
import Type from './Type.jsx';
// import Spells from './Spells.jsx';
// import Loot from './Loot.jsx';

const NPCEditorOptions = {
  form: 'NPCEditor',
  enableReinitialize: true
}

const mapStateToProps = state => ({
  initialValues: state.global.npc
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: GLOBAL_LOAD_NPC, payload }),
  onUnload: payload =>
    dispatch({ type: GLOBAL_UNLOAD_NPC }),
});

class NPCEditor extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.npcID !== this.props.npcID) {
      this.props.onLoad(api.npc.getNPCData(nextProps.npcID))
    }
  }

  componentDidMount() {
    this.props.onLoad(api.npc.getNPCData(this.props.npcID))
  }

  componentDidUpdate() {
    console.log(this.props)
  }

  componentWillUnmount() {
    this.props.onUnload();
  }


  render() {

    const { handleSubmit } = this.props;

    const Header = props => (
      <h5>npc - {props.input.value}</h5>
    );

    return (
      <form id="NPCEditor" onSubmit={ handleSubmit }>
        <Panel header={<Field component={Header} name="id"/>}>
          <Row>
            <Col md={7}>
              <Row>
                <Col md={12}>
                  <FormSection name="type">
                    <Type/>
                  </FormSection>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Tab.Container id="npc-panel" defaultActiveKey="specialatk">
                    <Panel header={
                      <Nav bsStyle="tabs">
                        <NavItem eventKey="specialatk">Special Atk</NavItem>
                        <NavItem eventKey="faction">Faction</NavItem>
                        <NavItem eventKey="emote">Emote</NavItem>
                      </Nav> 
                    }>
                      <Tab.Content animation={false} mountOnEnter={false} unmountOnExit={false}>
                        <Tab.Pane eventKey="specialatk">
                          SPECIAL ATTACKS
                        </Tab.Pane>
                        <Tab.Pane eventKey="faction">
                          FACTION
                        </Tab.Pane>
                        <Tab.Pane eventKey="emote">
                          EMOTE
                        </Tab.Pane>
                      </Tab.Content>
                    </Panel>
                  </Tab.Container> 
                </Col>
              </Row>
            </Col>
            <Col md={5}>
              <Row>
                <Col md={12}>
                  <h4>SPELLS</h4>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <h4>EFFECTS</h4>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <h4>MERCHANT</h4>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <h4>LOOT</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Panel>
      </form>
    );
  }
}

NPCEditor = reduxForm(NPCEditorOptions)(NPCEditor)

NPCEditor = connect(mapStateToProps, mapDispatchToProps)(NPCEditor)

export default NPCEditor;