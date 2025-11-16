import Link from 'next/link';
import { routes } from '../lib/constants';

const Navigation = () => {
  return (
    <nav>
      <ul className='flex gap-2'>
        {routes.map((route) => (
          <Link key={route.title} href={route.href}>
            {route.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
