import { SectionContainer, SectionHeader, ProfileInfoItem } from "../ui";
import useUser from "../../hooks/useUser";

function Profile() {

    const token = localStorage.getItem("token");

    const { user, error } = useUser(token);

    if (error) {
        return <p>{error}</p>;
    }

    if (!user) {
        return <p>Chargement du profil...</p>
    }

    return (
        <SectionContainer>
            <SectionHeader title="Mon profil" />
            <div className="profile-info">
                <ProfileInfoItem label="Nom" value={user.name} />
                <ProfileInfoItem label="Prénom" value={user.firstname} />
                <ProfileInfoItem label="Username" value={user.username} />
                <ProfileInfoItem label="Email" value={user.email} />
                <ProfileInfoItem label="Date de naissance" value={user.birthday} />
                <ProfileInfoItem label="Genre" value={user.gender} />
                <ProfileInfoItem label="Taille" value={user.height} />
                <ProfileInfoItem label="Objectif" value={user.goal} />
                <ProfileInfoItem label="Poids initial" value={user.initialWeight} />
            </div>
        </SectionContainer>
    )
}

export default Profile;