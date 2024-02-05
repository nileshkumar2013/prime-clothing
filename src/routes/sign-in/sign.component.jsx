import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {

    const logGoogleUSer = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUSer}>
                Sign In with Google Pop up
            </button>
        </div>
    )
}

export default SignIn
