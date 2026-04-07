import { useState } from "react"

function ProfilePage() {



  // const [infosUser, setInfosUser] = useState([]);
  // const [error, setError] = useState("");

  // const getInfosUser = async () => {
    // const token = localStorage.getItem('token');
    // console.log(token);

    // const res = await fetch('', {
        
    // })
  // }
  
  return (
    <>
      <h2>Mon Profil</h2>
      <section>
        <div>
          <h3>Nom</h3>
          <p></p>
        </div>
        <div>
          <h3>Prénom</h3>
          <p></p>
        </div>
        <div>
          <h3>Username</h3>
          <p></p>
        </div>
        <div>
          <h3>Email</h3>
          <p></p>
        </div>
        <div>
          <h3>Date de naissance et age</h3>
          <p></p>
        </div>
        <div>
          <h3>Genre</h3>
          <p></p>
        </div>
        <div>
          <h3>Taille (en cm)</h3>
          <p></p>
        </div>
        <div>
          <h3>Objectif</h3>
          <p></p>
        </div>
        <div>
          <h3>Mon poids initial</h3>
          <p></p>
        </div>
      </section>
    </>
  )
}

export default ProfilePage