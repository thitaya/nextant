import Link from 'next/link'
import { Button } from 'antd';

const Navbar = () => {
    return (
        <div>
            <nav className="nav-shadow" >
                  <Link href='/'>
                  <Button type="primary">Brand </Button>
                  </Link>
                  <Link href='/about'>
                    <a > About Me </a>
                  </Link>
            </nav>
        </div>
    )
}
export default Navbar