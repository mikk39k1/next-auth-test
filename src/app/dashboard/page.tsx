import React from 'react'
import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

const page = () => {

    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = getUser();
    const userData = JSON.stringify(user);

    console.log(user);

    return (
        <div>

            <div>
                <h1>{user.family_name}</h1>
                <h1>{user.email}</h1>
                <h1>{user.id}</h1>
                <h1>{typeof user.picture}</h1>
            </div>
            <LogoutLink>Sign Out</LogoutLink>
        </div>
    )
};
export default page


