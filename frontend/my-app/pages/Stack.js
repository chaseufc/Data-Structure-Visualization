import Link from 'next/link';

const Stack = () => {
  return (
    <div>
      <h1>Stack Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Stack;