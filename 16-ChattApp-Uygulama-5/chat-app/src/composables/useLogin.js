import { ref } from "vue";
import { projectAuth } from "../firebase/config.js";

const error = ref(null);

const login = async (email, password) => {
    error.value = null;

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password);
        error.value = null;
        return res;
    } catch (err) {
        console.log(err.value);
        error.value = "Yanlış e-posta veya şifre";
    }
}

const useLogin = () => {

    return { error, login };
}

export default useLogin;