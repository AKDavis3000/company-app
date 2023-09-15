import React from 'react';
import Image from 'next/image';

export default function PhotoGallery() {
  return (
    <div className="photo_gallery">
      <div className="container">
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/greenbg.jpg"
            alt="a green room"
            width={300}
            height={300}
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/sofa-yellow-bg.jpg"
            alt="a grey sofa"
            width={300}
            height={220}
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/lr.jpg"
            alt="a boho themed room"
            width={300}
            height={220}
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/kitchen.jpg"
            alt="a white and black kitchen"
            width={300}
            height={220}
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/cutlery.jpg"
            alt="gold cutlery on a black plate"
            width={300}
            height={220}
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/two-tables.jpg"
            alt="two small tables"
            width={400}
            height={400}
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/pink-chair.jpg"
            alt="a pink chair"
            width={300}
            height={300}
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/group-dinner.jpg"
            alt="people having dinner"
            width={300}
            height={300}
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/child-desk.jpg"
            alt="a white lamp"
            width={300}
            height={300}
            className="ggi_img"
          />
        </div>
      </div>
    </div>
  );
}
