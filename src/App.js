import logo from './logo.svg';
import './App.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const handleClick1 = () => {
  Sentry.init({
    environment: process.env.NODE_ENV,
    release: "test-sentry@" + process.env.REACT_APP_VERSION,
    debug: true,
    dsn: "https://4f42ad25553a4472bc6f64a8ed2c432c@sentry.nervos.org/17",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
 
  });
  Sentry.captureException(new Error("test-sentry from test project --- to nervos.sentry"));
}
const handleClick2 = () => {
  Sentry.init({
    environment: process.env.NODE_ENV,
    release: "test-sentry@" + process.env.REACT_APP_VERSION,
    debug: true,
    dsn: "https://cee76b0263164a9b89c918b194cedbf8@o1235895.ingest.sentry.io/6385985",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
 
  });
  Sentry.captureException(new Error("test-sentry from test project --- to sentry.io"));
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick1}> report to nervos.sentry</button>
        <button onClick={handleClick2}> report to sentry.io</button>
      </header>
    </div>
  );
}

export default App;
