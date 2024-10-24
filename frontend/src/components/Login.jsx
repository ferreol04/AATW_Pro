import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Utilisation d'Axios sans configuration d'API

const Login = () => {   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null); // Réinitialiser le message d'erreur

    try {
      const response = await axios.post('http://localhost:8000/login', { 
        email, password 
      }); // Envoi des données sans token CSRF
      console.log("Connexion réussie :", response.data);
      setEmail("");
      setPassword("");
      navigate("/"); // Redirige vers la page d'accueil après connexion réussie
    } catch (e) {
      console.error("Erreur lors de la connexion :", e);
      setError("Échec de la connexion. Veuillez vérifier vos identifiants.");
    }
  };

  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">Laraveller</div>
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleLogin}>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
                  >
                    Login
                  </button>
                </div>
              </form>
              <Link to="/forgot-password" className="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline">
                Forgot Password?
              </Link>
              <p className="text-base text-[#adadad]">
                Not a member yet?{' '}
                <Link to="/register" className="text-primary hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
