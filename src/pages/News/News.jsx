import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const { id } = useParams();
    return (
        <div>
            <div className="my-5">
                <Header />
                <Navbar />
            </div>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">news details</h2>
                    {id}
                </div>
                <RightSideNav />
            </div>
            <h2>news details</h2>
        </div>
    );
};

export default News;