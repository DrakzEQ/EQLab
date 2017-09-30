import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Field } from 'redux-form';
import Input from '../form/Input.jsx';

class Type extends React.PureComponent {
  render() {
    return (
      <div id="Type">
        <Row>
          <Col md={2}>
            <Field component={Input} type="text" name="name" label="name"  
              bsSize="sm"/>
          </Col>
          <Col md={2}>
            <Field component={Input} type="text" name="lastname" label="lastname"  
              bsSize="sm"/>
          </Col>
          <Col md={1}>
            <Field component={Input} type="text" name="level" label="level"  
              bsSize="sm"/>
          </Col>
          <Col md={2}>
            <Field component={Input} type="text" name="class" label="class"  
              bsSize="sm"/>
          </Col>
          <Col md={1}>
            <Field component={Input} type="text" name="race" label="race"  
              bsSize="sm"/>
          </Col>
          <Col md={2}>
            <Field component={Input} type="text" name="gender" label="gender"  
              bsSize="sm"/>
          </Col>
          <Col md={2}>
            <Field component={Input} type="text" name="bodytype" label="bodytype"  
              bsSize="sm"/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <fieldset className="form-border">
            <legend className="form-border">Vitals</legend>
              <Row>
                <Col md={2}>
                <Field component={Input} type="text" name="hp" label="hp"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                <Field component={Input} type="text" name="mana" label="mana"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="AC" label="AC"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="ATK" label="ATK"  
                    bsSize="sm"/>
                </Col>
                <Col md={4}>
                </Col>
              </Row>
            </fieldset>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <fieldset className="form-border">
            <legend className="form-border">Stats</legend>
              <Row>
                <Col md={2}>
                  <Field component={Input} type="text" name="STR" label="STR"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="STA" label="STA"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="DEX" label="DEX"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="AGI" label="AGI"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="_INT" label="INT"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="WIS" label="WIS"  
                    bsSize="sm"/>
                </Col>
              </Row>
              <Row>
                <Col md={1}>
                  <Field component={Input} type="text" name="CHA" label="CHA"  
                    bsSize="sm"/>
                </Col>
              </Row>
            </fieldset>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <fieldset className="form-border">
            <legend className="form-border">Resists</legend>
              <Row>
                <Col md={1}>
                  <Field component={Input} type="text" name="MR" label="MR"  
                    bsSize="sm"/>
                </Col>
                <Col md={1}>
                  <Field component={Input} type="text" name="CR" label="CR"  
                    bsSize="sm"/>
                </Col>
                <Col md={1}>
                  <Field component={Input} type="text" name="FR" label="FR"  
                    bsSize="sm"/>
                </Col>
                <Col md={1}>
                  <Field component={Input} type="text" name="PR" label="PR"  
                    bsSize="sm"/>
                </Col>
                <Col md={1}>
                  <Field component={Input} type="text" name="DR" label="DR"  
                    bsSize="sm"/>
                </Col>
                <Col md={1}>
                  <Field component={Input} type="text" name="Corrup" label="Corrup"  
                    bsSize="sm"/>
                </Col>
                <Col md={1}>
                  <Field component={Input} type="text" name="PhR" label="PhR"  
                    bsSize="sm"/>
                </Col>
                <Col md={5}>
                </Col>
              </Row>
            </fieldset>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <fieldset className="form-border">
            <legend className="form-border">Combat</legend>
              <Row>
                <Col md={2}>
                  <Field component={Input} type="text" name="mindmg" label="mindmg"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="maxdmg" label="maxdmg"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="attack_count" label="attack_count"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="hp_regen_rate" label="hp_regen_rate"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="mana_regen_rate" label="mana_regen_rate"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="aggro" label="aggro"  
                    bsSize="sm"/>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <Field component={Input} type="text" name="attack_speed" label="attack_speed"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="attack_delay" label="attack_delay"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="assist" label="assist"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="spellscale" label="spellscale"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="healscale" label="healscale"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="scalerate" label="scalerate"  
                    bsSize="sm"/>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <Field component={Input} type="text" name="slow_mitigation" label="slow_mitigation"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="npc_aggro" label="npc_aggro"  
                    bsSize="sm"/>
                </Col>
                <Col md={2}>
                  <Field component={Input} type="text" name="special_abilities" label="special_abilities"  
                    bsSize="sm"/>
                </Col>
              </Row>
            </fieldset>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Type;