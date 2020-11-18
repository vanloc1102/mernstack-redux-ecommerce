import React from "react";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import CarouselComp from "../components/carousel/Carousel";
import { Card } from "antd";

const Home = () => {
    const { Meta } = Card;

    return (
        <>
            <div className="container py-2 pl-2 mt-2 mb-3 border mt-4">
                <div className="row">
                    <div className="col-8 pr-0 pt-2">
                        <CarouselComp />
                    </div>
                    <div className="col-4 pl-2">
                        <img
                            src={require(`../images/right1_385x100.jpg`)}
                            alt=""
                            className="rounded pb-2"
                            style={{ width: "100%", height: "auto" }}
                        />
                        <img
                            src={require(`../images/right2_385x100.jpg`)}
                            alt=""
                            className="rounded pb-2"
                            style={{ width: "100%", height: "auto" }}
                        />
                        <img
                            src={require(`../images/right3.jpg`)}
                            alt=""
                            className="rounded"
                            style={{ width: "100%", height: "100px" }}
                        />
                    </div>
                </div>
            </div>
            <SubList />
            <div className="jumbotron py-3">
                <h4 className="text-center p-2 display-4">New Arrivals</h4>
                <NewArrivals />
            </div>

            <div className="container">
                <img
                    src={require(`../images/637401897672791931_F-H5_1200x200.jpg`)}
                    alt=""
                    className="rounded pb-2"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
            <div
                className="container text-center mt-3 py-4"
                style={{ backgroundColor: "#fcdecf" }}
            >
                <h4 style={{ color: "#cd1817" }}>
                    MÙA TỰU TRƯỜNG - LAPTOP GIẢM KHÔNG TƯỞNG
                </h4>
                <h6>Giảm đến 30% - Giá chỉ từ 5.990.000đ</h6>
                <div className="d-flex flex-row justify-content-center mt-4 flex-wrap">
                    <Card
                        hoverable
                        style={{ width: 270, borderRadius: "10px" }}
                        cover={
                            <img
                                alt="example"
                                src={require(`../images/1.3.jpg`)}
                            />
                        }
                        className="mr-4 px-4"
                    >
                        <Meta
                            title="Laptop Gaming"
                            description="Giảm từ 500.000 - 3 triệu"
                        />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 270, borderRadius: "10px" }}
                        cover={
                            <img
                                alt="example"
                                src={require(`../images/2.3.jpg`)}
                            />
                        }
                        className="mr-4 px-4"
                    >
                        <Meta
                            title="Laptop HP"
                            description="Giảm từ 300.000 - 3 triệu"
                        />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 270, borderRadius: "10px" }}
                        cover={
                            <img
                                alt="example"
                                src={require(`../images/3.3.jpg`)}
                            />
                        }
                        className="mr-4 px-4"
                    >
                        <Meta
                            title="Laptop LENOVO"
                            description="Giảm từ 1 triệu - 3 triệu"
                        />
                    </Card>
                </div>
            </div>
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
                Best Sellers
            </h4>
            <BestSellers />

            <div className="jumbotron py-3 mb-0">
                <h4 className="text-center py-2 display-4">Categories</h4>
                <CategoryList />
            </div>
        </>
    );
};

export default Home;
