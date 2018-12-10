import React, { Component } from 'react';
import './App.css';
import 'antd/lib/date-picker/style/css';
const TestComponent = React.lazy(() => import('./Test/PageOne.js'));

class App extends Component {

  render() {

    return (
      <div className="App">
          <React.Suspense fallback={<div>Loading...</div>}>
            <TestComponent />
          </React.Suspense>
      </div>
    );
  }
}

export default App;
