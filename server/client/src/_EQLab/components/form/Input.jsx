import React from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

class Input extends React.PureComponent {
  render () {
    const {
      bsSize,
      feedbackIcon,
      input,
      label,
      type,
      meta: { error, warning, touched },
      ...props
    } = this.props;

    let message;
    const validationState = touched ? ( error && "error" ) || ( warning && "warning" ) : null;
   
    if ( touched && ( error || warning ) ) {
      message = <HelpBlock>{ error || warning }</HelpBlock>;
    }

    return (
      <FormGroup controlId={input.name} bsSize={ bsSize } validationState={ validationState }>
        <ControlLabel>{ label }</ControlLabel>
        <FormControl { ...input }
                      type={ type }
                      { ...props } />
        { feedbackIcon ? <FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> : null }
        { message }
      </FormGroup>
    );
  }
}

export default Input;