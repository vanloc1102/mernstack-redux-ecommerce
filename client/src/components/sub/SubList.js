import React, { useState, useEffect } from "react";
import { Button } from "antd";

import { Link } from "react-router-dom";
import { getSubs } from "../../functions/sub";

const SubList = () => {
    const [subs, setSubs] = useState([]);
    const [loading, setLoading] = useState(false);
    const icons = [
        "headphones",
        "podcast",
        "clock-o",
        "laptop",
        "tablet",
        "mobile",
        "desktop",
    ];

    useEffect(() => {
        setLoading(true);
        getSubs().then((res) => {
            setSubs(res.data);
            setLoading(false);
        });
    }, []);

    // const showSubs = () =>
    //     subs.map((s) => (
    //         <div
    //             key={s._id}
    //             className="col btn btn-outlined-primary btn-lg btn-block btn-raised m-3"
    //         >
    //             <Link to={`/sub/${s.slug}`}>{s.name}</Link>
    //         </div>
    //     ));

    const showSubBtn = () =>
        subs.map((s, index) => (
            <div key={s._id} className="col m-1">
                <Button
                    type="default"
                    shape="round"
                    size="large"
                    // href={`/sub/${s.slug}`}
                >
                    <Link to={`/sub/${s.slug}`}>
                        <i
                            className={`fa fa-${icons[index]} mr-1`}
                            aria-hidden="true"
                        ></i>
                        {s.name}
                    </Link>
                </Button>
            </div>
        ));
    return (
        <div className="container">
            <div className="row mb-3">
                {loading ? (
                    <h4 className="text-center">Loading...</h4>
                ) : (
                    // showSubs()
                    showSubBtn()
                )}
            </div>
        </div>
    );
};

export default SubList;
