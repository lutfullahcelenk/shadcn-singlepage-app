import React from "react";
import UserNavigation from "@/components/partials/UserNavigation";

const Settings = () => {
    return (
        <div className="flex-1 mt-10 mx-10">
            <div className="flex justify-end">
                <UserNavigation />
            </div>

            <div className="mt-2">Settings Page</div>
        </div>
    );
};

export default Settings;
