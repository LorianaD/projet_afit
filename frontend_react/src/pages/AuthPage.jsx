import { useMatch } from "react-router";
import { Login, Register } from "../components/Auth";
import { Main } from "../components/ui";

function AuthPage() {
    const isRegisterPage = useMatch("/auth/register");

    return (
        <Main>
            {isRegisterPage ? <Register /> : <Login />}
        </Main>
    );
}

export default AuthPage;