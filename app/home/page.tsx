import UserNavigation from "@/components/partials/UserNavigation";
import React from "react";

const Home = () => {
    return (
        <div className="flex-1 mt-10 mx-10">
            <div className="flex justify-end">
                <UserNavigation />
            </div>
        </div>
    );
};

export default Home;
