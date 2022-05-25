import React from "react";
import "./blog.css"

export default function Blog() {
    return (
      <>
        <div className="blog">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide cs"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://i.ytimg.com/vi/EzWUlzr6koM/maxresdefault.jpg"
                  className="imgh"
                  alt="img"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="pt">
            <div className="card fst">
              <img
                src="https://www.beautifulhomes.com/content/dam/beautifulhomes/images/202203/a-guide-to-understanding-pvc-kitchen-cabinets-in-modern-modular-kitchens/Feature_wooden-flooring-for-your-kitchen.webp"
                className="card-img-top pimg"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card lst">
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/8r6a9056-hdr-pano-edit-edit-1578411790.jpg?crop=1xw:1xh;center,top&resize=480:*"
                class="card-img-top pimg"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              risus pretium quam vulputate dignissim. Egestas sed tempus urna et
              pharetra pharetra massa. Blandit aliquam etiam erat velit
              scelerisque in dictum non consectetur. Sit amet risus nullam eget
              felis eget nunc lobortis mattis. Blandit turpis cursus in hac
              habitasse. Curabitur gravida arcu ac tortor dignissim convallis
              aenean et. Senectus et netus et malesuada fames ac turpis egestas.
              Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.
              Purus non enim praesent elementum facilisis. Neque gravida in
              fermentum et.
            </p>
          </div>
          <div>
            <button type="button" className="btn btn-primary read-more">
              Read more 
            </button>
          </div>
        </div>
      </>
    );
  }