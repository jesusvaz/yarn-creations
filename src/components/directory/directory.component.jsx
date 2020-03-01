import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.pexels.com/photos/1620654/pexels-photo-1620654.jpeg',
          id: 1
        },
        {
          title: 'kids',
          imageUrl: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg',
          id: 2
        },
        {
          title: 'ocational',
          imageUrl: 'https://images.pexels.com/photos/63450/pexels-photo-63450.jpeg',
          id: 3
        },
        {
          title: 'woman',
          imageUrl: 'https://images.pexels.com/photos/3690657/pexels-photo-3690657.jpeg',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://images.pexels.com/photos/3756472/pexels-photo-3756472.jpeg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;