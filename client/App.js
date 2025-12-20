const React = require('react');
const { useEffect, useRef, useState } = React;
const { request, subscribe, gql } = require('./client');

let ReactNative = null;
if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // Only resolve react-native when running in a native environment.
  ReactNative = require('react-native');
}

const PING_QUERY = gql`
  query Ping {
    ping
  }
`;

const ECHO_MUTATION = gql`
  mutation Echo($message: String!) {
    echo(message: $message)
  }
`;

const TICK_SUBSCRIPTION = gql`
  subscription Tick {
    tick
  }
`;

const Container = ({ children }) =>
  ReactNative
    ? React.createElement(
        ReactNative.View,
        { style: { padding: 16, gap: 12 } },
        children,
      )
    : React.createElement(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            maxWidth: 360,
            margin: '0 auto',
            padding: 16,
            fontFamily: 'sans-serif',
          },
        },
        children,
      );

const Heading = ({ children }) =>
  ReactNative
    ? React.createElement(ReactNative.Text, { style: { fontSize: 20, fontWeight: '600' } }, children)
    : React.createElement('h2', null, children);

const Label = ({ children }) =>
  ReactNative
    ? React.createElement(ReactNative.Text, { style: { fontWeight: '500' } }, children)
    : React.createElement('label', { style: { fontWeight: 500 } }, children);

const InputField = ({ value, onChange }) =>
  ReactNative
    ? React.createElement(ReactNative.TextInput, {
        value,
        onChangeText: onChange,
        style: { padding: 10, borderColor: '#ccc', borderWidth: 1, borderRadius: 6 },
      })
    : React.createElement('input', {
        value,
        onChange: (event) => onChange(event.target.value),
        style: { padding: 10, border: '1px solid #ccc', borderRadius: 6 },
      });

const ActionButton = ({ label, onPress }) =>
  ReactNative
    ? React.createElement(ReactNative.Button, { title: label, onPress })
    : React.createElement(
        'button',
        { onClick: onPress, style: { padding: 10, cursor: 'pointer' } },
        label,
      );

const Output = ({ value }) =>
  ReactNative
    ? React.createElement(ReactNative.Text, { style: { fontFamily: 'monospace' } }, value)
    : React.createElement(
        'pre',
        { style: { background: '#f6f8fa', padding: 10, borderRadius: 6 } },
        value,
      );

function App() {
  const [message, setMessage] = useState('Hello, GraphQL!');
  const [output, setOutput] = useState('Awaiting interaction...');
  const unsubscribeRef = useRef(null);

  useEffect(() => {
    unsubscribeRef.current = subscribe({
      query: TICK_SUBSCRIPTION,
      onNext: (payload) => {
        console.log('tick event', payload);
      },
      onError: (error) => console.error('subscription error', error),
    });

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, []);

  const handlePing = async () => {
    const data = await request(PING_QUERY);
    setOutput(`Query result: ${data.ping}`);
  };

  const handleEcho = async () => {
    const data = await request(ECHO_MUTATION, { message });
    setOutput(`Mutation result: ${data.echo}`);
  };

  return React.createElement(
    Container,
    null,
    React.createElement(Heading, null, 'GraphQL demo client'),
    React.createElement(Label, null, 'Echo message'),
    React.createElement(InputField, { value: message, onChange: setMessage }),
    React.createElement(ActionButton, { label: 'Run Query (ping)', onPress: handlePing }),
    React.createElement(ActionButton, { label: 'Run Mutation (echo)', onPress: handleEcho }),
    React.createElement(Output, { value: output }),
  );
}

module.exports = App;
