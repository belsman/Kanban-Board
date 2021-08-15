## Improvements to make

1. Make ```password``` field of the ```UserSerializer``` a ```writable_only```
2. On the backend add registration view for registering a user

3. Track the loading state with the UI and be sure to display an error if server is unreachable.

4. I want to catch authentication error when the path is [auth-user/]('') so that I can return an empty ```{}``` 