import { useState } from 'react';

import reactLogo from './assets/react.svg';
import expoLogo from '/expoio-icon.svg';
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
        <a href="https://expo.dev" target="_blank" rel="noreferrer">
          <img src={expoLogo} className="logo" alt="Expo logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Expo WebView + React.js</h1>
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
      </div>
    </>
  );
}

export default App;
