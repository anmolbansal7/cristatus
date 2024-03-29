import CodeSnippet from '../common/CodeSnippet';

import styles from './styles.module.css';

const INSTALLATION_CODE = `# Using npm 
npm install cristatus

# Using yarn
yarn add cristatus

# Using pnpm
pnpm install cristatus
`;

const UTILS_CODE = `// Import Cristatus
import { isEmpty } from 'cristatus';

// Use isEmpty function
const isArrayEmpty = isEmpty([1, 2, 3]); // false
`;

function GetStarted() {
  return (
    <div className={styles.get_started}>
      <h1>Get Started with Cristatus</h1>
      <p>
        Welcome to Cristatus!
      </p>

      <p>
        This JavaScript library, built on top of TypeScript,
        is designed to
        <strong>
          {' '}
          simplify working with arrays, objects, strings, numbers and dates.
          {' '}
        </strong>

        Let&apos;s get started with using Cristatus in your projects.
      </p>

      <h2>Installation</h2>

      <p>
        To start using Cristatus, you need to install the main library package,
        as well as any components you want to use.

      </p>

      <p>Install the main library package:</p>

      <CodeSnippet code={INSTALLATION_CODE} showHeader={false} language="bash" />

      <h2>Importing and Usage</h2>

      <p>
        Once installed, you can import Cristatus utilities and components into your
        JavaScript or TypeScript project. Here are some examples of how to use them:

      </p>

      <CodeSnippet code={UTILS_CODE} showHeader={false} language="javascript" />

      <h2>Github Repository</h2>

      <p>
        For detailed information and contributing refer to our
        {' '}
        <a className={styles.anchor} href="https://github.com/anmolbansal7/cristatus">Github</a>
        .
      </p>

      <h2>Next Steps</h2>

      <p>
        Now that you&apos;ve got Cristatus up and running, here are some suggested
        {' '}
        <strong>next steps:</strong>
      </p>

      <ul>
        <li>
          Explore
          {' '}
          <strong>advanced usage scenarios</strong>
          {' '}
          to harness the full power of Cristatus.
        </li>
        <li>
          Check out best practices to optimize your code when
          using Cristatus utilities and components.

        </li>
        <li>
          If you run into any issues, consult our troubleshooting
          guides or reach out to our community for support.
        </li>
      </ul>

      <h2>Open Source Community and Support</h2>

      <p>
        Here, you can actively participate by opening issues to
        {' '}
        <strong>
          discuss various topics, asking questions
        </strong>
        {' '}
        to seek
        help, and sharing your valuable experiences.
      </p>

      <p>
        We encourage you to make a positive impact by contributing
        to this repository through
        {' '}
        <strong>
          Pull Requests (PRs).
        </strong>
        {' '}
        Your PRs can
        include bug fixes, new features, or enhancements that
        align with the project&apos;s goals. Together, we can collaborate to improve and innovate.

      </p>

      <p>
        Join us in shaping the future of this project by engaging in
        meaningful discussions, raising issues, and submitting PRs.
        Your involvement makes all the difference!

      </p>

      <h2>Version and Updates</h2>

      <p>The current stable version of Cristatus is v1.0.2</p>

    </div>
  );
}

export default GetStarted;
