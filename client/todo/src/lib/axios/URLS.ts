interface URLSTypes {
  [key: string]: string;
}

const URLS: URLSTypes = {
  signIn: "/auth/signin",
  signUp: "/auth/signup",
  getTodo: "/todo/get-todo",
};

export default URLS;
