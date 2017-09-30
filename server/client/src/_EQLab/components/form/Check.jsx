import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { Field } from 'redux-form';

class Check extends React.PureComponent {
  render() {
    const {
      bsSize,
      feedbackIcon,
      input,
      label,
      type,
      meta: { error, warning, touched },
      ...props
    } = this.props;

    const validationState = touched ? ( error && "error" ) || ( warning && "warning" ) : null;

    return (
      <FormGroup bsSize={ bsSize } validationState={ validationState }>
        <label htmlFor="employed">{ label }</label>
        <Field
          name="employed"
          id="employed"
          component="input"
          type="checkbox" />
      </FormGroup>
    )
  }
}

// class Check extends React.PureComponent {
//   render () {
//     const {
//       bsSize,
//       feedbackIcon,

//       label,
//       type,
//       meta: { error, warning, touched },
//       ...props
//     } = this.props;

//     let message;
//     const validationState = touched ? ( error && "error" ) || ( warning && "warning" ) : null;
   
//     if ( touched && ( error || warning ) ) {
//       message = <HelpBlock>{ error || warning }</HelpBlock>;
//     }

//     return (
//       <FormGroup bsSize={ bsSize } validationState={ validationState }>
//         <Checkbox { ...props } 
//           {}
//         >
//           { label }
//         </Checkbox>
//         {/* { feedbackIcon ? <FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> : null }
//         { message } */}
//       </FormGroup>
//     );
//   }
// }

// export default Check;

// import React, {Component, PropTypes} from 'react';
// import Checkbox from 'material-ui/Checkbox';

// class CheckboxInput extends Component {

//     onCheck (e, checked) {
//         this.props.input.onChange(checked);
//     }

//     render() {
//         return <Checkbox
//             {...this.props.input}
//             checked={this.props.input.checked}
//             onCheck={this.onCheck.bind(this)}
//         />;
//     }
// }

// export default CheckboxInput;