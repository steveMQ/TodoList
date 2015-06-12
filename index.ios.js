/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var AddTask = require('./AddTask');
var TaskList = require('./TaskList');


var {
  AppRegistry,
  TabBarIOS,
  Component

} = React;

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tasklist'
    };
  }

  render() {

    return(

      <TabBarIOS selectedTab={this.state.selectedTab}>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tasklist'}
          title = 'Task List'
          onPress= { () => {
            this.setState({
              selectedTab: 'tasklist'
            });
          }}>

            <TaskList/>

        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'addtask'}
          title="Add Task"
          onPress= { () => {
            this.setState({
              selectedTab: 'addtask'
            });
          }}>

          <AddTask/>

        </TabBarIOS.Item>

      </TabBarIOS>

    );

  }

}



AppRegistry.registerComponent('TodoList', () => TodoList);
