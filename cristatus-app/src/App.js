import { Toast } from '@cristatus/components';

import { isEmpty } from '@cristatus/utils';

function App() {
  const testVar = null;
  return (
    <div>
      <header>
        <p>
          <Toast />
          {isEmpty(testVar) ? ('True') : ('False')}
        </p>
      </header>
    </div>
  );
}

export default App;
