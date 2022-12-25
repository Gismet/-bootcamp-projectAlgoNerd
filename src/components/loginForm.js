import "./loginForm.css";
export default function LoginForm(props) {

    const password = "1234";
    const login = () => {
        let input = document.querySelector("#password");
        if (input.value === password) {

            props.clicker(true);
        } else {
            alert("Invalid password");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-card animate">
                <div className="login-card_inner">
                    <div className="login-card_upper">
                        <div className="signin-btn">Sign in</div>
                        <div className="signup-btn">Sign up</div>
                    </div>
                    <div className="login-card_main">
                        <form className="login-form" onSubmit={login}>
                            <div className="login-form-field">
                                <label for="email">Email: </label>
                                <input id="email" type="email" />
                            </div>
                            <div className="login-form-field">
                                <label for="password">Password: </label>
                                <input id="password" type="password" />
                            </div>
                        </form>
                        <div className="login-card_bottom">
                            <button className="login-button" type="submit" onClick={login}>
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
