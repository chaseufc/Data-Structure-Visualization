import Link from 'next/link';

export default function Home() {
  return (
    <div>
    <h1>Home Page</h1>
    <nav>
      <ul>
        <li>
          <Link href="/Stack">STACK
          </Link>
        </li>
        <li>
          <Link href="/LinkedListPage">LINKED LIST
          </Link>
        </li>
        <li>
          <Link href="/Tree"> TREE
          </Link>
        </li>
      </ul>
    </nav>
  </div>
  );
}
