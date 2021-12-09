import React from 'react';
import Settings from './components/SettingsPage'
import '../css/settings.css'

function App() {
  return (
    <div className="App">
      <Settings/>
      <script defer src="https://connect.podium.com/widget.js#API_TOKEN=66d440e6-5d37-48af-93bc-1b4acacea8cc" id="podium-widget" data-api-token="66d440e6-5d37-48af-93bc-1b4acacea8cc"></script>
    </div>
  );
}

export default App;
