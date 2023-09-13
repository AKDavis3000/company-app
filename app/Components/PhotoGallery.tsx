import React from 'react';
import Image from 'next/image';

export default function PhotoGallery() {
  return (
    <div className="photo_gallery">
      <div className="container">
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/greenbg.jpg"
            alt=""
            width={300}
            height={300}
            layout="responsive"
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/sofa-yellow-bg.jpg"
            alt=""
            width={300}
            height={220}
            layout="responsive"
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/lr.jpg"
            alt=""
            width={300}
            height={220}
            layout="responsive"
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/kitchen.jpg"
            alt=""
            width={300}
            height={220}
            layout="responsive"
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/cutlery.jpg"
            alt=""
            width={300}
            height={220}
            layout="responsive"
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/two-tables.jpg"
            alt=""
            width={400}
            height={400}
            layout="responsive"
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/pink-chair.jpg"
            alt=""
            width={300}
            height={300}
            layout="responsive"
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/group-dinner.jpg"
            alt=""
            width={300}
            height={300}
            layout="responsive"
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/child-desk.jpg"
            alt=""
            width={300}
            height={300}
            layout="responsive"
            className="ggi_img"
          />
        </div>
        <div className="gallery_grid_item">
          <Image
            src="/images/gallery/bed.jpg"
            alt=""
            width={300}
            height={300}
            layout="responsive"
            className="ggi_img"
          />
        </div>
      </div>
    </div>
  );
}
