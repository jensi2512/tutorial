import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
function LoginError() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-5 m-auto">
                        <h1>You are not loogin</h1>
                        <p>Login here</p>
                        <SignedOut>
                            <SignInButton>
                                <button className='btn btn-info'>Sign in</button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginError
