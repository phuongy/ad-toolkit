import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="viewWrapper">
        <header className="viewHeader">
          <h1>Page Title</h1>
        </header>
        <main className="viewMain">
          <div className="">
            <h3>Your toolkit</h3>
            <p>
              <input type="text" placeholder="Enter text here..." />
            </p>
            <p>
              <button>Test Button</button>
            </p>
            <table>
              <thead>
                <tr>
                  <th>heading 1</th>
                  <th>heading 2</th>
                  <th>heading 3</th>
                  <th>heading 4</th>
                  <th>heading 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cell 1</td>
                  <td>cell 2</td>
                  <td>cell 3</td>
                  <td>cell 4</td>
                  <td>cell 5</td>
                </tr>
                <tr>
                  <td>cell 1</td>
                  <td>cell 2</td>
                  <td>cell 3</td>
                  <td>cell 4</td>
                  <td>cell 5</td>
                </tr>
                <tr>
                  <td>cell 1</td>
                  <td>cell 2</td>
                  <td>cell 3</td>
                  <td>cell 4</td>
                  <td>cell 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        <footer className="viewFooter" />
      </div>
    );
  }
}

export default App;
