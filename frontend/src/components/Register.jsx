import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState(""); // Utilisation de password_confirmation avec underscore
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Utilisé pour naviguer vers d'autres routes après l'inscription

  // Gestion de la soumission du formulaire
  const handleRegister = async (event) => {
    event.preventDefault();
    setError(null); // Réinitialiser le message d'erreur

    // Vérification de la correspondance des mots de passe
    if (password !== password_confirmation) { // Utilisation de password_confirmation
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await axios.post('/register', { 
        name, 
        email, 
        password, 
        password_confirmation // Utilisation de password_confirmation
      });
      console.log("Inscription réussie :", response.data);
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation(""); // Réinitialiser le champ password_confirmation
      navigate("/login"); // Rediriger vers la page de connexion après l'inscription réussie
    } catch (e) {
      console.error("Erreur lors de l'inscription :", e);
      setError("Échec de l'inscription. Veuillez réessayer."); // Gérer l'erreur
    }
  };

  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="
                relative
                mx-auto
                max-w-[525px]
                overflow-hidden
                rounded-lg
                bg-white
                py-16
                px-10
                text-center
                sm:px-12
                md:px-[60px]
              "
            >
              <div className="mb-10 text-center md:mb-16">Laraveller</div>
              {error && <p className="text-red-500">{error}</p>} {/* Afficher le message d'erreur */}
              <form onSubmit={handleRegister}>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="
                      border-[#E9EDF4]
                      w-full
                      rounded-md
                      border
                      bg-[#FCFDFE]
                      py-3
                      px-5
                      text-base text-body-color
                      placeholder-[#ACB6BE]
                      outline-none
                      focus:border-primary
                      focus-visible:shadow-none
                    "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      border-[#E9EDF4]
                      w-full
                      rounded-md
                      border
                      bg-[#FCFDFE]
                      py-3
                      px-5
                      text-base text-body-color
                      placeholder-[#ACB6BE]
                      outline-none
                      focus:border-primary
                      focus-visible:shadow-none
                    "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="
                      border-[#E9EDF4]
                      w-full
                      rounded-md
                      border
                      bg-[#FCFDFE]
                      py-3
                      px-5
                      text-base text-body-color
                      placeholder-[#ACB6BE]
                      outline-none
                      focus:border-primary
                      focus-visible:shadow-none
                    "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password Confirmation"
                    value={password_confirmation} // Utilisation de password_confirmation
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    className="
                      border-[#E9EDF4]
                      w-full
                      rounded-md
                      border
                      bg-[#FCFDFE]
                      py-3
                      px-5
                      text-base text-body-color
                      placeholder-[#ACB6BE]
                      outline-none
                      focus:border-primary
                      focus-visible:shadow-none
                    "
                  />
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="
                      w-full
                      px-4
                      py-3
                      bg-indigo-500
                      hover:bg-indigo-700
                      rounded-md
                      text-white
                    "
                  >
                    Register
                  </button>
                </div>
              </form>
              <p className="text-base text-[#adadad]">
                <Link to="/login" className="text-primary hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
