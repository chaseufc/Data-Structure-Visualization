import Link from 'next/link';

const Tree = () => {
  return (
    <div>
      <h1>Tree Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">HOME
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Tree;