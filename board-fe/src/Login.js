function Login() {
    return (
        <form>
            <input type="text" name="username" placeholder="enter username" />
            <input type="password" name="password" placeholder="enter password" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
