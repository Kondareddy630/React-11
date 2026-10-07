import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Search() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("");

    function loadCategories() {
        axios
            .get("https://dummyjson.com/products/category-list")
            .then((res) => setCategories(["all", ...res.data]))
            .catch((error) => console.log(error));
    }

    function loadProducts() {
        axios
            .get("https://dummyjson.com/products")
            .then((res) => setProducts(res.data.products))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        loadCategories();
        loadProducts();
    }, []);

    // Search + Category Filter
    let filteredProducts = products.filter((p) => {

        const matchesSearch = p.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "all" || p.category === category;

        return matchesSearch && matchesCategory;
    });

    // Sort by Price
    if (sortOrder === "asc") {
        // Low to High
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "desc") {
        // High to Low
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <div>

        <pre>

            {
                JSON.stringify(sortOrder)
            }
        </pre>

            <h2 className="text-muted">
                List of All Products
            </h2>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos in impedit aut, aliquam aperiam dolorum ipsum
                suscipit molestias eligendi magni tempora perferendis eos
                voluptas voluptate libero.
            </p>

            {/* Search + Sort */}
            <div className="my-5">

                <div className="row align-items-center">

                    {/* Search */}
                    <div className="col-8">

                        <input
                            type="search"
                            placeholder="Search product by Title"
                            className="form-control form-control-lg"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>

                    {/* Price Sort Buttons */}
                    <div className="col-2 d-flex gap-2">

                        {/* Low to High */}
                        <button
                            className="btn btn-primary"
                            onClick={() => setSortOrder("asc")}
                            title="Price Low to High"
                        >
                            <i className="bi bi-sort-numeric-down fs-2"></i>
                        </button>

                        {/* High to Low */}
                        <button
                            className="btn btn-secondary"
                            onClick={() => setSortOrder("desc")}
                            title="Price High to Low"
                        >
                            <i className="bi bi-sort-numeric-up-alt fs-2"></i>
                        </button>

                    </div>

                </div>

            </div>

            {/* Products */}
            <div className="row">

                {/* Category */}
                <div className="col-2">

                    <label className="fw-bold d-block">
                        Select a Category
                    </label>

                    <select
                        className="form-select mt-2"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >

                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}

                    </select>

                </div>

                {/* Product List */}
                <div className="col-10">

                    <div className="row">

                        {filteredProducts.length === 0 ? (

                            <div className="alert alert-warning">
                                No products found.
                            </div>

                        ) : (

                            filteredProducts.map((p) => (

                                <div
                                    className="col-lg-3"
                                    key={p.id}
                                >

                                    <div className="card shadow mt-2">

                                        <img
                                            src={p.thumbnail}
                                            className="card-img-top"
                                            alt={p.title}
                                        />

                                        <div className="card-header">

                                            <h5 className="text-capitalize">
                                                {p.category}
                                            </h5>

                                        </div>

                                        <div className="card-body">

                                            <dt>Title</dt>
                                            <dd>{p.title}</dd>

                                            <dt>Price</dt>
                                            <dd>
                                                ₹{p.price}
                                            </dd>

                                            <dt>Rating</dt>
                                            <dd>
                                                <span className="badge bg-success">
                                                    {p.rating}
                                                </span>
                                            </dd>

                                        </div>

                                        <div className="card-footer">

                                            <button className="btn btn-danger w-100">
                                                Add To Cart
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Search;
