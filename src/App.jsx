import React from 'react';
import DatePicker from 'antd/es/date-picker'; // for js
import Row from 'antd/es/row'
import 'antd/es/date-picker/style/css';
import 'antd/es/row/style/css';
import Col from 'antd/es/col';
import 'antd/es/col/style/css';

class App extends React.PureComponent {

  renderForm(){
    return
  }

  render(){
  return (
    <Row><Col span={12}><DatePicker></DatePicker></Col><Col span={12}><DatePicker></DatePicker></Col></Row>
  );}
}

export default App;
