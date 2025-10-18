import  React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="./logo.svg" alt="Logo" />

            <ul>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className='flex-center gap-4'>
                <button> 
                    <img src="./search.svg" alt="Search" />
                </button>
                <button> 
                    <img src="./cart.svg" alt="Bag" />
                </button>

            </div>
        </nav>    
    </header>
  )
}

export default Navbar