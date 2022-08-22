import React from "react";

function Products() {
  return (
    <>
      <section id="products" className="h-auto">
        <div className="container ">
          <h1 className="text-center mt-3">OUR PRODUCTS</h1>
          <div className="row ">
            {/* this flex is import  */}
            <div className=" col-lg-4 col-md-4 d-flex justify-content-center   ">
              <div class="card effect">
                <img
                  src="https://cdn.shopify.com/s/files/1/0331/3696/7725/products/Jeera-Powder1_450x.png?v=1626867241"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body ">
                  <h5 class="card-title text-center fw-bold">Jeera powder</h5>
                  <div className="d-grid">
                    <a href="#" class="btn  btn-success ">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center ">
              <div class="card ">
                <img
                  src="https://www.unjhaspice.com/image/loose_cover-pics/dj.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center fw-bold">Cumin powder</h5>
                  <div className="d-grid">
                    <a href="#" class="btn btn-success ">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center ">
              <div class="card">
                <img
                  src="https://www.instafoodindustries.com/wp-content/uploads/2019/04/Insta-Foods-Garam-Masala-Powder.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center fw-bold">Pepper powder</h5>
                  <div className="d-grid">
                    <a href="#" class="btn  btn-success ">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd row */}
          <div className="row mb-5">
            <div className="col-md-4 d-flex justify-content-center ">
              <div class="card ">
                <img
                  src="https://shop.anagro.in/wp-content/uploads/2022/01/AN-Agro-Turmeric-Powder-01.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center fw-bold">
                    Turmeric powder
                  </h5>
                  <div className="d-grid">
                    <a href="#" class="btn btn-success ">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center ">
              <div class="card">
                <img
                  src="https://asianorganicspices.in/wp-content/uploads/2020/12/Chilli-Powder-removebg-preview.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center fw-bold">Chilly powder</h5>
                  <div className="d-grid">
                    <a href="#" class="btn  btn-success ">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center   mb-sm-5 pb-sm-5  mb-5 pb-5 ">
              <div class="card ">
                <img
                  src="https://asianorganicspices.in/wp-content/uploads/2020/12/dhania-removebg-preview.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title  text-center fw-bold">Dhanni power</h5>
                  <div className="d-grid">
                    <a href="#" class="btn  btn-success ">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
