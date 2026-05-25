function ProductDetail() {

  return (

    <div className="detail-page">

      <div className="detail-container">

        {/* IMAGE */}

        <div className="detail-image">

          <img

            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1470&auto=format&fit=crop"

            alt=""
          />

        </div>

        {/* INFO */}

        <div className="detail-info">

          <p className="detail-tag">

            PRYVORA EXCLUSIVE

          </p>

          <h1>

            Celestia Necklace

          </h1>

          <h2>

            ₹2,499

          </h2>

          <p className="detail-description">

            Crafted with premium anti-tarnish finish,
            the Celestia Necklace blends timeless luxury
            with everyday elegance.

          </p>

          <button>

            Add To Cart

          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetail;