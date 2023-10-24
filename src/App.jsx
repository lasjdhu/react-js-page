import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function sendPushNotificationFromWebPage() {
    window.ReactNativeWebView.postMessage(JSON.stringify({ action: 'sendPushNotification'}));
  }

  function saveDataToSecureStorage() {
    window.ReactNativeWebView.postMessage(JSON.stringify({ action: 'saveData', data: count }));
  }

  function retrieveDataFromSecureStorage() {
    window.ReactNativeWebView.postMessage(JSON.stringify({ action: 'retrieveData' }));
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Current count is {count}
        </button>
        {typeof window?.ReactNativeWebView !== 'undefined' && (
          <>
            <button onClick={saveDataToSecureStorage}>
              Save count
            </button>
            <button onClick={retrieveDataFromSecureStorage}>
              Get count
            </button>
            <button onClick={sendPushNotificationFromWebPage}>
              Send Push Notification
            </button>
          </>
        )}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
