import React, {Component} from 'react';
import './projects.css';
import {Card, List, Modal, Icon} from 'antd';

const {Meta} = Card;

const API = 'https://api.github.com/users/mrkai1253/repos';

export default class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      repos_data: [],
      loading: true,
      visible: false,
      clicked_id: 0,
      clicked: false
    };
  }

  handleClick = (data, id) => {
    console.log(id);
    this.showModal(data, id);
    console.log(this.state.repos_data[id].name);

  }

  showModal = (data, id) => {
    this.setState({visible: true, clicked_id: id, clicked: true});
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({visible: false});
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({visible: false});
  }

  componentDidMount() {

    fetch(API).then(res => {
      return res.json();
    }).then((res_json) => {

      let repos = res_json.map((data, id) => {
        return <Card
          style={{
          width: 200,
          padding: '10px',
          margin: 'auto'
        }}
          className='card'>
          <Meta
            style
            ={{
            fontFamily: 'Space Mono'
          }}
            onClick={() => this.handleClick(data.svn_url, id)}
            title={data.name}
            description={data.description}/>
        </Card>
      });
      setInterval(() =>(this.setState({repos: repos, loading: false, repos_data: res_json})),1000);
      

    });

  }

  render() {

    let modal = <div></div>;
    if (this.state.clicked) {
      modal = <Modal
        title={this.state.repos_data[this.state.clicked_id].name}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        style={{
       
        textAlign: 'center',
        color : '#ccccc'
      }}
        okButtonProps={{
        disabled: false
      }}
        cancelButtonProps={{
        disabled: false
      }}>

        <p>{this.state.repos_data[this.state.clicked_id].description}</p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={this.state.repos_data[this.state.clicked_id].svn_url}>
                  <Icon
                  type="github"
                  style={{
                fontSize: 16,
                color: '#08c'
                }}/>
        </a>

      </Modal>
    }

    return (
      <div className='cont'>
        <h1 className='title'>Projects</h1>
        
        <List
          loading={this.state.loading}
          style={{
        
        }}
          grid={{
          gutter: 3,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 5,
          xxl: 3
        }}
          dataSource={this.state.repos}
          renderItem={(item, id) => {
          return (
            <List.Item >
              {item}
            </List.Item>
          );
        }}/> {modal}

      </div>
    )
  }
}
