import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Shopping() {
  return (
    <>
      <section className="shopping_section">
        <div className="first_p">
          <p>Featured Items</p>
        </div>
        <div className="feature_shopping_grid">
          <div className="grid_item item1">
            <Image
              src="/images/desks/desk1.jpeg"
              alt="a white computer desk"
              width={200}
              height={200}
              className="shopping_grid_img"
            />
            <p className="feature_name">
              <Link
                href=""
                className="feature_links">
                Computer desk
              </Link>
            </p>
            <p className="feature_price">$145</p>
          </div>

          <div className="grid_item item2">
            <Image
              src="/images/lamps/athome-lamp.png"
              alt="a gold floor lamp"
              width={200}
              height={200}
              className="shopping_grid_img"
            />
            <p className="feature_name">
              <Link
                href=""
                className="feature_links">
                Gold floor lamp
              </Link>
            </p>
            <p className="feature_price">$120</p>
          </div>

          <div className="grid_item item3">
            <Image
              src="/images/tables/ad-table.jpeg"
              alt="a blue coffee table"
              width={200}
              height={200}
              className="shopping_grid_img"
            />
            <p className="feature_name">
              <Link
                href=""
                className="feature_links">
                Blue lagoon table
              </Link>
            </p>
            <p className="feature_price">$300</p>
          </div>

          <div className="grid_item item4">
            <Image
              src="/images/tables/table.jpeg"
              alt="a small wooden table"
              width={200}
              height={200}
              className="shopping_grid_img"
            />
            <p className="feature_name">
              <Link
                href=""
                className="feature_links">
                Classic wood table
              </Link>
            </p>
            <p className="feature_price">$250</p>
          </div>

          <div className="grid_item item5">
            <Image
              src="/images/gallery/pink-chair.jpg"
              alt="a pink chair"
              width={200}
              height={200}
              className="shopping_grid_img"
            />
            <p className="feature_name">
              <Link
                href=""
                className="feature_links">
                Pink accent chair
              </Link>
            </p>
            <p className="feature_price">$150</p>
          </div>

          <div className="grid_item item6">
            <Image
              src="/images/couches/couch.png"
              alt="a brown couch"
              width={200}
              height={200}
              className="shopping_grid_img"
            />
            <p className="feature_name">
              <Link
                href=""
                className="feature_links">
                Brown sofa
              </Link>
            </p>
            <p className="feature_price">$850</p>
          </div>

          <div className="grid_item item7">
            <Image
              src="/images/storage/storage1.jpg"
              alt="a brown basket"
              width={200}
              height={200}
              className="shopping_grid_img"
            />
            <p className="feature_name">
              <Link
                href=""
                className="feature_links">
                Brown wicker basket
              </Link>
            </p>
            <p className="feature_price">$80</p>
          </div>

          <div className="grid_item item8">
            <Image
              src="/images/storage/storage2.png"
              alt="clear storage bin"
              width={200}
              height={200}
              className="shopping_grid_img"
            />
            <p className="feature_name">
              <Link
                href=""
                className="feature_links">
                Clear storage bin
              </Link>
            </p>
            <p className="feature_price">$50</p>
          </div>
        </div>
      </section>
    </>
  );
}
