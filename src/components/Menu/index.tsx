import React, { useState } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

const MenuComponent: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('editorials')
    const handleItemClick = () => {

    }
    return (
        <Menu>
            <Menu.Item
                    name='movies'
                    active={activeItem === 'movies'}
                    onClick={handleItemClick}
                >
                    Movies
            </Menu.Item>

            <Menu.Item
                name='reviews'
                active={activeItem === 'reviews'}
                onClick={handleItemClick}
                >
                TV Series
            </Menu.Item>

            <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={handleItemClick}
                >
                Trending
            </Menu.Item>

            <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={handleItemClick}
            >
                People
            </Menu.Item>
        </Menu>
    )
}

export default MenuComponent
