import { Provider } from 'react-redux';

import { wrapper } from '#redux/store';
import '#styles/globals.css';

export default function App({ Component, ...pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
